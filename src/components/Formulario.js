import React, { useState } from 'react';

import { Boton, Input } from './styles/Formulario.styled';

// firebase
import db from './../firebase/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

function Formulario() {
  const [nombre, cambiarNombre] = useState('');
  const [correo, cambiarCorreo] = useState('');

  const handleSubmit = async (e) => {

    try {

      e.preventDefault();

      await addDoc(collection(db, 'usuarios'), {
        nombre,
        correo
      });

    } catch (error) {
      console.error('Ha ocurrido un error al intentar guardar el documento\n', error)
    }

    cambiarNombre('');
    cambiarCorreo('');
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <Input
        type='text'
        name='nombre'
        value={nombre}
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder='Nombre'
      />

      <Input
        type='email'
        name='correo'
        value={correo}
        onChange={(e) => cambiarCorreo(e.target.value)}
        placeholder='Correo'
      />

      <Boton
        type='submit'
      >
        Agregar
      </Boton>
    </form>
  )
};

export default Formulario;