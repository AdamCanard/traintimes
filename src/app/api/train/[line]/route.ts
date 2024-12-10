export async function GET(
  request: Request,
  { params }: { params: Promise<{ line: string }> },
) {
  const line = (await params).line;
  if (line === "Red") {
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
  } else if (line === "Blue") {
    return new Response(
      JSON.stringify({
        trains: [
          "Saddletowne",
          "Martindale",
          "McKnight-Westwinds",
          "Whitehorn",
          "Rundle",
          "Marlborough",
          "Franklin",
          "Barlow Max Bell",
          "Zoo",
          "Bridgeland Memorial",
          "City Hall S",
          "City Hall N",
          "Center Street",
          "1 Street",
          "3 Street",
          "4 Street",
          "6 Street",
          "7 Street",
          "8 Street",
          "Downtown West Kirby",
          "Sunalta",
          "Shaganappi Point",
          "Westbrook",
          "45 Street",
          "Sirocco",
          "69 Street",
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
