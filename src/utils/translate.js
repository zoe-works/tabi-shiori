import { getState } from './store.js';

const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbwARwcfB8irhjuKvmaifTk-M0FePVPjzVohKRZTXaQtTAvpN1K4iX-cr5rdiAfYpATr/exec';

// Simple in-memory cache to avoid redundant API calls
const translationCache = new Map();

/**
 * Translates arbitrary text into the current language using the GAS API.
 * @param {string} text - The text to translate
 * @returns {Promise<string>} - The translated text
 */
export async function translateUserText(text) {
  if (!text || typeof text !== 'string') return text;

  const { language } = getState();
  
  // No translation needed if language is Japanese (assuming user inputs in JA)
  // Or if it's already cached
  const cacheKey = `${text}_${language}`;
  if (language === 'ja') return text;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

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
      return data.translatedText;
    }
    
    return text; // fallback to original
  } catch (error) {
    console.warn('Translation failed:', error);
    return text; // fallback to original on error
  }
}
