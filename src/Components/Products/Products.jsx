import React from 'react';
import OurAdvice from "./our-advice/OurAdvice";
import OurProducts from "./our-products/OurProducts";
import ProductGalarey from "./product-galarey/ProductGalarey";
import ProductInNumber from "./product-in-number/ProductInNumber";

const Products = (props) => {
    return (<>
        <OurProducts/>
        <ProductGalarey/>
        <OurAdvice />
        <ProductInNumber/>
    </>);
};

export default Products;