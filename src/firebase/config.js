import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDJ8Od3mIyPETASuAghqoySGjRTjmKKqTw",
  authDomain: "kinohub-94c0d.firebaseapp.com",
  projectId: "kinohub-94c0d",
  storageBucket: "kinohub-94c0d.appspot.com",
  messagingSenderId: "468624987907",
  appId: "1:468624987907:web:228c6f973fea53ba13fb36"
};

// init firebase
initializeApp(firebaseConfig)

// init auth
const auth = getAuth()

export { auth }

