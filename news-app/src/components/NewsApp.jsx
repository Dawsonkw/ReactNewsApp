import React from 'react';

const NewsApp = (props) => {
    // The handleClick function is going to apply the onCLick feature to the card to open a separate 
    const handleClick = () => {
        window.open(props.url, '_blank', 'noopener, noreferrer')
    }

    return (
            <div className='bg-gray-200 p-6 rounded-lg my-2' onClick={handleClick}>
                <h2 className="text-3xl font-bold text-center p-4">{props.title}</h2>
                <h3></h3>
                {/* Conditionally renders the Image to the page if the image url exists */}
                {props.image && <img src={props.image} className='w-full rounded-lg mb-4 relative p-4 bg-gray-200 hover:scale-105 ' />}
                {props.urlToImage && <img src={props.urlToImage} className='w-full rounded-lg mb-4 relative p-4 bg-gray-200 hover:scale-105 '/>}
                <p className='underline text-center text-gray-800 font-medium'>Source: {props.creator}</p>
                <p className='text-center text-gray-800'>{props.content}</p>
                {/* Conditionally renders the video if it exists */}
                {props.video_url && <p>{props.video_url}</p>}
                <div className='text-center p-6'>
                    {/* <a className=' text-blue-600' href={props.url}>Link to article</a> */}
                </div>
            </div>
    );
};

export default NewsApp;