import React from "react";
import jitesh from "../../assets/LandingPage Images/Screenshot_20240131-162512.jpg"
import Ankit from "../../assets/LandingPage Images/WhatsApp Image 2024-06-15 at 22.24.32.jpeg"
import Nitish from "../../assets/LandingPage Images/nitieshbhai.jpeg"
import Kanishka1 from "../../assets/LandingPage Images/kanis1.jpeg"

function TeamComp() {
  // 
  const data = [
    {
      url: Ankit,
      name: "Alis Dhameliya",
      desc: "Frontend Developer"
    },
    {
      url: jitesh,
      name: "Vasu Munjapara",
      desc: "Founder"
    },
    {
      url: Nitish,
      name: "Pritesh Gondaliya",
      desc: "Full stack Developer"
    },
    {
      url: Kanishka1,
      name: "Harsh Sorathiya",
      desc: "UI/UX Designer"
    },

  ];

  return (
    <div className="py-10 text-white">
      <h5 className="text-center font-bold my-5 mb-20 lg:text-4xl text-xl sm:text-2xl uppercase">
        Team Members
      </h5>
      <div
        id="outer-wrapper"
        className="max-w-[1300px] overflow-hidden mx-auto mb-10"
      >
        <div
          id="inner-weapper"
          className="flex gap-3 animate-[toRight_20s_linear_infinite]"
        >
          {data.map(({ url, name, desc }, index) => (
            <div className="card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative ctaBtn" key={"members" + index}>
              <div className="img w-[150px] h-[150px]">
                <img
                  src={url}
                  className="object-cover w-[150px] h-[150px] rounded-full"
                  alt=""
                />
              </div>
              <div className="name text-xl text-white font-semibold text-center pt-5">
                {name}
              </div>
              <div className="name text-md text-white font-semibold text-center pt-5">
                {desc}
              </div>
            </div>
          ))}
          {data.map(({ url, name, desc }, index) => (
            <div className="card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative ctaBtn" key={"members" + index}>
              <div className="img w-[150px] h-[150px]">
                <img
                  src={url}
                  className="object-cover w-[150px] h-[150px] rounded-full"
                  alt=""
                />
              </div>
              <div className="name text-xl text-white font-semibold text-center pt-5">
                {name}
              </div>
              <div className="name text-md text-white font-semibold text-center pt-5">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamComp;

// after:content-[""] after:w-[85%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-[#ECECEC] after:to-[#0a0b1d] after:absolute after:bottom-0  after:h-[2px] after:block
