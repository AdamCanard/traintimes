import { addTrip } from "@/app/_services/train-time-service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const start: string = formData.get("start") as string;
    const end: string = formData.get("end") as string;
    const difference: number = +(formData.get("difference") as string);

    await addTrip(start, end, difference);
  } catch (e) {
    return NextResponse.json(
      JSON.stringify(`Error: could not add trip. ${e}`),
      { status: 500 },
    );
  }

  return NextResponse.json(JSON.stringify("Successfully added trip."), {
    status: 200,
  });
}
