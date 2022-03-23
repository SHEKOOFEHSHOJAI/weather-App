//get wather
const getweather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data;
};

//get information

//get https://developer.accuweather.com/
const key = "	GVt5hQJozPYX9YH4BSAaWx1gFAzC4XzY";
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

getCity("landan")
  .then((data) => {
    console.log(data);
    return getweather(data.Key);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((eroor) => console.error(eroor));
