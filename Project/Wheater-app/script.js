const getWeather = document.getElementById('cityName');
const apiKey = '0007d40fba29bff14f8be926344e4414';
const container =document.querySelector('.container');
const weatherByDay = [[], [], [], [], []]


const localisation = (cityName) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=0007d40fba29bff14f8be926344e4414`)
    .then(response => response.json())
    .then ((data)=> {
        console.log(data[0].lat, data[0].lon)
            fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=0007d40fba29bff14f8be926344e4414`)
            .then(response => response.json())
            .then ((data)=> {
                console.log(data.list)
                let i =0
                let c=0
                data.list.forEach((wheaterEntry) => {
                    if(i<8){
                        weatherByDay[c].push(wheaterEntry)
                    } else {
                        c++
                        weatherByDay[c].push(wheaterEntry)
                        i=0
                    }
                    i++

                })
                weatherByDay.forEach((day)=> {
                    let d = document.querySelectorAll('.day');
                    let title = document.querySelectorAll('h1')
                    title.innerHTML= day[0].dt_txt 
                    day.forEach((temp)=> {
                        let desc = document.querySelectorAll('p');
                        desc.innerText= Math.round(temp.main.temp - 273,15)
                    day.forEach((temps)=>{
                        let meteo = document.querySelectorAll('h4');
                        meteo.innerHTML= temps.weather.main
                    
                    })
                    })
                })
            })
    })       
}



getWeather.addEventListener('submit' , (event) =>{
    event.preventDefault()
    let formData = Object.fromEntries (new FormData(getWeather));
    console.log(formData)
    localisation(formData.city)
})














































        // let test = document.createElement('li').innerText ='Hello';
        // body.appendChild(test)
        // }

    // ul.appendChild(test)




    // const city = document.querySelector('input').value;
    // const list = document.querySelector('ul');


// button.addEventListener ('click', () => {

// }

// )

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '73753b8fc6msh60257a98da68f59p1e28a5jsnd1bcac5b9e15',
// 		'X-RapidAPI-Host': 'national-weather-service.p.rapidapi.com'
// 	}
// };

// fetch('https://national-weather-service.p.rapidapi.com/zones/brussels/%7BzoneId%7D/forecast', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

