import React, { useState, useEffect } from 'react';

import ContenedorContactos from './styles/ListaContactos.styled';

// firebase
import db from '../firebase/firebase.config';
// snapshot es un listener de cambios en la db, en real-time
import { collection, onSnapshot } from 'firebase/firestore';

import Contacto from './Contacto';

function ListaContactos() {

  const [contactos, cambiarContactos] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, 'usuarios'),
      (snapshot) => {
        // console.log('Se ejecutò snapshot', snapshot)
        // console.log(snapshot.docs[0].data())
        const arregloUsuarios = snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id };
        });

        cambiarContactos(arregloUsuarios);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    contactos.length > 0 &&
    <ContenedorContactos>
      {
        contactos.map(contacto => (
          <Contacto
            key={contacto.id}
            contacto={contacto}
          />
        ))
      }
    </ContenedorContactos>
  )
};

export default ListaContactos;