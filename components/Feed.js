import React from "react";
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import Login from "./Login";



const Feed = () => {
 
  return (

    <div className=" max-w-[690px] mt-4 mx-auto lg:max-w-[850px]">
      <section className="max-w-[470px] mx-auto w-[100vw]">
        
        <Stories />
       
        <Posts />
      </section>
      <section className="max-w-[320px] w-full mx-8 hidden lg:block"></section>
    </div>
  );
};
export default Feed;
