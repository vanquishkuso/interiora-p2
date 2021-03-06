import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import Loader from "react-loader-spinner"

const AddToCartButton = ({ product, slug }) => {
    const [addItem, setAddItem] = useState([{}])
    const [isClicked, setIsClicked] = useState(false)
    const [clickedItem, setClickedItem] = useState(null)
    const [addQuantity, setAddQuantity] = useState(0)

    const handleAddToCart = (e) => {
        localStorage.setItem("productid", product.id)
        setIsClicked(true)
        setClickedItem(product.id)
        setAddItem(product.name)
    }

    const addToCart = (data) => {
        var a = [];
        a = JSON.parse(localStorage.getItem("products")) || [];
        a.push(data);
        localStorage.setItem("products", JSON.stringify(a))
    }

    useEffect(() => {
        if (isClicked === true && clickedItem === localStorage.getItem("productid")) {

            setTimeout(() => {
                setIsClicked(false)
            }, 1800)
        }
    }, [isClicked])

    return (
        <div>
            <Button style={{ margin: "0auto" }} big={true} primary={true} round={false} onClick={(e, i) => {
                handleAddToCart(e)
                addToCart(
                    {
                        id: product.id,
                        item: product.name,
                        img: product.images[0].url,
                        price: product.price,
                        category: product.categories[0].name,
                        slug: slug,
                    }
                )

            }}>{clickedItem == product.id && isClicked ?
                <div><Loader type="Oval" color="#cccccc" height={30} width={30} /></div> : <p style={{ marginBottom: "5px", marginTop: "5px" }}>KÖP</p>}</Button>
        </div>
    )
}

export default AddToCartButton