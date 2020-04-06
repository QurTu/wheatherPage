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
        })

        

    })
}
});

