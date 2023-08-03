// import fs from "fs";
// import fetch from "node-fetch";

const cacheDir = "./cache";

export async function fetchApiData() {
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

// async function getApiData() {
//   const cacheKey = "api-data"; // You can use a more specific cache key based on the request URL and query parameters
//   const cachePath = `${cacheDir}/${cacheKey}.json`;

//   try {
//     const stats = fs.statSync(cachePath);
//     const cacheAge = Date.now() - stats.mtimeMs;

//     if (cacheAge < 24 * 60 * 60 * 1000) {
//       // Use cached data if it's less than 24 hours old
//       const cachedData = fs.readFileSync(cachePath, "utf-8");
//       return JSON.parse(cachedData);
//     }
//   } catch (error: any) {
//     console.log(`Cache miss: ${error.message}`);
//   }

//   const apiData = await fetchApiData();
//   fs.writeFileSync(cachePath, JSON.stringify(apiData));
//   return apiData;
// }

export async function GET(request: Request) {
  // const apiData = await getApiData();
  const apiData = await fetchApiData();

  console.log(apiData);

  return new Response(JSON.stringify(apiData));

  // return {
  //   props: {
  //     apiData,
  //   },
  // };
}
