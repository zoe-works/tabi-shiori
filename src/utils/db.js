import { db } from '../firebase.js';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp, setDoc } from 'firebase/firestore';

export function generateShareId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Trips CRUD
export async function getTrips(userId) {
  const q = query(collection(db, 'users', userId, 'trips'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getTrip(userId, tripId) {
  const docRef = doc(db, 'users', userId, 'trips', tripId);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

export async function createTrip(userId, tripData) {
  const data = {
    ...tripData,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, 'users', userId, 'trips'), data);
  return docRef.id;
}

export async function updateTrip(userId, tripId, data) {
  const docRef = doc(db, 'users', userId, 'trips', tripId);
  await updateDoc(docRef, data);
}

export async function deleteTrip(userId, tripId) {
  await deleteDoc(doc(db, 'users', userId, 'trips', tripId));
}

// Subcollections CRUD Helper
async function getSubcollection(userId, tripId, subName) {
  const snapshot = await getDocs(collection(db, 'users', userId, 'trips', tripId, subName));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function addSubcollectionItem(userId, tripId, subName, data) {
  const docRef = await addDoc(collection(db, 'users', userId, 'trips', tripId, subName), {
    ...data,
    createdAt: serverTimestamp()
  });
  return docRef.id;
}

async function updateSubcollectionItem(userId, tripId, subName, itemId, data) {
  await updateDoc(doc(db, 'users', userId, 'trips', tripId, subName, itemId), data);
}

async function deleteSubcollectionItem(userId, tripId, subName, itemId) {
  await deleteDoc(doc(db, 'users', userId, 'trips', tripId, subName, itemId));
}

// flashcards
export const getFlashcards = (userId, tripId) => getSubcollection(userId, tripId, 'flashcards');
export const addFlashcard = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'flashcards', data);
export const updateFlashcard = (userId, tripId, cardId, data) => updateSubcollectionItem(userId, tripId, 'flashcards', cardId, data);
export const deleteFlashcard = (userId, tripId, cardId) => deleteSubcollectionItem(userId, tripId, 'flashcards', cardId);

// checklist
export const getChecklist = (userId, tripId) => getSubcollection(userId, tripId, 'checklist');
export const addChecklistItem = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'checklist', data);
export const updateChecklistItem = (userId, tripId, itemId, data) => updateSubcollectionItem(userId, tripId, 'checklist', itemId, data);
export const deleteChecklistItem = (userId, tripId, itemId) => deleteSubcollectionItem(userId, tripId, 'checklist', itemId);

// schedules
export const getSchedules = (userId, tripId) => getSubcollection(userId, tripId, 'schedules');
export const addScheduleItem = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'schedules', data);
export const updateScheduleItem = (userId, tripId, itemId, data) => updateSubcollectionItem(userId, tripId, 'schedules', itemId, data);
export const deleteScheduleItem = (userId, tripId, itemId) => deleteSubcollectionItem(userId, tripId, 'schedules', itemId);

// research
export const getResearchNotes = (userId, tripId) => getSubcollection(userId, tripId, 'research');
export const addResearchNote = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'research', data);
export const updateResearchNote = (userId, tripId, noteId, data) => updateSubcollectionItem(userId, tripId, 'research', noteId, data);
export const deleteResearchNote = (userId, tripId, noteId) => deleteSubcollectionItem(userId, tripId, 'research', noteId);

// budget
export const getBudgetItems = (userId, tripId) => getSubcollection(userId, tripId, 'budget');
export const addBudgetItem = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'budget', data);
export const updateBudgetItem = (userId, tripId, itemId, data) => updateSubcollectionItem(userId, tripId, 'budget', itemId, data);
export const deleteBudgetItem = (userId, tripId, itemId) => deleteSubcollectionItem(userId, tripId, 'budget', itemId);

// emergency
export const getEmergencyContacts = (userId, tripId) => getSubcollection(userId, tripId, 'emergency');
export const addEmergencyContact = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'emergency', data);
export const updateEmergencyContact = (userId, tripId, contactId, data) => updateSubcollectionItem(userId, tripId, 'emergency', contactId, data);
export const deleteEmergencyContact = (userId, tripId, contactId) => deleteSubcollectionItem(userId, tripId, 'emergency', contactId);

// omiyage
export const getOmiyageList = (userId, tripId) => getSubcollection(userId, tripId, 'omiyage');
export const addOmiyageItem = (userId, tripId, data) => addSubcollectionItem(userId, tripId, 'omiyage', data);
export const updateOmiyageItem = (userId, tripId, itemId, data) => updateSubcollectionItem(userId, tripId, 'omiyage', itemId, data);
export const deleteOmiyageItem = (userId, tripId, itemId) => deleteSubcollectionItem(userId, tripId, 'omiyage', itemId);

// Share Access
export async function getTripByShareId(shareId) {
  const q = query(collection(db, 'sharedTrips'), where('shareId', '==', shareId));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    const data = snapshot.docs[0].data();
    return getTrip(data.userId, data.tripId);
  }
  return null;
}

export async function createShareLink(userId, tripId, password) {
  const shareId = generateShareId();
  await addDoc(collection(db, 'sharedTrips'), {
    shareId,
    password,
    userId,
    tripId,
    createdAt: serverTimestamp()
  });
  return shareId;
}

export async function verifySharePassword(shareId, password) {
  const q = query(collection(db, 'sharedTrips'), where('shareId', '==', shareId));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    const data = snapshot.docs[0].data();
    return data.password === password;
  }
  return false;
}
