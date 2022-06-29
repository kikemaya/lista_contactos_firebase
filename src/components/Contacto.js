import React, { useState } from 'react';

import { Boton, ContenedorContacto, Correo, Input, Nombre } from './styles/Contacto.styled';

// firebase
import db from '../firebase/firebase.config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

function Contacto({ contacto }) {

  const [editandoTarea, cambiareditandoTarea] = useState(false);
  const [nombre, cambiarNombre] = useState(contacto.nombre);
  const [correo, cambiarCorreo] = useState(contacto.correo);

  const updateContact = async (e) => {

    try {

      e.preventDefault()

      await updateDoc(
        doc(db, 'usuarios', contacto.id), {
        nombre,
        correo
      })

    } catch (error) {
      console.error('Ha ocurrido un error al intentar actualizar el documento...\n', error)
    }

    cambiareditandoTarea(false)
  };
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'usuarios', id))
    } catch (error) {
      console.error('Ha ocurrido un error al intentar eliminar el documento...\n', error)
    }
  };

  return (
    <ContenedorContacto>
      {
        (editandoTarea)
          ?
          <form action='' onSubmit={(e) => updateContact(e)}>
            <Input
              type='text'
              name='nombre'
              value={nombre}
              onChange={(e) => cambiarNombre(e.target.value)}
              placeholder='nombre'
            />
            <Input
              type='email'
              name='correo'
              value={correo}
              onChange={(e) => cambiarCorreo(e.target.value)}
              placeholder='correo'
            />
            <Boton type='submit'>
              Actualizar
            </Boton>
          </form>
          :
          <>
            <Nombre>{contacto.nombre}</Nombre>
            <Correo>{contacto.correo}</Correo>
            <Boton onClick={() => cambiareditandoTarea(!editandoTarea)}>Editar</Boton>
            <Boton onClick={() => deleteContact(contacto.id)}>
              Borrar
            </Boton>
          </>
      }
    </ContenedorContacto>
  )
};

export default Contacto;