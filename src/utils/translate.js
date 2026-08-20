import { getState } from './store.js';

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbwARwcfB8irhjuKvmaifTk-M0FePVPjzVohKRZTXaQtTAvpN1K4iX-cr5rdiAfYpATr/exec';

// Persistent cache to avoid redundant API calls and speed up rendering
const CACHE_KEY = 'tabi_shiori_translation_cache';
let translationCache = new Map();

try {
  const stored = localStorage.getItem(CACHE_KEY);
  if (stored) {
    translationCache = new Map(Object.entries(JSON.parse(stored)));
  }
} catch (e) {
  console.warn('Failed to load translation cache', e);
}

function saveCache() {
  try {
    const obj = Object.fromEntries(translationCache);
    localStorage.setItem(CACHE_KEY, JSON.stringify(obj));
  } catch (e) {}
}

/**
 * Translates arbitrary text into the current language using the GAS API.
 * @param {string} text - The text to translate
 * @returns {Promise<string>} - The translated text
 */
export async function translateUserText(text, useCacheOnly = false) {
  if (!text || typeof text !== 'string') return text;
  
  // Return early if text is just numbers/symbols
  if (/^[\d\s\W]+$/.test(text)) return text;

  const { language } = getState();
  
  // No translation needed if language is Japanese (assuming user inputs in JA)
  if (language === 'ja') return text;

  const cacheKey = `${text}_${language}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  if (useCacheOnly) return text;

  try {
    const url = new URL(GAS_API_URL);
    url.searchParams.append('text', text);
    url.searchParams.append('target', language);

    const response = await fetch(url.toString(), {
      method: 'GET', // GAS Web Apps allow GET with CORS
    });
    
    const data = await response.json();
    if (data.success && data.translatedText) {
      translationCache.set(cacheKey, data.translatedText);
      saveCache();
      return data.translatedText;
    }
    
    return text; // fallback to original
  } catch (error) {
    console.warn('Translation failed:', error);
    return text; // fallback to original on error
  }
}
