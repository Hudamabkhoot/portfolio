import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs,  
    query,
} from "firebase/firestore"
import toast from 'react-hot-toast'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function fetchCollectionData(collectionName) {
    try {
      const collectionRef = collection(db, collectionName);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
      const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      return dataArr;
    } catch (error) {
        toast.error('Something went wrong, please try again later');
        return 
    }
  }