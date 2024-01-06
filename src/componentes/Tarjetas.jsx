import React from 'react';


export default function Tarjetas() {
  return (
      <div className="mx-auto flex flex-col items-center sm:flex-row max-w-96 sm:max-w-xl bg-[#19297C] py-4 sm:py-0">
        <h2 className="text-white text-lg text-center font-bold sm:w-1/3">Tarjetas de presentación</h2>

        <div className="mt-4 sm:mt-0 py-4 px-2 flex flex-wrap items-center justify-center sm:gap-4 mx-auto items-center bg-[#585481] border border-[#19297C] shadow-md sm:shadow-none shadow-[#A1867F] w-5/6 sm:w-4/6">
          <a href="">
            <img src="https://i.ibb.co/0GSW4Lc/partea.jpg" alt="tarjeta de Dra. Lauritz" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/5cX5xy3/cara2.jpg" alt="tarjeta de Dra. Lauritz" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/vm2Pvfk/tarjetaposelim-CARA1.jpg" alt="tarjeta de proselim" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3]  duration-500"/>
          </a>
          <a href="">
            <img src="https://i.ibb.co/hFGRMCg/tarjetapresentaci-nangelacardozo.jpg" alt="tarjeta de tomasa" className="z-10 w-36 hover:scale-150 sm:hover:scale-[2] md:hover:scale-[3] duration-500"/>
          </a>
      
        </div>

      </div>
    
  );
}
