import { createContext, useState } from "react";


export const CartContext = createContext();



const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        if (inCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };

    const inCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };




    const sumarCantidad = (itemExtra, cantidad) => {

        const cartActualizado = cart.map((prodCart) => {
            if (itemExtra.id === prodCart.id) {
                const productActualizado = {
                    ...prodCart,
                    cantidad: prodCart.cantidad + cantidad,

                };
                return productActualizado;
            } else {
                return prodCart;
            }
        })

        setCart(cartActualizado);
    }

    const deleteOne = (id) =>{
        const prodFiltrados = cart.filter ((prod)=> prod.id !== id);
        setCart(prodFiltrados);
    }

    const deleteAll = () => {
        setCart([]);
    };

    const totalUnidades = () => {
        let count = 0
        const copia = [...cart]
        copia.forEach ((prod)=>{
            count = count += prod.cantidad
        });
        return count;
    }

    const totalPrecio = () => {
        let total = 0
        const copia = [...cart]
        copia.forEach((prod) =>{
            total = total += prod.cantidad * prod.price
        })
        return total
    };


    //Se aplica un optional chaining a product, si existe cantidad, te muestra sino tira error. 
    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id)
        return product?.cantidad
    };

    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteOne, totalUnidades, totalPrecio, cantidadDeProducto}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;