import React from 'react';

import { Contenedor, Titulo } from './components/styles/App.styled';

import Formulario from './components/Formulario';
import ListaContactos from './components/ListaContactos';

function App() {
  return (
    <Contenedor>
      <Titulo> Lista de contactos</Titulo>
      <Formulario />
      <ListaContactos />
    </Contenedor>
  )
};

export default App;