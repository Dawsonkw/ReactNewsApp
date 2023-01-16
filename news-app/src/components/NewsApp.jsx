import React from 'react';

const NewsApp = (props) => {
    return (
        <div className='bg-gray-200 p-3 my-2'>
            <h2 className="text-lg font-medium">{props.title}</h2>
            <img src={props.imageUrl} alt={props.title} />
            <p>Author: {props.creator}</p>
            <p>{props.content}</p>
            
        </div>
    );
};

export default NewsApp;