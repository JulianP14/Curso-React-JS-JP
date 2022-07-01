const productos = [
    /* {
        id: '1', 
        name: 'Billetera Cuero - Hammer', 
        price: 2500, 
        category: 'billeteras', 
        img:"https://cdn.shopify.com/s/files/1/0055/3189/3832/products/bifold-leather-wallet-for-men-made-in-usa-men-s-bifold-wallets-american-made-main-street-forge-wallet-tobacco-snakebite-brown-30147278340255_2000x.jpg?v=1629299145" , 
        stock: 20, 
        description: 'Billetera Hammer.'
    },
    {
        id: '2', 
        name: 'Billetera Cuero - Tommy Hilfiger', 
        price: 3500, 
        category: 'billeteras', 
        img: 'https://5.imimg.com/data5/HM/XG/MY-3701638/mens-wallet-500x500.jpg', 
        stock: 15, 
        description: 'Billetera Tommy Hilfiger'
    },
    {
        id: '3', 
        name: 'Billetera Cuero - Big Cow', 
        price: 3000, 
        category: 'billeteras', 
        img: 'https://image.made-in-china.com/202f0j00oPHfNySJPZbj/Genuine-Leather-Short-Vertical-Men-s-Wallet.jpg', 
        stock: 20, 
        description: 'Billetera XL'
    },
    {
        id: '4', 
        name: 'Morral Cuero 1', 
        price: 15000, 
        category: 'morrales', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/039/530/products/morral-cuero-hombre-john-chocolate-20211-97e8bd1a77f08c2fda16120360657628-640-0.jpg', 
        stock: 5, 
        description: 'Morral Pequeño'
    },
    {
        id: '5', 
        name: 'Morral Cuero 2', 
        price: 20500, 
        category: 'morrales', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/028/257/products/3392_0002_layer-71-4771eabb330a652e4815983875839848-1024-1024.jpg', 
        stock: 5, 
        description: 'Morral Ejecutivo'
    },
    {
        
        id: '6', 
        name: 'Cartera Cuero 1', 
        price: 25000, 
        category: 'carteras', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/028/257/products/4395-dy-1_0001_layer-821-dac856bb215581189415132868469367-1024-1024.jpg', 
        stock: 3, 
        description: 'Cartera Femenina'
    } */
]



export const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos)
        }, 1000)
    })
}

export const obtenerProductosByCategory = (categoryId) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos.filter(productos=> productos.category === categoryId))
        }, 1000)
    })
}

export const obtenerProductosById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos.find(productos => productos.id === id))
        }, 1000)
    })
}


//3.24