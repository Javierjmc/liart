import React from 'react';


export default function Contacto() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#19297C] w-56 sm:w-96 h-20"></div>
      <div className="bg-[#585481] text-center text-[#D1BCE3] border border-[#19297C] inline-block px-4 py-1 shadow-md shadow-[#A1867F] relative bottom-12 w-44 sm:w-72">
        <form action="" className="flex flex-col pb-2">
          <label htmlFor="">Correo</label>
          <input type="email" className="mb-2 bg-transparent border border-[#19297C] shadow-md shadow-[#A1867F] p-1"/>
          <label htmlFor="">Mensaje</label>
          <textarea name="" id="" cols="5" rows="3" className="mt-2 bg-transparent border border-[#19297C] shadow-md shadow-[#A1867F] p-1"></textarea> 
          <button className="mt-2 p-1 bg-[#19297C]">Enviar</button> 
        </form>
      </div>
      


    </div>
  );
}
