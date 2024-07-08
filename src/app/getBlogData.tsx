import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

export async function getBlogData() {
  try {
    const querySnapshot = await getDocs(collection(db, "blog"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
