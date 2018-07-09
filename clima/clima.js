const axios = require('axios');

const getClima= async(lat, lng)=>{

	let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=18e2c39c27e9ec1e0cab78a6a77ccc9c`)

	return resp.data.main.temp;

}

module.exports = {
	getClima
}