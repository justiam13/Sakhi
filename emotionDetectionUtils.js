import * as tf from '@tensorflow/tfjs';
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { getDatabase, ref, query, limitToLast, onValue } from 'firebase/database';
import { auth } from './FirebaseConfig'; // Adjust according to your Firebase setup

export const fetchLocation = async () => {
  const response = await fetch('curl "ipinfo.io/61.2.6.178?token=799a04a60867cf"'); // Replace with your location API token
  const data = await response.json();
  return data.loc.split(',');
};

export const storeEmotionAndLocation = async (userId, emotion, location) => {
  const firestore = getFirestore();
  try {
    await setDoc(doc(firestore, 'emotions', userId), {
      emotion,
      location,
      timestamp: new Date().toISOString(),
    }, { merge: true });
    console.log('Emotion and location stored successfully!');
  } catch (error) {
    console.error('Error storing emotion and location:', error);
  }
};

export const checkForAlerts = (userId) => {
  const database = getDatabase();
  const refPath = `emotions/${userId}`;
  const ref = query(ref(database, refPath), limitToLast(1));

  onValue(ref, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const emotion = data.emotion;
      if (['fear', 'sad'].includes(emotion)) {
        sendAlert(data.location);
      }
    }
  });
};

export const predictEmotion = async (mobilenetModel, knn, faceRegion) => {
  const activation = mobilenetModel.infer(faceRegion, true);
  const emotion = await knn.predictClass(activation);
  return emotion;
};

export const sendAlert = (location) => {
  // Implement your alert logic here (e.g., send SMS, email, etc.)
  console.log(`Alert! Emotion detected at location: ${location}`);
};
