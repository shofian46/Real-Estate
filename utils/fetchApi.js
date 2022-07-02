import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'a1b595dc23msh68d9819fbc1dc28p1c9564jsn3c22c29a2dad',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  
  return data;
}