import axios from "axios";

export const fetchDataFromApi = async (url) => {
  // console.log(process.env.REACT_APP_YOU_TUBE_API_KEY)
  // console.log(url)
  const options = {
    params: {
      q: url,
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'bf059c65e0msh5774b16b0638e3fp1d4c97jsn3d0679f9d11a',
      // 'X-RapidAPI-Key': 'process.env.REACT_APP_YOU_TUBE_API_KEY',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  const BASE_URL = `https://youtube138.p.rapidapi.com/search/?`;
  // console.log(BASE_URL)
  const { data } = await axios.get(BASE_URL, options);
  return data;
  // const response = await axios.request(options);
  // return response;
};
