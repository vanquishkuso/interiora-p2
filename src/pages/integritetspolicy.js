import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import Picture from "../assets/images/integritetspolicy.jpg"


const IntegrityPolicyPage = () => {
    return (
        <Layout>

            <Title>Integritetspolicy</Title>
            <Wrapper>
                <LeftColumn>
                    <IMG src={Picture} alt="" />
                </LeftColumn>

                <RightColumn>
                    <p>Vi värnar om din integritet och de personliga uppgifter som du delgett oss kommer alltid att hanteras med största möjliga försiktighet. Dina personuppgifter kommer aldrig att delas med någon annan part utanför Interiöra AB.</p>
                </RightColumn>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    justify-content: center;
    justify-items: center;
    margin-bottom: 5em;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
    }
`

const Title = styled.h1`
    margin-top: 0.7em;
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const LeftColumn = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
       p {
            text-align: left;
            margin-bottom: 2rem;
            font-weight: 400;
       }
       a {
        text-decoration: none;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #877D70;
        transition: 0.3s ease;
        &:hover {
            color: #373737;
        }
       }
       @media screen and (max-width: 500px) {
        width: 100%;
           margin: 0 auto;
           margin-bottom: 0em;
           justify-content: center;
       }
`

const RightColumn = styled.div`
    width: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
       p {
        width: 80%;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
       }
       a {
        text-decoration: none;
        text-align: left;
        margin-bottom: 2rem;
        font-weight: 400;
        color: #877D70;
        transition: 0.3s ease;
        &:hover {
            color: #373737;
        }
       }
       @media screen and (max-width: 500px) {
           width: 100%;
           margin: 0 auto;
           margin-bottom: 3em;
       }
`

const IMG = styled.img`
    width: 80%;
    border-radius: 5px;
    margin-bottom: 1em;
`

export default IntegrityPolicyPage;