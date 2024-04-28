
const useFindProductDetails = (productList) =>{

    const findProductDetail = (selectedProduct, crust, variant) =>{
        const found = productList.find((x) => x.id === selectedProduct.id);

        const detail = crust > 0 && variant > 0 && found.productDetails.find(x => x.crustTypeId === crust && x.productVarientId === variant);
        return detail;
    }

    return {
        findProductDetail 
    }
}

export default useFindProductDetails;