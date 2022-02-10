import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) =>{
    const {data} =await axios.get((url), {
       headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'f887572407msh56410153107a328p1124eajsn9d7f3710bb25'
  } ,
    });
    return data;

}

