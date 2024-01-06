import React from 'react';


export default function Habilidades() {
  return (
      <div className="mx-auto flex flex-col items-center sm:flex-row max-w-96 sm:max-w-xl bg-[#19297C] py-4 sm:py-0">
        <h2 className="text-white text-lg text-center font-bold sm:w-1/3">Habilidades técnicas</h2>

        <div className="mt-4 sm:mt-0 py-4 px-2 flex flex-col mx-auto items-center bg-[#585481] border border-[#19297C] shadow-md sm:shadow-none shadow-[#A1867F] w-5/6 sm:w-4/6">
          <ul className="flex gap-2 flex-wrap">
            <li className="w-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png" alt="logo de photoshop"/>
            </li>

            <li className="w-10">
              <img src="https://i0.wp.com/bytes.com.ng/wp-content/uploads/2022/05/coreldraw-logo.png?fit=1270%2C1432&ssl=1" alt="logo de corelDraw"/>
            </li>

            <li className="w-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png" alt="logo de canva"/>
            </li>
            <li className="w-10">
              <img src="https://freelogopng.com/images/all_img/1664284918capcut-icon-png.png" alt="logo de capcut"/>
            </li>
            
          </ul>

          

          <ul className="flex gap-2 flex-wrap border-t-2 border-[#19297C] pt-4 mt-4">
            <li className="w-10">
              <img src="https://raw.githubusercontent.com/gist/tracend/3798496/raw/640a549782e952bdbe31fbb41f819fa96240de42/HTML5_SF.svg" alt="logo de html"/>
            </li>
            <li className="w-10">
              <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="logo de css"/>
            </li>
            <li className="w-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="logo de javascript"/>
            </li>

            <li className="w-10 flex items-center">
              <img src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Tailwind-CSS1-900x0.png" alt="logo de Tailwin"/>
            </li>
           

          </ul>



        </div>

      </div>
    
  );
}
