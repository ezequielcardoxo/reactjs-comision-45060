
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebaseConfig";

const Form = () => {

    const [name, setName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [correo, setCorreo] = useState ('');
    const [confirmarCorreo, setConfirmarCorreo] = useState ('');
    const [celular, setCelular] = useState ('');
    const [ordenId, setOrdenId] = useState ('');

    const {cart, totalPrecio, deleteAll} = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault();
       const objOrden = {
        buyer: {
          name,
          lastName,
          correo,
          confirmarCorreo,
          celular,
        },
        items: cart,
        total: totalCarrito,
        date: serverTimestamp(),
       };
       const orderCollection = collection(db, 'orders');
       addDoc(orderCollection, objOrden)
       .then((res)=>{
        setOrdenId(res.id);
        deleteAll();

       })
       .catch((error)=>{
        console.log('Hubo un error', error);
       })
    };

    const handleName = (e) => setName (e.target.value);
    

    const handleLastName = (e) => setLastName (e.target.value);

    const handleCorreo = (e) => setCorreo (e.target.value);

    const handleConfirmarCorreo = (e) => setConfirmarCorreo (e.target.value);
    
    const handleCelular = (e) => setCelular (e.target.value);


    if (ordenId) {
        return (
          <div className='container text-center p-5'>
          <h4>Gracias {name} por elegirnos! El número de seguimiento es: <strong>{ordenId}</strong></h4>
          </div>
      );
      
    }

  return (
    <div>
        <form className="formulario" action="" onSubmit={enviarDatos}>
          <h3>Complete con sus datos para terminar la compra:</h3>
            <input className="casilleros" type="text" placeholder='Nombre' name='nombre' onChange={handleName} value={name} />
            <input className="casilleros" type="text" placeholder='Apellido' name='apellido' onChange={handleLastName} value={lastName}/>
            <input className="casilleros" type="email" placeholder="Correo" name="correo" onChange={handleCorreo} value={correo}/>
            <input className="casilleros" type= "email" placeholder="Confirmar correo" name="confirmarCorreo" onChange={handleConfirmarCorreo} value={confirmarCorreo}/>
            <input className="casilleros" type="number" placeholder="Celular" name="celular" onChange={handleCelular} value={celular} />
            <button disabled={(name==='')||(!isNaN(name))||(lastName==='')||(!isNaN(lastName))||(celular==='')||(correo==='')||(confirmarCorreo==='')||(correo!==confirmarCorreo)}>Enviar</button>
        </form>
    </div>
  )
}

//<button className='botonFormulario btn btn-dark' disabled={(email==="")||(emailPorConfirmar==="")||(email !== emailPorConfirmar)}>Confirmar Compra</button> 


export default Form;