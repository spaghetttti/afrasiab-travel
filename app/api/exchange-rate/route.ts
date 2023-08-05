async function fetchApiData() {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "mZB93UQkDfGcanNx5wrVgWbjzS5EyS7S");

  const response = await fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=UZS&from=USD&amount=1",
    {
      method: "GET",
      headers: myHeaders,
      next: { revalidate: 86400 }, //store cache for 24 hours 
    }
  );
  const data = await response.json();
  return data;
}

export async function GET(request: Request) {
  const apiData = await fetchApiData();

  return new Response(JSON.stringify(apiData));
}
