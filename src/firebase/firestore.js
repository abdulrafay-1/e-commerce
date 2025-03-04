import app from "./firebase.config";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, orderBy, limit };
