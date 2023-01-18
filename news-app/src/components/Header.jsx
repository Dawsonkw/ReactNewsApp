import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOtter } from '@fortawesome/free-solid-svg-icons'
import Datetime from './Datetime';
import '../App.css' 




const Header = () => {
    return (
        <div className='relative'>
            <nav className='shadow-md'>
                <div className=' flex-shrink-0 inline-flex space-x-5'>
                    <h1 className='text-7xl text-orange-500 pt-5'> <FontAwesomeIcon icon={faOtter} /></h1>
                    <div>
                        <div>
                            <h1 className='text-3xl text-center pt-5 text-modak'> The Otter </h1>
                        </div>
                        <div>
                            <h1 className='text-3xl '> MMA News App </h1>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <ul className='inline-flex space-x-3'>
                        <li>
                            <a className='text-3xl hover:text-red-600' href="#"> <AiFillInstagram /> </a>
                        </li>
                        <li>
                            <a className='text-3xl hover:text-red-600' href="#"> <AiFillGithub /> </a>
                        </li>
                        <li>
                            <Datetime />
                        </li>
                    </ul>
                </div>
                <div className='border-t'>

                </div>
                <div className='ml-auto'>
                    Search Bar functionality
                </div>
            </nav>
        </div>
    );
};

export default Header;