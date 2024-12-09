import { getTrips } from "@/app/_services/train-time-service";
import { DocumentData } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const start: string = formData.get("start") as string;
    const end: string = formData.get("end") as string;

    const trips = await getTrips(start, end);
    const tripsJson: DocumentData[] = [];
    trips.forEach((doc) => {
      console.log(doc.data());
      tripsJson.push(doc.data());
    });
    return NextResponse.json(JSON.stringify(tripsJson), {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(
      JSON.stringify(`Error: could not get trip. ${e}`),
      { status: 500 },
    );
  }
}
