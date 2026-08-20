const fs = require('fs');
let code = fs.readFileSync('src/utils/db.js', 'utf8');

const newFn = `
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
`;

code = code + newFn;
fs.writeFileSync('src/utils/db.js', code, 'utf8');
