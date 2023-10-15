import axios from "axios";

export const fetchDataFromApi = async (url) => {
  // console.log(url)
  const options = {
    params: {
      q: url,
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '6935b51365msh7f916fc704dfd16p147081jsncf112054c189',
      // "X-RapidAPI-Key":process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  console.log(fetchDataFromApi)
  const BASE_URL = `https://youtube138.p.rapidapi.com/search/?`;
  // console.log(BASE_URL)
  const { data } = await axios.get(BASE_URL, options);
  return data;
  // const response = await axios.request(options);
  // return response;
};
