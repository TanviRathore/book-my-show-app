import React from "react";
import {BiChevronDown, BiChevronRight, BiMenu, BiSearch} from "react-icons/bi";

function NavSm() {
    return (
        <>
            <div className="flex items-center justify-between text-white">

                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>

                    <span className="flex text-gray-200 text-base hover:text-white items-center cursor-pointer">
                            Indore <BiChevronRight/>
                    </span>
                </div>

                <div className="w-7 h-7 text-white">
                        <BiSearch className="w-full h-full"/>
                </div>
                
            </div>
        </>
    );
}

function NavMd() {
    return (
        <>
            <div className="flex w-full items-center bg-white gap-3 px-3 py-1 rounded-md">
                <BiSearch/>
                <input type="search" className="w-full bg-transparent focus:outline-none " 
                placeholder="Search for Movies, Events, Plays, Sports and Activities " />
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

const Navbar = () => {
    return (
        <>
            <nav className="bg-darkBackground-700 px-4 py-3">

                <div className=" md:hidden ">
                    <NavSm/>
                </div>

                <div className="hidden lg:hidden md:flex ">
                    <NavMd/>
                </div>

                <div className="hidden lg:flex w-full" >
                    <NavLg/>
                </div>

            </nav>
        </>
    );
};

export default Navbar;