const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: "$150.000",
        categoria: "computadora",
        imagen: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg",
    },
    {
        id: 2,
        nombre: "MacBook",
        precio: "$200.000",
        categoria: "computadora",
        imagen: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
    },
    {
        id: 3,
        nombre: "pc portatil",
        precio: "$175.000",
        categoria: "computadora",
        imagen: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg",
    },
    {
        id: 4,
        nombre: "laptop 1T",
        precio: "$250.000",
        categoria: "computadora",
        imagen: "https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg",
    },
    {
        id:5,
        nombre: "Teclado",
        precio:"$20.000",
        categoria: "teclado",
        imagen:"https://cdn.pixabay.com/photo/2015/02/03/02/14/keyboard-621830_960_720.jpg",
    },
    {
        id:6,
        nombre: "Teclado blanco",
        precio:"$22.000",
        categoria: "teclado",
        imagen:"https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_960_720.jpg",
    },
    {
        id:7,
        nombre: "Teclado con luz",
        precio:"$22.000",
        categoria: "teclado",
        imagen:"https://cdn.pixabay.com/photo/2016/11/29/11/39/computer-1869236_960_720.jpg",
    },
    {
        id:8,
        nombre: "Teclado convencional",
        precio:"$25.000",
        categoria: "teclado",
        imagen:"https://cdn.pixabay.com/photo/2021/03/18/19/56/keyboard-6105750_960_720.jpg",
    },
    {
        id:9,
        nombre:"auriculares rosas",
        precio:"$10.000",
        categoria: "auriculares",
        imagen:"https://cdn.pixabay.com/photo/2017/01/11/10/25/headsets-1971383_960_720.jpg"
    },
    {
        id:10,
        nombre:"auriculares negros",
        precio:"$50.000",
        categoria: "auriculares",
        imagen:"https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_960_720.jpg"
    },
    {
        id:11,
        nombre:"auriculares XL",
        precio:"$50.000",
        categoria: "auriculares",
        imagen:"https://cdn.pixabay.com/photo/2014/07/31/23/38/headphones-407190_960_720.jpg"
    },
    {
        id:12,
        nombre:"auriculares oscuros",
        precio:"$11.000",
        categoria: "auriculares",
        imagen:"https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_960_720.jpg"
    },
    {
        id:13,
        nombre:"mouse aplle",
        precio:"$15.000",
        categoria: "mouse",
        imagen:"https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg"
    },
    {
        id:14,
        nombre:"mouse rojo",
        precio:"$12.000",
        categoria: "mouse",
        imagen:"https://cdn.pixabay.com/photo/2019/12/08/18/23/computer-mouse-4681824_960_720.jpg"
    },
    {
        id:15,
        nombre:"mouse Hp",
        precio:"$10.500",
        categoria: "mouse",
        imagen:"https://cdn.pixabay.com/photo/2014/02/08/12/49/office-261748_960_720.jpg"
    },
    {
        id:16,
        nombre:"mouse pequeño",
        precio:"$9.500",
        categoria: "mouse",
        imagen:"https://cdn.pixabay.com/photo/2013/05/24/02/10/computer-mouse-113101_960_720.jpg"
    }
]

export default productos;

const producto =
{
    id: 1,
    nombre: "MacBook",
    precio: "$150.000",
    stock:  1,
    descripcion: "macbook con 1T de memoria en perfecto estado",
    imagen: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg",
}

export const traerProducto = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(producto)
        }, 1000)
    })
}