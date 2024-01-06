import React from 'react';


export default function Post() {
  return (
      <div className="mx-auto flex flex-col items-center sm:flex-row max-w-96 sm:max-w-xl bg-[#19297C] py-4 sm:py-0">
        <h2 className="text-white text-lg text-center font-bold sm:w-1/3">Post</h2>

        <div className="mt-4 sm:mt-0 py-4 px-2 flex flex-wrap items-center justify-center sm:gap-4 mx-auto items-center bg-[#585481] border border-[#19297C] shadow-md sm:shadow-none shadow-[#A1867F] w-5/6 sm:w-4/6">
          <a href="">
            <img src="https://i.ibb.co/6YDDBDM/05-1.jpg" alt="imagen de proselim" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/WPc7J5r/021023.jpg" alt="imagen de AI" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/L9xhpbF/promoci-nflash2negrorojo.jpg" alt="imagen de Tomasa" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/qjQF3z4/publicidad.jpg" alt="imagen de Dra. Lauritz" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>


   
     
        </div>

      </div>
    
  );
}
