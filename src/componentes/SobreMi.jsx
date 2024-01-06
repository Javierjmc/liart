import React from 'react';


export default function SobreMi() {
  return (
      <div className="mx-auto flex flex-col sm:flex-row max-w-96 sm:max-w-xl bg-[#19297C] py-4 sm:py-0">
        <div className="flex flex-col items-center gap-4 sm:w-1/3">
          <img src="https://media.licdn.com/dms/image/C4D03AQHqbxFsD9hxkg/profile-displayphoto-shrink_800_800/0/1642122325159?e=2147483647&v=beta&t=M4eKsIV2zWp-TBAz_S-_ZJEIXYDuXHtwg4N1X11oAFM" alt="Lisette Pulvett" className="w-2/3 sm:w-full shadow-md sm:shadow-none shadow-[#A1867F]"/>

          <div className="flex justify-center gap-2 p-2">
            <a href="#" className="hover:invert">
              <img src="https://cdn.icon-icons.com/icons2/2972/PNG/512/linkedin_logo_icon_186884.png" alt="Linkendin" className="w-10"/>
            </a>
            <a href="#"className="hover:invert" >
              <img src="https://cdn.icon-icons.com/icons2/1808/PNG/512/social-github_115163.png" alt="Github" className="w-10"/>
            </a>
            <a href="#" className="hover:invert">
              <img src="https://cdn-icons-png.flaticon.com/512/8477/8477197.png" alt="Curriculum" className="w-10"/>
            </a>
            <a href="#" className="hover:invert">
              <img src="https://static.vecteezy.com/system/resources/previews/016/716/452/non_2x/youtube-icon-free-png.png" alt="Youtube" className="w-10"/>
            </a>
          </div>
        </div>

        <div className="mt-4 sm:mt-0 py-4 flex flex-col mx-auto items-center bg-[#585481] border border-[#19297C] shadow-md sm:shadow-none shadow-[#A1867F] w-5/6 sm:w-4/6">
          <h2 className="font-bold text-xl text-[#D1BCE3]">Sobre mi</h2>
          <p className="text-[#D1BCE3]">
            Hola soy goku...
          </p>

        </div>
      </div>
    
  );
}
