//get https://developer.accuweather.com/
const key = 'n0JY9ASOb13UqhjxArTx6faicvRsnBnt';
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apiKey=${Key}&q=${city}`;
  const response=await fetch(base+query)
  const data=await response.json();
  console.log(data);
};
      
getCity("manchester")

