import { db } from '../firebase.js';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp, setDoc } from 'firebase/firestore';
import { getState } from './store.js';

export function getUserId() {
  const state = getState();
  return state.user?.uid;
}

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
  const myTrips = snapshot.docs.map(doc => ({ id: doc.id, ownerId: userId, ...doc.data() }));
  
  let joinedTrips = [];
  try {
    const q2 = query(collection(db, 'users', userId, 'joinedTrips'));
    const snap2 = await getDocs(q2);
    for (const d of snap2.docs) {
      const { ownerId, tripId } = d.data();
      const tripData = await getTrip(ownerId, tripId);
      if (tripData) {
        tripData.isShared = true;
        joinedTrips.push(tripData);
      }
    }
  } catch(e) {}
  
  return [...myTrips, ...joinedTrips].sort((a, b) => {
    const tA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
    const tB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
    return tB - tA;
  });
}

export async function getTrip(userId, tripId) {
  // userId is ownerId here
  const docRef = doc(db, 'users', userId, 'trips', tripId);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ownerId: userId, ...snapshot.data() } : null;
}

export async function createTrip(userId, tripData) {
  const data = {
    ...tripData,
    ownerId: userId,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, 'users', userId, 'trips'), data);
  const tripId = docRef.id;

  // デフォルトのスケジュール枠を自動生成
  if (data.startDate && data.endDate) {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    for (let i = 1; i <= days; i++) {
      if (i === 1) {
        await addScheduleItem(tripId, { day: 1, time: '08:00', title: '出発', category: 'transport', order: 0 });
        await addScheduleItem(tripId, { day: 1, time: '15:00', title: 'ホテル到着・チェックイン', category: 'hotel', order: 1 });
      } else if (i === days) {
        await addScheduleItem(tripId, { day: i, time: '10:00', title: 'ホテル出発・帰路へ', category: 'transport', order: 0 });
        await addScheduleItem(tripId, { day: i, time: '18:00', title: '自宅到着', category: 'other', order: 1 });
      } else {
        await addScheduleItem(tripId, { day: i, time: '09:00', title: '観光スタート', category: 'sightseeing', order: 0 });
      }
    }
  }

  return tripId;
}

export async function updateTrip(userId, tripId, data) {
  const docRef = doc(db, 'users', userId, 'trips', tripId);
  await updateDoc(docRef, data);
}

export async function deleteTrip(userId, tripId) {
  await deleteDoc(doc(db, 'users', userId, 'trips', tripId));
}

