import React from 'react';
import Titulo from './componentes/Titulo';
import LineaCentral from './componentes/LineaCentral';
import SobreMi from './componentes/SobreMi';
import Habilidades from './componentes/Habilidades';
import Experiencia from './componentes/Experiencia';
import Menu from './componentes/Menu';
import Post from './componentes/Post';
import Tarjetas from './componentes/Tarjetas';
import Contacto from './componentes/Contacto';
import Flyer from './componentes/Flyer';
import IdentidadVisual from './componentes/IdentidadVisual';

export default function App() {
  return (
    <div className="bg-[#D1BCE3] px-2">
      <Menu/>
      <Titulo/>
      <LineaCentral/> 
      <div>
        
        <SobreMi/> 
        <LineaCentral/>
        <Habilidades/>
        <LineaCentral/>
        <Experiencia/>
        <LineaCentral/>
        <Post/>
        <LineaCentral/>
        <Flyer/>
        <LineaCentral/>
        <IdentidadVisual/>
        <LineaCentral/>
        <Tarjetas/>
        <LineaCentral/>
        <Contacto/>

      </div>


    </div>
  );
}
