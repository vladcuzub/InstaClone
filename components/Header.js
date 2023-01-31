import React, { useState } from "react";
import Image from "next/image";
import instagram from "../assets/instagram.png";
import arrowdown from "../assets/arrowdown.png";
import search from "../assets/search.png";
import home from "../assets/home.png";
import message from "../assets/message.png";
import upload from "../assets/upload.png";
import explore from "../assets/explore.png";
import hearth from "../assets/hearth.png";
import profile from "../assets/profile.jpg";
import Login from "./Login";


const Header = () => {
  const [signin, setSignin] = useState(false)

const signinHandler = () => {
  setSignin((signin) => !signin);
  console.log('hello')
  if(signin) {
    return <Login />
  }
}


  return (
    <div>
      <div className="border-b shadow-sm bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
          {/*Left Side */}
          <div className="flex">
            <div className="w-28 h-full flex">
              <Image src={instagram} alt="logo" />
            </div>
            <div className="w-3 h-3">
              <Image src={arrowdown} alt="lowergo" />
            </div>
          </div>
          {/*Middle Side*/}
          <div className="hidden w-72 sm:flex relative ">
            <div className="absolute flex items-center w-3 h-full ml-2">
              <Image src={search} alt="cv" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="h-9 w-full 
          rounded-md bg-[#efefef] 
          pl-8 outline-0"
            />
          </div>
          {/*Right Side */}
          <div className="flex space-x-5">
            <div className="Btn hidden sm:flex">
              <Image src={home} alt="logo" />
            </div>
            <div className="Btn hidden sm:flex relative">
              <Image src={message} alt="logo" />
              <div className="absolute flex -top-1 left-3.5 items-center justify-center bg-red-500 text-white rounded-full w-4 h-4 text-xs">
                1
              </div>
            </div>
            <div className="Btn ">
              <Image src={upload} alt="logo" />
            </div>
            <div className="Btn hidden sm:flex">
              <Image src={explore} alt="lowergo" />
            </div>
            <div className="Btn hidden sm:flex">
              <Image src={hearth} alt="lowewergo" />
            </div>
            <div className="flex">
              <div className="Btn mr-5 rounded-full">
                <Image src={profile} className="rounded-full" alt="lowergo" />
              </div>
              <button className="text-[#4fb2ce]" onClick={signinHandler} >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Header;
