export async function POST(req: Request) {
  const formData = await req.formData();
  const start = formData.get("start") as string;
  const end = formData.get("end") as string;

  const time = formData.get("difference") as string;
  console.log(start + " to " + end + " " + time);
  return new Response(JSON.stringify({ data: {} }), {
    status: 200,
  });
}
