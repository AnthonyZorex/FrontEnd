let apiKey = "5280dc3a03fe5ca3ac2310f426320266";
let city = document.querySelector("#search");
let cityElement = document.querySelector(".city");
let wetherElement = document.querySelector(".temp");
let buttonSearch = document.getElementById("look");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");

async function wether(){
    try{
        let url =(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&units=metric&appid=${apiKey}`);
        if(city.value!=0){
            let respons = await fetch(url);
            let data = await respons.json();
            document.getElementById("icon").style.height = "100px";
            document.getElementById("icon").style.textAlign="center";
            document.getElementById("icon").style.marginTop="50px";
            document.getElementById("icon").style.width = "100px";
            document.getElementById("infoblock").style.display="block";
            document.getElementById("main").style.display="block";
            cityElement.textContent = String(data['name']);
            if(String(data["weather"][0]["main"])==="Clear"){
                humidity.textContent = String(data['main']['humidity'])+"%";
                wetherElement.textContent = String(Math.round(data['main']['temp'])+" "+"°C");
                wind.textContent = String(data['wind']['speed'])+" "+"km/h";
               return document.getElementById("icon").src = "images/clear.png";
            }
            else if(String(data["weather"][0]["main"])==="Clouds"){
                humidity.textContent = String(data['main']['humidity'])+"%";
                wetherElement.textContent = String(Math.round(data['main']['temp'])+" "+"°C");
                wind.textContent = String(data['wind']['speed'])+" "+"km/h";
                return  document.getElementById("icon").src = "images/clouds.png";
            }
            else if(String(data["weather"][0]["main"])==="Rain"){
                humidity.textContent = String(data['main']['humidity'])+"%";
                wetherElement.textContent = String(Math.round(data['main']['temp'])+" "+"°C");
                wind.textContent = String(data['wind']['speed'])+" "+"km/h";
                return  document.getElementById("icon").src = "images/rain.png";
            }
            else if(String(data["weather"][0]["main"])==="Snow"){
                humidity.textContent = String(data['main']['humidity'])+"%";
                wetherElement.textContent = String(Math.round(data['main']['temp'])+" "+"°C");
                wind.textContent = String(data['wind']['speed'])+" "+"km/h";
                return  document.getElementById("icon").src = "images/snow.png";
            }
            else if(String(data["weather"][0]["main"])==="Drizzle"){
                humidity.textContent = String(data['main']['humidity'])+"%";
                wetherElement.textContent = String(Math.round(data['main']['temp'])+" "+"°C");
                wind.textContent = String(data['wind']['speed'])+" "+"km/h";
                return  document.getElementById("icon").src = "images/drizzle.png";
            }
            else if(String(data["weather"][0]["main"])==="Mist"){
                humidity.textContent = String(data['main']['humidity'])+"%";
                wetherElement.textContent = String(Math.round(data['main']['temp'])+" "+"°C");
                wind.textContent = String(data['wind']['speed'])+" "+"km/h";
                return  document.getElementById("icon").src = "images/mist.png";
            }
        }
    }
    catch(e){
    console.error(e);
    document.getElementById("main").style.display="none";
    document.getElementById("infoblock").style.display="none";
    alert("Your write missing city!");
    }
}
buttonSearch.addEventListener("click",wether);
city.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        wether()
    }
  });