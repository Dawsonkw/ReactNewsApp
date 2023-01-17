import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NewsApp from './NewsApp';


function ApiHandler() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setresults] = useState([]);

    useEffect(() => {
        const api1 = 'https://gnews.io/api/v4/top-headlines?token=b10afd6f87086db5fbb2457a2c296123&topic=sports&q=mma&lang=en'; //GNews.io API
        const api2 = ' https://newsapi.org/v2/everything?q=mma&language=en&apiKey=2534edfeb2794486a6bab24956592237'; // newsAPI.org sports section
        const headers = {'Set-Cookie': 'cookie-name=cookie-value; SameSite=Strict;'} 
        const promises = [fetch(api1), fetch(api2)];
        Promise.all(promises)
        .then(responses => {
            return Promise.all(responses.map(res => res.json()))
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setresults(result);
                console.log(result); //You can remove this after you get all the needed info from the API call situated. 
            },
            // Error Handling
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else{
        return (
            // So this is going to go through the results of the 2 api calls based off their index ([0] & [1] respectively). It's then gonna map the results 
            <div className='grid grid-cols-3 gap-4'>
                {results[0].articles && results[0].articles.map((result, index) => (
                    <NewsApp
                        key={index}
                        title={result.title}
                        url={result.url}
                        image={result.image}
                        creator={result.source.name}
                        content={result.description}
                        video={result.video_url}
                    />
                ))}
                {results[1].articles.map((result, index) => (
                    <NewsApp 
                        key={index}
                        title={result.title}
                        creator={result.author}
                        content={result.description}
                        urlToImage={result.urlToImage}
                        url={result.url}
                    />
                ))}
            </div>
        )
    }
}

export default ApiHandler;

