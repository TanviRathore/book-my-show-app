import React from "react";
import { BiChevronDown, BiChevronLeft, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";

function NavSm() {
    return (
        <>
            <div className="flex justify-between items-center text-gray-700">
                <div className="flex flex-row items-center">
                    <div className="w-6 h-6">
                        <BiChevronLeft className="w-full h-full" />
                    </div>
                    <h3>Fast and Furious 9</h3>
                </div>
                <div className="w-6 h-6">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
            
        </>
    );
}

function NavLg() {
    return (
        <>
            <div className="container flex mx-auto justify-between px-3 py-1 gap-2">

                <div className="flex items-center w-1/2 gap-3" >
                    <div className="w-10 h-10">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo" className="w-full h-full"/>
                    </div>

                    <div className="flex w-full items-center bg-white gap-3 px-3 py-1 rounded-md">
                        <BiSearch/>
                        <input type="search" className="w-full bg-transparent focus:outline-none " 
                        placeholder="Search for Movies, Events, Plays, Sports and Activities " />
                    </div>
                </div>

                <div className="flex items-center gap-3">

                    <span className="flex text-gray-200 text-base hover:text-white items-center cursor-pointer">
                        Indore <BiChevronDown/>
                    </span>

                    <button className="bg-red-600 text-sm text-white rounded px-2 py-1">
                        Sign in
                    </button>

                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full"/>
                    </div>

                </div>

            </div>

        </>
    );
}

const MovieNav = () => {
    return (
        <>
            <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4 ">
                <div className="md:hidden">
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    <NavSm />
                </div>
                <div className="hidden w-full lg:flex">
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default MovieNav;