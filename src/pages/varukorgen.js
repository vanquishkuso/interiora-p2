import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { BiAlarm, BiTrash } from 'react-icons/bi'
import { Button } from '../components/Button'
import TransitionLink from "gatsby-plugin-transition-link"
import { Link } from "gatsby"

const CartPage = () => {
    const [getCart, setGetCart] = useState([])
    const [cart, setCart] = useState([])
    const [cartCost, setCartCost] = useState(null)
    const [updateCart, setUpdateCart] = useState("Add")
    const [tax, setTax] = useState(0)
    const [check, setCheck] = useState(false)
    const [showPay, setShowPay] = useState(false)

    const handleRemove = (id) => {
        setUpdateCart("Remove")
        const filtered = getCart.filter(item => item.id !== id)
        localStorage.setItem("products", JSON.stringify(filtered))
        setGetCart(filtered)

        var sum = 0;
        for (var i = 0; i < filtered.length; i++) {
            sum += parseInt(filtered[i].price)
        }
        setCartCost(sum)
    }

    const addItem = (price) => {
        setCartCost(prevCartCost => prevCartCost + price)
        setTax(prevTax => prevTax + cartCost * 0.2)
        //  getCart.forEach(data => setCartCost(prev => prev + data.price))
    }

    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const checkIfBox = () => {
        if (check === true) {
            sendOrder()
        }
    }
    const sendOrder = () => {
        let order = [{
            orderId: Math.floor((Math.random() * 100)),
            orderPrice: cartCost,
            orderDate: new Date().toISOString().slice(0, 10),
            deliveryDate: randomDate(new Date(2021, 5, 1), new Date(2021, 6, 1)).toISOString().slice(0, 10)
        }]

        var a = [];
        a = JSON.parse(localStorage.getItem("orderHistory")) || [];
        a.push(order);
        localStorage.setItem("orderHistory", JSON.stringify(a))
        localStorage.removeItem("products")
    }

    useEffect(() => {


        let fetchData
        if (getCart === null || getCart.length === 0) {
            fetchData = (
                <EmptyCartText>Din varukorg är tom</EmptyCartText>
            )
        } else {
            fetchData = (
                getCart.map((data, i) => {
                    if (updateCart === "Add") {
                        addItem(data.price);
                    }

                    return (
                        <Wrapper>
                            <ProductWrapper key={data.id}>
                                <LeftColumn>

                                    <img src={data.img} alt="" style={{
                                        height: "100px",
                                        width: "100px",
                                        borderRadius: "10px",
                                        filter: "brightness(100%)",
                                        transition: "0.3s cubic-bezier(0.075, 0.82, 0.165, 1)"
                                    }} />
                                    <TitleWrapper>
                                        <ProductTitle>{data.item}</ProductTitle>
                                        <ProductCategory>{data.category}</ProductCategory>
                                    </TitleWrapper>

                                </LeftColumn>
                                <RightColumn>
                                    <h3>{data.price} kr</h3>
                                    <TrashCan onClick={() => {
                                        handleRemove(data.id)
                                    }} />

                                </RightColumn>


                            </ProductWrapper>
                            <Line />

                        </Wrapper>
                    )
                })
            )

        }
        setCart(fetchData)

    }, [getCart])

    useEffect(() => {
        setGetCart(JSON.parse(localStorage.getItem("products")))
    }, [])

    return (
        <Layout>
            <SEO title="Varukorgen - Interiöra" />
            <CartWrapper>

                {showPay ?
                    <div>
                        <ProgressWrapper style={{ textAlign: "center", marginBottom: "5em", fontWeight: "bold" }}>
                            <NumberWrapper style={{ opacity: "0.3" }}>
                                <Number >1</Number>
                                <p>Varukorgen</p>
                            </NumberWrapper>
                            <NumberWrapper>
                                <Number>2</Number>
                                <p>Betalning</p>
                            </NumberWrapper>
                            <NumberWrapper style={{ opacity: "0.3" }}>
                                <Number>3</Number>
                                <p>Bekräftelse</p>
                            </NumberWrapper>
                        </ProgressWrapper>
                        <FormWrapper>
                            <FormTitle>Personuppgifter</FormTitle>
                        För- och efternamn <Name />


                            <AddressWrapper>
                                <FirstColumnWrapper>
                                    <AddressTitle>Adress</AddressTitle>
                                    <Address />
                                </FirstColumnWrapper>
                                <SecondColumnWrapper>
                                    <ZipTitle>Postnummer</ZipTitle>
                                    <Zip />
                                </SecondColumnWrapper>

                            </AddressWrapper>
                        Ort <City />
                       Mejladress <Mail />
                       Telefonnummer <Phone />

                            <CheckBoxTextWrapper>
                                <CheckBox type="checkbox" onClick={() => setCheck(prev => !prev)} style={{ marginRight: "1em", transform: "scale(1.5)" }} />
                                <p>Jag godkänner&nbsp;
                        <a href="/anvandarvillkor">användarvillkoren</a>
                        &nbsp;förstår Interiöras&nbsp;
                        <a href="/integritetspolicy">integritetspolicy</a>
                        &nbsp;när jag bekräftar beställningen.
                        </p>
                            </CheckBoxTextWrapper>
                            <ButtonWrapper>
                                <Link onClick={() => checkIfBox()} to="/bekraftelse" style={{ textDecoration: "none", margin: "0 auto" }}>
                                    <ConfirmButton big={true} disabled={!check}>Beställ</ConfirmButton>
                                </Link>
                            </ButtonWrapper>
                        </FormWrapper>
                    </div>

                    :
                    <div>
                        <Title>Varukorgen</Title>

                        {cartCost ?
                            <div style={{ textAlign: "center", marginBottom: "5em" }}>
                                <ConfirmButton big={true} >Vidare till betalning</ConfirmButton>
                                <ProgressWrapper style={{ fontWeight: "bold" }}>
                                    <NumberWrapper >
                                        <Number>1</Number>
                                        <p>Varukorgen</p>
                                    </NumberWrapper>
                                    <NumberWrapper style={{ opacity: "0.3" }}>
                                        <Number>2</Number>
                                        <p>Betalning</p>
                                    </NumberWrapper>
                                    <NumberWrapper style={{ opacity: "0.3" }}>
                                        <Number>3</Number>
                                        <p>Bekräftelse</p>
                                    </NumberWrapper>
                                </ProgressWrapper>
                            </div>
                            : null}
                        {cart}

                        {cartCost ? <div>
                            <BottomRow>
                                <TotalCost>Totalt</TotalCost>
                                <Cost>{cartCost} kr</Cost>
                                <TaxTitle>Varav moms </TaxTitle>
                                <TaxCost>{Math.round(cartCost * 0.2)} kr</TaxCost>
                            </BottomRow>
                            <div style={{ textAlign: "center", marginBottom: "5em" }}>
                                <ConfirmButton big={true} onClick={() => setShowPay(true)} >Vidare till betalning</ConfirmButton>
                            </div>
                        </div>
                            : null}


                    </div>
                }



            </CartWrapper>


            { /* <button onClick={handleCalc}>Räkna ut</button> */}

        </Layout >
    )
}


