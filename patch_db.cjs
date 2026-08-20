const fs = require('fs');
let code = fs.readFileSync('src/utils/db.js', 'utf8');

code = code.replace(
  'return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));',
  `const myTrips = snapshot.docs.map(doc => ({ id: doc.id, ownerId: userId, ...doc.data() }));
  
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
  });`
);

code = code.replace(
  'return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;',
  'return snapshot.exists() ? { id: snapshot.id, ownerId: userId, ...snapshot.data() } : null;'
);

fs.writeFileSync('src/utils/db.js', code, 'utf8');
