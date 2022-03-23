const cityForm=document.querySelector('form')
const detalis = document.querySelector(".detalis");
const card = document.querySelector('.card');

//updateUI
const updateUI=(data)=>{
  const cityDate = data.cityDets;
  const weather = data.weather;
  //apdate detalis templeate
  detalis.innerHTML = `
   <h5 class="my-3">${cityDate.EnglishName}/h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>
                       teamp
                    </span>
                     <span>
                       &deg;C
                    </span>
                </div>
  
  
  `;
  console.log(data);
}

//update city
const updateCity=async(city)=>{
const cityDets = await getCity(city);
const weather = await getweather(cityDets.Key);

return {cityDets, weather};
  
 


}
//prevent default

cityForm.addEventListener('submit',e=>{

  e.preventDefault()

//   //get city value

  const city=cityForm.city.value.trim()

  cityForm.reset()
  //apdate the ui with new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((error) => console.log(error));
})