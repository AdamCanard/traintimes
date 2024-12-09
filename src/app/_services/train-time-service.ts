import { db } from "../_utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export const addTrip = async (
  start: string,
  end: string,
  difference: number,
) => {
  const docRef = await addDoc(collection(db, "times"), {
    start: start,
    end: end,
    difference: difference,
  });
  console.log("Trip was created with an ID of ", docRef.id);
};
