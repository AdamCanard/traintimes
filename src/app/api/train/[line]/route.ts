export async function GET(
  request: Request,
  { params }: { params: Promise<{ line: string }> },
) {
  const line = (await params).line;
  if (line === "red") {
    return new Response(
      JSON.stringify({
        trains: [
          "Somerset-Bridlewood",
          "Shawnessy",
          "Fish Creek-Lacombe",
          "Canyon Meadows",
          "Anderson",
          "Southland",
          "Heritage",
          "Chinook",
          "39 Avenue",
          "Erlton Stampede",
          "Victoria Park Stampede",
          "City Hall S",
          "City Hall N",
          "Center Street",
          "1 Street",
          "3 Street",
          "4 Street",
          "6 Street",
          "7 Street",
          "8 Street",
          "Sunnyside",
          "SAIT ACAD Jubilee",
          "Lions Park",
          "Banff Trail",
          "University",
          "Brentwood",
          "Dalhousie",
          "Crowfoot",
          "Tuscany",
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
