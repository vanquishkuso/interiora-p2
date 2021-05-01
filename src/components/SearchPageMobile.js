import React, { useState, useEffect } from 'react'
import SearchBarMobile from './SearchBarMobile'
import ProductList from '../data/ProductList'
import styled from "styled-components"


const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [productListDefault, setProductListDefault] = useState();
    const [productList, setProductList] = useState();
    const url = JSON.parse(localStorage.getItem("allProducts"))

    const fetchData = async () => {
        setProductList(url)
        setProductListDefault(url)
    }

    const updateInput = async (input) => {
        const filtered = productListDefault.filter(product => {
            return product.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        if (input.length > 2) {
            setProductList(filtered);
        }
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>
            <SearchBarMobile
                input={input}
                onChange={updateInput}
                styles={{ marginLeft: "5em", zIndex: "999" }}
            />
            <ProductList input={input} productList={productList} />
        </>
    );
}


export default SearchPage