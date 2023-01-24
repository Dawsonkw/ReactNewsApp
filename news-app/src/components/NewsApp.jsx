import React from 'react';

const NewsApp = (props) => {
    // The handleClick function is going to apply the onCLick feature to the card to open a separate 
    const handleClick = () => {
        window.open(props.url, '_blank', 'noopener, noreferrer') //Opens the news card article into a new tab instead of redirecting current page. 
    }

    return (
        <div className='bg-cream p-6 rounded-lg my-2 mx-2' onClick={handleClick}>
            {/* Conditionally renders the Image to the page if the image url exists */}
            {props.image && <img src={props.image} className='w-full rounded-lg mb-4 relative p-4 bg-cream hover:scale-95 duration-400' />}
            {props.urlToImage && <img src={props.urlToImage} className='w-full rounded-lg mb-4 relative p-4 bg-cream hover:scale-95 duration-400 '/>}
            <h2 className="text-2xl font-bold text-left p-4">{props.title}</h2>
            <p className=' text-black text-left '>{props.content}</p>  
        </div> 
    );
};

export default NewsApp;