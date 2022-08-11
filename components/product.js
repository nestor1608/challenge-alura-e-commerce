export const uniqueDate = (products)=>{
    const unique = [];
    products.forEach((product) => {
        if(!unique.includes(product.category)) unique.push(product.category);
    });
    return unique
}