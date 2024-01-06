import React from 'react';


export default function Menu() {
  return (
    <div className="flex flex-col items-center text-sm text-white font-semibold hidden sm:block sm:fixed sm:right-2 sm:z-20">
      <div className="flex justify-center">
        <div className="border-r-4 border-amber-800 w-1/2 h-3"></div>
        <div className="border-l-4 border-amber-800 w-1/2 h-3"></div>
      </div>
      <a href="">
        <div className="px-2 bg-gradient-to-r from-amber-600 to-amber-800 origin-bottom skew-y-12 hover:border">
          Sobre mi
        </div>
      </a>

      <div className="flex justify-center">
        <div className="border-r-4 border-amber-800 w-1/2 h-3"></div>
        <div className="border-l-4 border-amber-800 w-1/2 h-3"></div>
      </div>

      <a href="">
        <div className="px-2 bg-gradient-to-r from-amber-600 to-amber-800 origin-bottom skew-x-[-20deg] hover:border">
          Experiencia
        </div>
      </a>

      <div className="flex justify-center">
        <div className="border-r-4 border-amber-800 w-1/2 h-3"></div>
        <div className="border-l-4 border-amber-800 w-1/2 h-3"></div>
      </div>

      <a href="">
        <div className="px-2 bg-gradient-to-r from-amber-600 to-amber-800 origin-bottom -skew-y-[7deg] hover:border">
          Contacto
        </div>
      </a>

      <div className="flex justify-center">
        <div className="border-r-4 border-amber-800 w-1/2 h-3"></div>
        <div className="border-l-4 border-amber-800 w-1/2 h-3"></div>
      </div>



    </div>
    
  );
}
