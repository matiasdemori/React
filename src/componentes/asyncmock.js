const productos = [
    {
        id: "1",
        nombre: "Llanowar Elves",
        idCat: "Verde",
        img: "../img/Llanowar Elves.jpg",
        stock: 10,
        precio: 2.5
    },
    {
        id: "2",
        nombre: "Lightning Bolt",
        idCat: "Rojo",
        img: "../img/Lightning Bolt.jpg",
        stock: 8,
        precio: 3.0
    },
    {
        id: "3",
        nombre: 'Counterspell',
        idCat: "Azul",
        img: "../img/Counterspell.jpg",
        stock: 15,
        precio: 4.2
    },
    {
        id: "4",
        nombre: "Terror",
        idCat: "Negro",
        img: "../img/Terror.jpg",
        stock: 5,
        precio: 2.8
    },
    {
        id: "5",
        nombre: "Mother of Runs",
        idCat: "Blanco",
        img: "../img/Mother of Runs.jpg",
        stock: 12,
        precio: 5.1
    }
];

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000);
    });
};

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat.toLowerCase() === idCategoria.toLowerCase());
            resolve(productosCategoria);
        }, 2000);
    });
};

