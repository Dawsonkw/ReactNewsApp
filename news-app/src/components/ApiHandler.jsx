import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NewsApp from './NewsApp';


function ApiHandler() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setresults] = useState([]);

    useEffect(() => {
        fetch("https://newsdata.io/api/1/news?apikey=pub_15728f28eec06467849664140706cae18be53&country=us,ca&language=en")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setresults(result);
                console.log(result);
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
            <div>
                {results.results.map((result, index) => (
                    <NewsApp
                        key={index}
                        title={result.title}
                        imageURL={result.imageUrl}
                        creator={result.creator}
                        content={result.content}
                    />
                ))}
            </div>
        )
    }
}

export default ApiHandler;

// https://newsdata.io/api/1/news?apikey=pub_15728f28eec06467849664140706cae18be53
//  API key and get request. 
// Use enpoints on https://newsdata.io/docs# to customize your data

// pseudo Steps:
// 1. make request using async / await and Fetch. This returns a promise
// 
// 2. Resolve promise (returns as JSON data) using the response object
// 
// 3. Handle Errors
// 
// 4. Utilize the returned promise data to make your site. 
// 
