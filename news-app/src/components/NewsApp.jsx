import React from 'react';

const NewsApp = (props) => {
    // The handleClick function is going to apply the onCLick feature to the card to open a separate 
    const handleClick = () => {
        window.open(props.url, '_blank', 'noopener, noreferrer')
    }

    return (
            <div className='bg-cream p-6 rounded-lg my-2 mx-2' onClick={handleClick}>
                
                {/* Conditionally renders the Image to the page if the image url exists */}
                {props.image && <img src={props.image} className='w-full rounded-lg mb-4 relative p-4 bg-cream hover:scale-105 ' />}
                {props.urlToImage && <img src={props.urlToImage} className='w-full rounded-lg mb-4 relative p-4 bg-gray-200 hover:scale-105 duration-400 '/>}
                <h2 className="text-2xl font-bold text-left p-4">{props.title}</h2>
                <p className='underline text-left pb-2 text-gray-800 font-medium '>Source: {props.creator}</p>
                <p className=' text-gray-800 text-left '>{props.content}</p>
            </div>
    );
};

export default NewsApp;