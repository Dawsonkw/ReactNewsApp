import React from 'react';

const NewsApp = (props) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='bg-gray-200 p-6 rounded-lg my-2 w-full max-w-xl'>
                <h2 className="text-lg font-medium text-center">{props.title}</h2>
                <h3>{props.pubDate}</h3>
                {/* Conditionally renders the Image to the page if the image url exists */}
                {props.image_url && <img src={props.image_url} className='w-full rounded-lg mb-4' />}
                <p className='underline text-center text-gray-800 font-medium'>Author: {props.creator}</p>
                <p className='text-center text-gray-800'>{props.content}</p>
                {/* Conditionally renders the video if it exists */}
                {props.video_url && <p>{props.video_url}</p>}
            
            </div>
        </div>
    );
};

export default NewsApp;