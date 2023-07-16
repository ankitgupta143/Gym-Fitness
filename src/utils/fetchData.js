export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a134c4486fmshaf1c22c1e5252dbp12837djsn00b1f42358e8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a134c4486fmshaf1c22c1e5252dbp12837djsn00b1f42358e8',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}