import React from 'react';
import {BsSearch} from 'react-icons/bs';

// search functionality is not currently working since the app is not currently tied to any backend, the logic needs to be updated and be tethered to a backend server. Alternatively, the logic can be tied to the api caller component, I would just need to redesign all the logic behind that component. For now I will be leaving the original functionality in tact as it is a personal project that I have no plans on deploying in a live manner. 

const Searchbar = ({searchValue, handleChange}) => {
    const search = () => {
            // Search function logic goes here. 
            console.log("Searching...")
    }

    return (
        <div className='bg-sand py-2 flex items-center px-3 '>
            <BsSearch className='text-coolgrey mr-4 text-xl' onClick={search}/>
            <input className='border-1 border-yellowochre px-4 py-2 w-full' type="text" placeholder='Search...' value={searchValue} onChange={handleChange} onKeyDown={(e) => {if(e.key === 'Enter') search()}} />
        </div>
    );
};

export default Searchbar;