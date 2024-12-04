export async function GET(
  request: Request,
  { params }: { params: Promise<{ line: string }> },
) {
  const line = (await params).line;
  console.log(line);
  if (line === "red") {
    return new Response(
      JSON.stringify({
        trains: [
          "Tuscany",
          "Crowfoot",
          "Dalhousie",
          "Brentwood",
          "University",
          "Banff Trail",
          "Lions Park",
          "SAIT ACAD Jubilee",
          "Sunnyside",
          "8 Street",
          "7 Street",
          "6 Street",
          "4 Street",
          "3 Street",
          "1 Street",
          "Center Street",
          "City Hall N",
          "City Hall S",
          "Victoria Park Stampede",
          "Erlton Stampede",
          "39 Avenue",
          "Chinook",
          "Heritage",
          "Southland",
          "Anderson",
          "Canyon Meadows",
          "Fish Creek-Lacombe",
          "Shawnessy",
          "Somerset-Bridlewood",
        ],
      }),
      {
        status: 200,
      },
    );
  } else if (line === "blue") {
    return new Response(
      JSON.stringify({
        trains: [
          "69 Street",
          "Sirocco",
          "45 Street",
          "Westbrook",
          "Shaganappi Point",
          "Sunalta",
          "Downtown West Kirby",
          "8 Street",
          "7 Street",
          "6 Street",
          "4 Street",
          "3 Street",
          "1 Street",
          "Center Street",
          "City Hall N",
          "City Hall S",
          "Bridgeland Memorial",
          "Zoo",
          "Barlow Max Bell",
          "Franklin",
          "Marlborough",
          "Rundle",
          "Whitehorn",
          "McKnight-Westwinds",
          "Martindale",
          "Saddletowne",
        ],
      }),
      {
        status: 200,
      },
    );
  } else {
    return new Response(JSON.stringify({ trains: [] }), {
      status: 500,
    });
  }
}
