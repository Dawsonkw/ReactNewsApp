import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CarouselPic from './CarouselPic';
import NewsApp from './NewsApp';


function ApiHandler() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setresults] = useState([]);
    // the useEffect hook is telling react that the component needs to do something after render. In this case the Api call is made, data is recieved and then applied to the structure that we have set in our other component that creates the page itself. 
    useEffect(() => {
        const api1 = 'https://gnews.io/api/v4/top-headlines?token=b10afd6f87086db5fbb2457a2c296123&topic=sports&q=mma&lang=en'; //GNews.io API
        const api2 = ' https://newsapi.org/v2/everything?q=mma&language=en&pageSize=10&apiKey=2534edfeb2794486a6bab24956592237'; // newsAPI.org sports section
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
    } else if (results.length === 0) {
        return <div>No results found</div>
    } else{ const allArticles = results[0].articles.slice(0, 3).concat(results[1].articles.slice(0, 3));      
        // the allArticles value takes in the api returns and concatenates them into one return so that they all render into one component instead of 2 separate components. It is called within the error block so that the page has a chance to render and doesn't break everything before it gets there. 
        return (
            // So this is going to go through the results of the 2 api calls based off their index ([0] & [1] respectively). It's then gonna map the results 
            <div >
                
                <div className='w-3/4 h-auto mx-auto'>
                    <CarouselPic articles={allArticles} />
                </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 gap-x-6 sm:grid-cols-1 bg-sand pt-2 '>
                        {results[0].articles.map((result, index) => (
                            <NewsApp
                                key={index}
                                title={result.title}
                                url={result.url}
                                image={result.image}
                                creator={result.source.name}
                                content={result.description}
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
                
            </div>
            
        )
    }
}

export default ApiHandler;

