import React, {useState} from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOtter } from '@fortawesome/free-solid-svg-icons'
import Datetime from './Datetime';
import '../assets/googlefonts.css'
import Searchbar from './Searchbar';
import '../App.css'




const Header = (search) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }


    return (
        <div className='relative bg-cream'>
            <nav className='shadow-lg'>
                <div className=' flex-shrink-0 inline-flex space-x-5'>
                    <h1 className='text-8xl text-cadmiumorange pt-5'> <FontAwesomeIcon icon={faOtter} /></h1>
                    <div>
                        <div>
                            <h1 className='text-5xl text-center pt-7  font-modak text-cadmiumorange'> The Otter </h1>
                        </div>
                        <div>
                            <h1 className='text-4xl font-blackops text-gray-500'> MMA News App </h1>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <ul className='inline-flex space-x-3'>
                        <li>
                            <a className='text-3xl hover:text-sand' target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/dawson_does_jiujitsu/"> <AiFillInstagram /> </a>
                        </li>
                        <li>
                            <a className='text-3xl hover:text-sand' target="_blank" rel='noopener noreferrer' href="https://github.com/Dawsonkw"> <AiFillGithub /> </a>
                        </li>
                        <li>
                            <Datetime />
                        </li>
                    </ul>
                </div>
                <div className='border-t border-t-yellowochre'>

                </div>
                <div className='flex justify-end'>
                    <Searchbar searchValue={searchValue} handleChange={handleChange} search={search}/>
                </div>
            </nav>
        </div>
    );
};

export default Header;