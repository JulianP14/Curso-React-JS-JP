export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data ()
    const productosFromFirestore = {
        id: doc.id,
        name: data.name,
        category: data.category,
        img: data.img,
        price: data.price,
        description: data.description
    }

    return productosFromFirestore
}