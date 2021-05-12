import React, { useState } from 'react'
import Layout from '../components/Layout'
import styled from "styled-components"
import SEO from '../components/Seo'
import { Link } from "gatsby"
import { Button } from "../components/Button"
import { FaCheck, FaCcVisa, FaCcMastercard } from "react-icons/fa"


const PayPage = ({ location }) => {
    const [check, setCheck] = useState(false)
    const [checkField, setCheckField] = useState({
        name: false,
        card: false,
        cvc: false,
        monthyear: false
    })

    const checkIfBox = () => {
        if (check === true) {
            sendOrder()
        }
    }
    const sendOrder = () => {
        let order = [{
            orderId: Math.floor((Math.random() * 100)),
            orderPrice: location.state.cost,
            orderDate: new Date().toISOString().slice(0, 10),
            deliveryDate: randomDate(new Date(2021, 5, 1), new Date(2021, 6, 1)).toISOString().slice(0, 10)
        }]

        var a = [];
        a = JSON.parse(localStorage.getItem("orderHistory")) || [];
        a.push(order);
        localStorage.setItem("orderHistory", JSON.stringify(a))
        localStorage.removeItem("products")
    }

    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    return (
        <Layout>
            <SEO title="Betalning - Interiöra" />
            <ProgressWrapper style={{ textAlign: "center", marginBottom: "5em", fontWeight: "bold" }}>
                <NumberWrapper style={{ opacity: "0.3" }}>
                    <Number >1</Number>
                    <p>Varukorgen</p>
                </NumberWrapper>
                <NumberWrapper style={{ opacity: "0.3" }}>
                    <Number>2</Number>
                    <p>Adressuppgifter</p>
                </NumberWrapper>
                <NumberWrapper>
                    <Number>3</Number>
                    <p>Betalning</p>
                </NumberWrapper>
                <NumberWrapper style={{ opacity: "0.3" }}>
                    <Number>3</Number>
                    <p>Bekräftelse</p>
                </NumberWrapper>
            </ProgressWrapper>

            <PaymentWrapper>

                <h2 style={{ marginBottom: "1em", letterSpacing: "3px" }}>Kortbetalning</h2>

                <FirstCardColumn>
                    <CheckField style={{ fontWeight: "bold", position: "relative", left: "calc(100% + -30px)", bottom: "-53px", zIndex: "90", color: "green", opacity: checkField.name ? "100%" : "0%" }} />
                    <CardTitle>Kortinnehavare</CardTitle>
                    <CardName onChange={() => setCheckField({ ...checkField, name: true })} />


                    <CheckField style={{ fontWeight: "bold", position: "relative", left: "calc(100% + -30px)", bottom: "-66px", zIndex: "50", color: "green", opacity: checkField.card ? "100%" : "0%" }} />
                    <CardTitle style={{ marginTop: "0.8em" }}>Kortnummer</CardTitle>
                    <CardNumber onChange={() => setCheckField({ ...checkField, card: true })} />
                </FirstCardColumn>


                <SecondCardColumn>


                    <div style={{ marginRight: "1em" }}>
                        <CheckField style={{ fontWeight: "bold", position: "relative", left: "calc(100% + -30px)", bottom: "-57px", zIndex: "50", color: "green", opacity: checkField.cvc ? "100%" : "0%" }} />
                        <CardTitle>Säkerhetskod</CardTitle>
                        <CVC onChange={() => setCheckField({ ...checkField, cvc: true })} />
                    </div>


                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <CheckField style={{ fontSize: "1em", fontWeight: "bold", position: "relative", left: "calc(100% + -5px)", bottom: "-51px", zIndex: "50", color: "green", opacity: checkField.monthyear ? "100%" : "0%" }} />
                        <CardTitle>Giltighetstid</CardTitle>

                        <div style={{ display: "flex", flexDirection: "row" }}>

                            <CardMonthYear onChange={() => setCheckField({ ...checkField, monthyear: false })}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </CardMonthYear>
                            <CardYear onChange={() => setCheckField({ ...checkField, monthyear: true })}>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </CardYear>
                        </div>
                    </div>
                </SecondCardColumn>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "2em", opacity: "50%" }}>
                    <VisaCard />
                    <MasterCard />
                </div>
                <CheckBoxTextWrapper style={{ marginLeft: "0em" }}>
                    <CheckBox type="checkbox" onClick={() => setCheck(prev => !prev)} />
                    <p> Jag godkänner &nbsp;
                    <a href="/anvandarvillkor">användarvillkoren</a>
