function useOldWeatherData(data: any) {
    const currentTime: Date = new Date();
    let currentWeather : any;
    data.hourly.data.map((weatherByHour: { date: string | number | Date; }) => {
        const targetDateTime = new Date( weatherByHour.date);
        if (currentTime.getHours() === targetDateTime.getHours() &&
        currentTime.getDate() === targetDateTime.getDate()) {
            currentWeather = weatherByHour;
        }
    })
    // console.log('its the same day and hour');
    // console.log(currentWeather);
    return currentWeather;
}

async function fetchApiData() {
  const response = await fetch(
    "https://www.meteosource.com/api/v1/free/point?lat=41.3N&lon=69.2E&sections=current%2Chourly&language=en&units=metric&key=y1f9tymubwge617ftelk5zjkw54dg3chf1ckup94",
    {
      method: "GET",
      next: { revalidate: 82800 }, //store cache for 23 hours 
    }
  );
  const data = await response.json();
  
  return useOldWeatherData(data);;
}

export async function GET(request: Request) {
  const apiData = await fetchApiData();
  return new Response(JSON.stringify(apiData));
}
