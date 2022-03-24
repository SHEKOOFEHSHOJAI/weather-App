const cityForm=document.querySelector('form')
const detalis = document.querySelector(".detalis");
const card = document.querySelector('.card');
const time=document.querySelector('.time')
const icon = document.querySelector(".icon img");
//updateUI
const updateUI=(data)=>{
  const cityDate = data.cityDets;
  const weather = data.weather;

  //updateUI destructure
  // const{cityDets,weather}=data
  //apdate detalis templeate

  //  ${weather.Temperature.Metric.Value}
  detalis.innerHTML = `
   <h5 class="my-3">${cityDate.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>
                     temp
                    </span>
                     <span>
                       &deg;C
                    </span>
                </div>
  
  
  `;


  //apdate the night/day and icon image
  let timeSrc=null
  if (weather.IsDayTime) {

   timeSrc='img/day.svg'
  }else{
    timeSrc = "img/night.svg";
  }
  time.setAttribute('src',timeSrc)
 
  //remove the d-none class if parent
  card.classList.remove("d-none");
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