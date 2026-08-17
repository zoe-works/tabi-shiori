const state = {
  user: null,
  currentTrip: null,
  currentTripId: null,
  trips: [],
  isLoading: false,
};

const listeners = new Map();

export function getState() { 
  return { ...state }; 
}

export function setState(updates) {
  Object.assign(state, updates);
  Object.keys(updates).forEach(key => {
    if (listeners.has(key)) {
      listeners.get(key).forEach(callback => callback(state[key]));
    }
  });
}

export function subscribe(key, callback) {
  if (!listeners.has(key)) {
    listeners.set(key, new Set());
  }
  listeners.get(key).add(callback);
}

export function unsubscribe(key, callback) {
  if (listeners.has(key)) {
    listeners.get(key).delete(callback);
  }
}

// 便利関数
export function setCurrentTrip(trip) { 
  setState({ currentTrip: trip, currentTripId: trip?.id }); 
}

export function setUser(user) { 
  setState({ user }); 
}

export function setTrips(trips) { 
  setState({ trips }); 
}

export function setLoading(isLoading) { 
  setState({ isLoading }); 
}