&nbsp; och förstår Interiöras&nbsp;
<a href="/integritetspolicy">integritetspolicy</a>
&nbsp;när jag bekräftar beställningen.
</p>
                </CheckBoxTextWrapper>
                <ButtonWrapper style={{ textAlign: "center" }}>
                    <Link onClick={() => checkIfBox()} to="/bekraftelse" style={{ textDecoration: "none", margin: "0 auto" }}>                      <ConfirmButton big={true} disabled={!check}>Beställ</ConfirmButton>
                    </Link>
                </ButtonWrapper>
            </PaymentWrapper>


        </Layout >
    )
}

const VisaCard = styled(FaCcVisa)`
    font-size: 2.5em;
    margin-right: 0.25em;
`

const MasterCard = styled(FaCcMastercard)`
    font-size: 2.5em;
    margin-left: 0.25em;
`

const PaymentBox = styled.div`

`

const CheckField = styled(FaCheck)`

`

const CardTitle = styled.h4`
    font-weight: 400;
    letter-spacing: 0.7px;
    opacity: 50%;
`

const FirstCardColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
`

const SecondCardColumn = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-direction: row;
    }  
`

const PaymentWrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.18) 0px 12px 24px;
    background-color: #f2f2f2;
    border-radius: 5px;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 5em;
    margin-top: 5em;
    padding: 3em;
    
    @media screen and (max-width: 500px) {
        width: 450px;
        max-width: 90%;
        padding: 2em;
    }  
`



const CardName = styled.input`
    font-size: 1em;
    border: solid 1px #ededed;
    border-radius: 5px;
    height: 2.5em;
    margin-bottom: 1em;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px;
    position: relative;
    z-index: 50;
    @media screen and (max-width: 500px) {
        max-width: 100%; 
    }  
`

const CardNumber = styled.input`
    border: solid 1px #ededed;
    font-size: 1em;
    height: 2.5em;
    border-radius: 5px;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`

const CVC = styled.input`
    font-size: 1em;
    height: 2.5em;
    width: 100%;
    border-radius: 5px;
    border: solid 1px #ededed;
    margin-right: 1em;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`
const CardMonthYear = styled.select`
    width: 60px;
    font-size: 1em;
    margin-right: 1em;
    height: 2.3em;
    border-radius: 5px;
    border: solid 1px #ededed;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`

const CardYear = styled.select`
    width: 90px;
    font-size: 1em;
    height: 2.3em;
    border-radius: 5px;
    border: solid 1px #ededed;
    padding-left: 1em;
    margin-top: 0.3em;
    font-weight: bold;
    color: #373737;
    letter-spacing: 1px
`

const CheckBoxTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
    margin-top: 1em;

    a {
        transition: 0.3s ease;
        color: #877D70;

        &:hover {
            color: #373737;
        }
    }

    @media screen and (max-width: 320px){
        flex-direction: column;
        margin-top: 2em;
        text-align: center;
    }
`

const CheckBox = styled.input`
    transform: scale(1.5);
    margin-right: 1em;

@media screen and (max-width: 320px){
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0.7em;
    }
`

const ButtonWrapper = styled.div`
    margin: 1em auto 0 auto;
`

const ConfirmButton = styled(Button)`
    &:disabled {
        opacity: 0.3;
        transform: translateY(0px);
    }
    &:disabled:hover {
        background-color: #373737;
    }
`

const Number = styled.p`
    font-size: 1.5em;
    margin-left: 0.3em;
    margin-right: 0.3em;
`

const NumberWrapper = styled.div`
    font-size: 0.9em;
    margin-left: 2em;
    margin-right: 2em;

    @media screen and (max-width: 500px){
        margin: 0;
    }
`

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 2em;
    width: 100%;

    @media screen and (max-width: 500px){
        justify-content: space-evenly;
    }
`

export default PayPage;