// Subcollections CRUD Helper
async function getSubcollection(tripId, subName) {
  const state = getState();
  const userId = state.currentTrip?.ownerId || getUserId();
  const snapshot = await getDocs(collection(db, 'users', userId, 'trips', tripId, subName));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function addSubcollectionItem(tripId, subName, data) {
  const state = getState();
  const userId = state.currentTrip?.ownerId || getUserId();
  const docRef = await addDoc(collection(db, 'users', userId, 'trips', tripId, subName), {
    ...data,
    createdAt: serverTimestamp()
  });
  return docRef.id;
}

async function updateSubcollectionItem(tripId, subName, itemId, data) {
  const state = getState();
  const userId = state.currentTrip?.ownerId || getUserId();
  await updateDoc(doc(db, 'users', userId, 'trips', tripId, subName, itemId), data);
}

async function deleteSubcollectionItem(tripId, subName, itemId) {
  const state = getState();
  const userId = state.currentTrip?.ownerId || getUserId();
  await deleteDoc(doc(db, 'users', userId, 'trips', tripId, subName, itemId));
}

// flashcards
export const getFlashcards = (tripId) => getSubcollection(tripId, 'flashcards');
export const addFlashcard = (tripId, data) => addSubcollectionItem(tripId, 'flashcards', data);
export const updateFlashcard = (tripId, cardId, data) => updateSubcollectionItem(tripId, 'flashcards', cardId, data);
export const deleteFlashcard = (tripId, cardId) => deleteSubcollectionItem(tripId, 'flashcards', cardId);

// checklist
export const getChecklist = (tripId) => getSubcollection(tripId, 'checklist');
export const addChecklistItem = (tripId, data) => addSubcollectionItem(tripId, 'checklist', data);
export const updateChecklistItem = (tripId, itemId, data) => updateSubcollectionItem(tripId, 'checklist', itemId, data);
export const deleteChecklistItem = (tripId, itemId) => deleteSubcollectionItem(tripId, 'checklist', itemId);

// schedules
export const getSchedules = (tripId) => getSubcollection(tripId, 'schedules');
export const addScheduleItem = (tripId, data) => addSubcollectionItem(tripId, 'schedules', data);
export const updateScheduleItem = (tripId, itemId, data) => updateSubcollectionItem(tripId, 'schedules', itemId, data);
export const deleteScheduleItem = (tripId, itemId) => deleteSubcollectionItem(tripId, 'schedules', itemId);

// research
export const getResearchNotes = (tripId) => getSubcollection(tripId, 'research');
export const addResearchNote = (tripId, data) => addSubcollectionItem(tripId, 'research', data);
export const updateResearchNote = (tripId, noteId, data) => updateSubcollectionItem(tripId, 'research', noteId, data);
export const deleteResearchNote = (tripId, noteId) => deleteSubcollectionItem(tripId, 'research', noteId);

// budget
export const getBudgetItems = (tripId) => getSubcollection(tripId, 'budget');
export const addBudgetItem = (tripId, data) => addSubcollectionItem(tripId, 'budget', data);
export const updateBudgetItem = (tripId, itemId, data) => updateSubcollectionItem(tripId, 'budget', itemId, data);
export const deleteBudgetItem = (tripId, itemId) => deleteSubcollectionItem(tripId, 'budget', itemId);

// emergency
export const getEmergencyContacts = (tripId) => getSubcollection(tripId, 'emergency');
export const addEmergencyContact = (tripId, data) => addSubcollectionItem(tripId, 'emergency', data);
export const updateEmergencyContact = (tripId, contactId, data) => updateSubcollectionItem(tripId, 'emergency', contactId, data);
export const deleteEmergencyContact = (tripId, contactId) => deleteSubcollectionItem(tripId, 'emergency', contactId);

// User Settings
export async function getUserSettings(userId) {
  if (!userId) return null;
  const docRef = doc(db, 'users', userId, 'settings', 'master');
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : null;
}

export async function updateUserSettings(userId, data) {
  if (!userId) return;
  const docRef = doc(db, 'users', userId, 'settings', 'master');
  await setDoc(docRef, data, { merge: true });
}

// omiyage
export const getOmiyageList = (tripId) => getSubcollection(tripId, 'omiyage');
export const addOmiyageItem = (tripId, data) => addSubcollectionItem(tripId, 'omiyage', data);
export const updateOmiyageItem = (tripId, itemId, data) => updateSubcollectionItem(tripId, 'omiyage', itemId, data);
export const deleteOmiyageItem = (tripId, itemId) => deleteSubcollectionItem(tripId, 'omiyage', itemId);

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
    return data;
  }
  return null;
}

export async function joinSharedTrip(shareId) {
  const userId = getUserId();
  if (!userId) throw new Error('Not logged in');
  
  const tripInfo = await verifySharePassword(shareId, '');
  if (!tripInfo) throw new Error('Invalid password');
  
  const q = query(collection(db, 'users', userId, 'joinedTrips'), where('tripId', '==', tripInfo.tripId));
  const snap = await getDocs(q);
  if (snap.empty) {
    await addDoc(collection(db, 'users', userId, 'joinedTrips'), {
      ownerId: tripInfo.userId,
      tripId: tripInfo.tripId,
      joinedAt: serverTimestamp()
    });
  }
  return true;
}
