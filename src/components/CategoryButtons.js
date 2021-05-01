import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { MenuData } from "../data/MenuData"
import Hem from '../assets/images/hero1.jpg'
import Lampor from '../assets/images/Lampor.jpg'
import Stolar from '../assets/images/Stolar.jpg'
import Bord from '../assets/images/Bord.jpg'
import Matsalsgrupper from '../assets/images/Matsalsgrupper.jpg'
import Sängar from '../assets/images/Sängar.jpg'
import Soffor from '../assets/images/Soffor.jpg'
import Fåtöljer from '../assets/images/Fåtöljer.jpg'
import Dekoration from '../assets/images/Dekoration.jpg'
import { Link } from "gatsby"

const CategoryButtons = () => {

    const [activeCategory, setActiveCategory] = useState()

    useEffect(() => {
        const url = window.location.href
        const checkUrl = url.split("/")[4]

        if (checkUrl === undefined) {
            setActiveCategory("brightness(50%)")
        }

        if (checkUrl === "lampor") {
            setActiveCategory("brightness(50%)")
        }

        if (checkUrl === "stolar") {

        }

        if (checkUrl === "bord") {

        }

        if (checkUrl === "matsalsgrupper") {

        }

        if (checkUrl === "sangar") {

        }

        if (checkUrl === "soffor") {

        }

        if (checkUrl === "fatoljer") {

        }

        if (checkUrl === "dekoration") {

        }
    }, [])

    return (
        <CategoryWrapper>
            {MenuData.map((data, i) => (
                <Overlay>

                    <CategoryLink to={data.link} style={{
                        filter: { activeCategory },
                        backgroundImage:
                            data.title === "Hem" ? `url(${Hem})` :
                                data.title === "Lampor" ? `url(${Lampor})` :
                                    data.title === "Stolar" ? `url(${Stolar})` :
                                        data.title === "Bord" ? `url(${Bord})` :
                                            data.title === "Matsalsgrupper" ? `url(${Matsalsgrupper})` :
                                                data.title === "Sängar" ? `url(${Sängar})` :
                                                    data.title === "Soffor" ? `url(${Soffor})` :
                                                        data.title === "Fåtöljer" ? `url(${Fåtöljer})` :
                                                            data.title === "Dekoration" ? `url(${Dekoration})` : null,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",
                    }}> <Title>{data.title}</Title></CategoryLink>

                </Overlay>
            ))}
        </CategoryWrapper>
    )
}

const Title = styled.p`
       font-size: clamp(1rem, 3vw, 2rem);

    font-weight: 400;
    background-color:rgba(55,55,55,0.8);
    padding: 0.5em;
    border-radius: 5px;

    @media screen and (max-width: 500px) {
    }
`

const CategoryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 1em;
    margin-top: 1em;
    transition: 0.3s ease;
    max-width: 97%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        max-width: 100%;
        padding: 0.2em;
    }
`

const CategoryLink = styled(Link)`
    display: flex;
    justify-content: center;
    padding: 2em;
    transition: 0.3s ease;
    background-color: #373737;
    margin: 0.3em;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    transition: 0.3s ease;
    filter: brightness(90%);
 
    &:hover {
        filter: brightness(100%);
    }

    @media screen and (max-width: 500px) {
        padding: 1em;
    }
`

const Overlay = styled.div`

`

export default CategoryButtons
