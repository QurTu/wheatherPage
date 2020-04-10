window.addEventListener('load', () => {
let lon;
let lat;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        
        console.log(position)
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const key = "f5bfb48c799acb18734e01392cc425d7"
        const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        
        fetch(API) 
        .then(Response => {
            return Response.json();
        })
        .then(data => {
                console.log(data);
                let n = 0 ;
               document.querySelector(".time-zone").innerHTML = data.name;
               document.querySelector(".temp-deg"). innerHTML = toCels(data.main.temp) + "C";
               document.querySelector(".feels-temp").innerHTML = "jauciama temp: " + toCels(data.main.feels_like) + " C";
               document.querySelector(".temp-deg").addEventListener("click", function(){
                
                if( n === 0) {
                    document.querySelector(".temp-deg"). innerHTML = toCels(data.main.temp) + "C";
               document.querySelector(".feels-temp").innerHTML = "jauciama temp: " + toCels(data.main.feels_like) + " C";
              n++;
              console.log(n);
              return n;
              
            }
            if (n === 1) { document.querySelector(".temp-deg"). innerHTML = toFarh(data.main.temp) + "F";
                   document.querySelector(".feels-temp").innerHTML = "jauciama temp: " + toFarh(data.main.feels_like) + " F";
                    n--;
                   console.log(n);
                   return n;
                   printIcon(data.weather[0].icon, data.weather[0].main,data.weather[0].description);
        }

            })
             
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            function printIcon(icon, type , disc) {
                HTML = `<img src="./img/weather/${icon}@2x.png" alt=" icon">`
                console.log(type, disc);
               return document.querySelector('.icon').innerHTML = HTML;
            }
        })

        

    })
}
});






function toCels(kelvins) {
    return kelvins - 273,15;
}
function toFarh(kelvins) {
    return kelvins * 9 / 5 -459,67;
}


