import React from 'react';


export default function Flyer() {
  return (
      <div className="mx-auto flex flex-col items-center sm:flex-row max-w-96 sm:max-w-xl bg-[#19297C] py-4 sm:py-0">
        <h2 className="text-white text-lg text-center font-bold sm:w-1/3">Flyer</h2>

        <div className="mt-4 sm:mt-0 py-4 px-2 flex flex-wrap items-center justify-center sm:gap-4 mx-auto items-center bg-[#585481] border border-[#19297C] shadow-md sm:shadow-none shadow-[#A1867F] w-5/6 sm:w-4/6">
          <a href="">
            <img src="https://i.ibb.co/nDdH7FN/021223.jpg" alt="flyer KatDoc" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/nbd9h1F/241023.jpg" alt="flyer KatDoc2" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/Fs0jQX3/cursoweb.jpg" alt="flyer de Kavav" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/42Mh3pS/publicacioningles.png" alt="flyer de profe Javier" className="z-10 w-32 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>


   
     
        </div>

      </div>
    
  );
}