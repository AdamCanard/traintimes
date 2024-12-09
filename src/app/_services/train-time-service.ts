import { db } from "../_utils/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

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

export const getTrips = async (start: string, end: string) => {
  const q = query(
    collection(db, "times"),
    where("start", "==", start),
    where("end", "==", end),
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};
