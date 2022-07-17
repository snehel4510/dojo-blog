// custom hook name needs to start with 'use' keyword

import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

      // const abortCont = new AbortController();

        setTimeout(()=>{
          // fetch(url, { signal: abortCont.signal })
          fetch(url)
          .then(res => {
            if(!res.ok){
              throw new Error(res.statusText);
            }
            return res.json();
          })
          .then(data=>{
            // console.log(data);
            setData(data);
            setPending(false);
            setError(null);
          })
          .catch(err => {
            // console.log(err.message);
            // if(err.name === 'AbortError'){
            //   console.log("fetch aborted");
            // } else{
            setPending(false);
            setError(err.message)
          // }
          });
        },500);

        // return () => {
        //   abortCont.abort();
        // }

      },[url])
      
      return {data, pending, error};
}

export default useFetch;
