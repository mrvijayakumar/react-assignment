import { useEffect, useState } from 'react';
const baseURL = 'https://restcountries.eu/rest/v2';
export function FetchCountries(endPoint: string) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
      fetch(baseURL + endPoint).then(response => response.json())
        .then(json => {
          setData(json);
        }, error => {
          setError(error);
        }).finally(() => {
        setDataLoaded(true);
      });
    }, [endPoint]);
  
    return {
      data: data,
      errorMsg: error,
      dataLoaded: dataLoaded
    };
}