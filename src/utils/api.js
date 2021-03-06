import axios from 'axios';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://web-718-digital.herokuapp.com';
// const baseURL = 'https://web-718-digital.herokuapp.com';

let api = {
  getContent: function(){
		let url = baseURL + "/getinterface"
		return axios.get(url)
	},
  contactForm: function(data) {
    let url = baseURL + "/contact"
    return axios.post(url, data)
  }
}

export default api;
