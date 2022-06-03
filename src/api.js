const productos = [
    {
        id: '1', 
        name: 'Billetera Cuero 1', 
        price: 3500, 
        category: 'billeteras', 
        img:"https://cdn.shopify.com/s/files/1/0055/3189/3832/products/bifold-leather-wallet-for-men-made-in-usa-men-s-bifold-wallets-american-made-main-street-forge-wallet-tobacco-snakebite-brown-30147278340255_2000x.jpg?v=1629299145" , 
        stock: 20, 
        description: 'billetera 1 descripcion'
    },
    {
        id: '2', 
        name: 'Billetera Cuero 2', 
        price: 2500, 
        category: 'billeteras', 
        img: 'https://5.imimg.com/data5/HM/XG/MY-3701638/mens-wallet-500x500.jpg', 
        stock: 20, description: 'billetera 2 descripcion'
    },
    {
        id: '3', 
        name: 'Billetera Cuero 3', 
        price: 3000, 
        category: 'billeteras', 
        img: 'https://image.made-in-china.com/202f0j00oPHfNySJPZbj/Genuine-Leather-Short-Vertical-Men-s-Wallet.jpg', 
        stock: 20, 
        description: 'billetera 3 descripcion'
    },
    {
        id: '4', 
        name: 'Morral Cuero 1', 
        price: 15000, 
        category: 'morrales', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/039/530/products/morral-cuero-hombre-john-chocolate-20211-97e8bd1a77f08c2fda16120360657628-640-0.jpg', 
        stock: 5, 
        description: 'morral 1 descripcion'
    },
    {
        id: '5', 
        name: 'Morral Cuero 2', 
        price: 17500, 
        category: 'morrales', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/028/257/products/3392_0002_layer-71-4771eabb330a652e4815983875839848-1024-1024.jpg', 
        stock: 5, 
        description: 'morral 2 descripcion'
    },
    {
        
        id: '6', 
        name: 'Cartera Cuero 1', 
        price: 20000, 
        category: 'carteras', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/028/257/products/4395-dy-1_0001_layer-821-dac856bb215581189415132868469367-1024-1024.jpg', 
        stock: 3, 
        description: 'cartera 1 descripcion'
    }
]

export const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos)
        }, 2500)
    })
}


//3.24