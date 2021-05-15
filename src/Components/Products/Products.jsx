import React from 'react';
import {Element} from 'react-scroll'
import OurAdvice from "./our-advice/OurAdvice";
import OurProducts from "./our-products/OurProducts";
import ProductGalarey from "./product-galarey/ProductGalarey";
import ProductInNumber from "./product-in-number/ProductInNumber";

const Products = () => {
    return <>
        <Element name='product'>
            <OurProducts/>
            <ProductGalarey/>
            <OurAdvice/>
            <ProductInNumber/>
        </Element>
    </>
}

export default Products