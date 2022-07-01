export const exercisesOptions = {
    method: 'GET',
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const FetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
 
    return data;
  };
/**const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}; */