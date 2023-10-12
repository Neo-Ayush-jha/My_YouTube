import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import yTLogoMobile from "../image/yt-logo-mobile.png";
import yTLogo from "../image/yt-logo.png";
import { SlMenu } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
// import { CgClone } from "react-icons/cg";
import { CgArrowRight } from 'react-icons/cg';

import { Context } from '../context/contextApi';
import Loader from "../shared/loader.jsx";

function Header() {

    const [ searchQuery, setSearchQuery ] = useState("");
    const { loading, mobileMenu, setMobileMenu } = useContext(Context)
    const navigate = useNavigate();
    const searchQueryHandler = (event) => {
        if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
            navigate(`/searchResult?q=${searchQuery}`);
            // navigate(`/searchResult/${searchQuery}`);
        }
    }

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    }

    const { pathname } = useLocation();

    const pageName = pathname?.split("/")?.filter(Boolean)?.[0]
    return (
        <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black' >
            {loading && <Loader />}
            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div className="flex md:first-line:(hidden md-mr-6 cursor-pointer items-center justify-center h-10 w-10 rpunded-full hover:bg-[#303030]/[0.6]" onClick={mobileMenuToggle}>
                        {mobileMenu ? (
                            <CgArrowRight className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className='flex h-5 items-center'>
                    <img className='h-full hidden dark:md:block' src={yTLogo} alt='YouTube' />
                    <img className='h-full md:hidden ' src={yTLogoMobile} alt='YouTube' />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoMdSearch className="text-white text-xl" />
                    </div>
                    <input type="text" className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] ' onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} />

                </div>
                <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
                    <IoMdSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center ml-2 justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
 
                    <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                        <img src="https://api.multiavatar.com/kathrin.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header