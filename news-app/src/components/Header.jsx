import React, {useState} from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Datetime from './Datetime';
import '../assets/googlefonts.css'
import Searchbar from './Searchbar';
import '../App.css'
import icon from '../assets/theOtter.png'



const Header = (search) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    // <FontAwesomeIcon icon={faOtter}

    return (
        <div className='relative bg-cream'>
            <nav className='shadow-lg'>
                <div className=' flex-shrink-0 inline-flex'>
                     <img src={icon} alt="icon" className='' /> 
                    <div className=''>
                        <div>
                            <h1 className='text-6xl text-left pt-12 overflow-hidden  font-modak text-cadmiumorange'> The Otter </h1>
                        </div>
                        <div>
                            <h1 className='text-left text-5xl font-blackops text-otterTeal'> MMA News App </h1>
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