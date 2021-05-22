import React, { useState } from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"

const ConfirmPage = () => {

    return (
        <Layout>
            <ProgressWrapper style={{ textAlign: "center", marginBottom: "5em", fontWeight: "bold" }}>
                <NumberWrapper style={{ opacity: "0.3" }}>
                    <Number >1</Number>
                    <p>Varukorgen</p>
                </NumberWrapper>
                <NumberWrapper style={{ opacity: "0.3" }}>
                    <Number>2</Number>
                    <p>Adressuppgifter</p>
                </NumberWrapper>
                <NumberWrapper style={{ opacity: "0.3" }}>
                    <Number>3</Number>
                    <p>Betalning</p>
                </NumberWrapper>
                <NumberWrapper>
                    <Number>4</Number>
                    <p>Bekräftelse</p>
                </NumberWrapper>
            </ProgressWrapper>
            <Wrapper>
                <h1>Tack för din beställning!</h1>
                <p>Du har fått ett bekräftelsemejl skickad till din mejladress</p>
                <p>Välkommen åter!</p>
            </Wrapper>

        </Layout>
    )
}

const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-top: 10vh;
    text-align: center;

   
       h1 {
        font-size: clamp(2rem, 6vw, 3rem);
        margin-bottom: 1.5rem;
        letter-spacing: 3px;
        font-weight: bold;
        padding: 0 1rem;
       }

       p {
        font-size: clamp(1rem, 3vw, 1.5rem);
        margin-bottom: 2rem;
        font-weight: 400;
       }
`

const NumberWrapper = styled.div`
    font-size: 0.9em;
`

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
    width: 100%;
`

const Number = styled.p`
    font-size: 1.5em;
    margin-left: 0.3em;
    margin-right: 0.3em;
`

export default ConfirmPage;