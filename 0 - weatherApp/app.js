window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description")

    let

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const proxy="https://cors-anywhere.herokuapp.com/corsdemo";
            const api='${proxy}api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=661afd1912d93441b6cacd733020cf83';
            fetch(api)
        .then(data=>{
            return data.json();
        })
        .then(data=>{
            console.log(data);
            const {temperature,summary}=data.currently;
        });
        });
        
    }else{
        h1.textContent="Not Working"
    }
});