export default CartPage

const NumberWrapper = styled.div`
    margin-left: 0.8em;
    margin-right: 0.8em;
`

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2em;
`

const Number = styled.p`
    font-size: 1.5em;
    margin-left: 0.3em;
    margin-right: 0.3em;
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
const CheckBoxTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
    a {
        transition: 0.3s ease;
        color: #877D70;

        &:hover {
            color: #373737;
        }
    }
`

const CheckBox = styled.input`
    
`

const ButtonWrapper = styled.div`
    margin: 1em auto 0 auto;

`

const FormTitle = styled.h2`

`
const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 60%;
    margin: 0 auto;
    margin-bottom: 5em;

    @media screen and (max-width: 500px) {
        max-width: 80%; 
    }
`

const Name = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2em;
    margin-bottom: 1em;
`

const City = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2em;
    margin-bottom: 1em;
`

const Mail = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2em;
    margin-bottom: 1em;
`

const Phone = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2em;
    margin-bottom: 1em;
`

const Address = styled.input`
    border: solid #373737 1px;
    border-radius: 5px;
    height: 2em;
    margin-bottom: 1em;
`

const AddressTitle = styled.p`

`

const ZipTitle = styled.p`

`

const Zip = styled.input`
    width: 100%;
    height: 2em;
    border: solid #373737 1px;
    border-radius: 5px;

`

const FirstColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 1em;
`

const SecondColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const AddressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 3em;
`

const Title = styled.h1`
    margin-top: 0.7em;
    text-align: center;
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    padding: 0 1rem;
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;

`
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: -4.8em;
`
const TrashCan = styled(BiTrash)`
    font-size: 1.6em;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    &:hover {
        color: #877D70;
    }
`

const ProductCategory = styled.p`

`

const ProductTitle = styled.h2`
    width: 0em;
    margin: 0;
`

const TitleWrapper = styled.div`
    width: 0;
    margin-left: 1em;
`

const TotalCost = styled.p`
    margin-top: 2em;

`

const BottomRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-bottom: 5em;
`

const Cost = styled.p`
    margin-top: 2em;
    font-size: 1.2em;
    font-weight: bold;
`

const CartWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
`

const Line = styled.hr`
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5em;
    border-top: 1px solid #373737;
    opacity: 20%;

    @media screen and (max-width: 500px) {
        width: 80vw;
    }
    
`

const Wrapper = styled.div`

`

const EmptyCartText = styled.p`
    text-align:center;
    height: 50vh;
`

const TaxTitle = styled.p`
    font-size: 0.7em;
    margin-left: 2em;
`

const TaxCost = styled.p`
    font-size: 0.7em;

`