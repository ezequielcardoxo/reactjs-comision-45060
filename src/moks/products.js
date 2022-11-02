export const products =  [
{
    id: 1,
    title: 'David Hosp - El Inocente',
    price: 500,
    stock: 1,
    category: 'nuevo',
    img: 'https://res.cloudinary.com/dshjvseys/image/upload/v1667414592/ReactJS/DH_orizd4.jpg',
},
{
    id: 2,
    title: 'Stephen King - Insomnia',
    price: 750,
    stock: 1,
    category: 'segundamano',
    img: 'https://res.cloudinary.com/dshjvseys/image/upload/v1667414590/ReactJS/SK1_squ8d5.jpg',
},
{
    id: 3,
    title: 'Stephen King - La chica que amaba a Tom Gordon',
    price: 800,
    stock: 1,
    category: 'segundamano',
    img: 'https://res.cloudinary.com/dshjvseys/image/upload/v1667414590/ReactJS/SK2_s2zboe.jpg',
}

];

export const getProducts = (categoryName) => {
    return new Promise ((res, rej) => {
      const prodFiltrados = products.filter((prod)=>prod.category === categoryName)
      const ref = categoryName ? prodFiltrados : products;
      setTimeout (() => {
        res(ref);
    },500);
    });
};



export const getProduct = (idProd) => {
    return new Promise ((res, rej)=> {
      const product = products.find((prod)=>prod.id === +idProd);
      setTimeout(()=>{
        res(product);
      }, 1000);              
    });
};