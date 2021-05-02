//import React from 'react';
//import Layout from '../components/Layout';
//import SEO from '../components/Seo';
//import styled from "styled-components"
//
//const PaymentPage = () => {
//    
//    const checkIfBox = () => {
//        if (check === false) {
//            alert("Du måste bocka för att du godkänner")
//        }
//        if (check === true) {
//            sendOrder()
//        }
//    }
//
//    return (
//        <Layout>
//            <SEO title="Betalning - Interiöra" />
//            <PaymentWrapper>
//                <FormWrapper>
//                    <FormTitle>Personuppgifter</FormTitle>
//                    För- och efternamn <Name />
//
//
//                    <AddressWrapper>
//                        <FirstColumnWrapper>
//                            <AddressTitle>Adress</AddressTitle>
//                            <Address />
//                        </FirstColumnWrapper>
//                        <SecondColumnWrapper>
//                            <ZipTitle>Postnummer</ZipTitle>
//                            <Zip />
//                        </SecondColumnWrapper>
//
//                    </AddressWrapper>
//                    Ort <City />
//                   Mejladress <Mail />
//                   Telefonnummer <Phone />
//
//                    <CheckBoxTextWrapper>
//                        <CheckBox type="checkbox" onClick={() => setCheck(prev => !prev)} style={{ //marginRight: "1em", transform: "scale(1.5)" }} />
//                        <p>Jag godkänner&nbsp;
//                    <a href="/anvandarvillkor">användarvillkoren</a>
//                    &nbsp;förstår Interiöras&nbsp;
//                    <a href="/integritetspolicy">integritetspolicy</a>
//                    &nbsp;när jag bekräftar beställningen.
//                    </p>
//                    </CheckBoxTextWrapper>
//                    <ButtonWrapper>
//                        <Link onClick={() => checkIfBox()} to="/bekraftelse" style={{ textDecoration: //"none", margin: "0 auto" }}>
//                            <ConfirmButton big={true} disabled={!check}>Beställ</ConfirmButton>
//                        </Link>
//                    </ButtonWrapper>
//                </FormWrapper>
//            </PaymentWrapper>
//        </Layout>
//    )
//}
//
//const PaymentWrapper = styled.div`
//
//`
//
//const ConfirmButton = styled(Button)`
//    &:disabled {
//        opacity: 0.3;
//        transform: translateY(0px);
//    }
//    &:disabled:hover {
//        background-color: #373737;
//    }
//`
//const CheckBoxTextWrapper = styled.div`
//    display: flex;
//    flex-direction: row;
//    width: 100%;
//    text-align: left;
//    a {
//        transition: 0.3s ease;
//        color: #877D70;
//
//        &:hover {
//            color: #373737;
//        }
//    }
//`
//
//const CheckBox = styled.input`
//    
//`
//
//const ButtonWrapper = styled.div`
//    margin: 1em auto 0 auto;
//
//`
//
//const FormTitle = styled.h2`
//
//`
//const FormWrapper = styled.form`
//    display: flex;
//    flex-direction: column;
//    max-width: 60%;
//    margin: 0 auto;
//    margin-bottom: 5em;
//
//    @media screen and (max-width: 500px) {
//        max-width: 80%; 
//    }
//`
//
//const Name = styled.input`
//    border: solid #373737 1px;
//    border-radius: 5px;
//    height: 2em;
//    margin-bottom: 1em;
//`
//
//const City = styled.input`
//    border: solid #373737 1px;
//    border-radius: 5px;
//    height: 2em;
//    margin-bottom: 1em;
//`
//
//const Mail = styled.input`
//    border: solid #373737 1px;
//    border-radius: 5px;
//    height: 2em;
//    margin-bottom: 1em;
//`
//
//const Phone = styled.input`
//    border: solid #373737 1px;
//    border-radius: 5px;
//    height: 2em;
//    margin-bottom: 1em;
//`
//
//const Address = styled.input`
//    border: solid #373737 1px;
//    border-radius: 5px;
//    height: 2em;
//    margin-bottom: 1em;
//`
//
//const AddressTitle = styled.p`
//
//`
//
//const ZipTitle = styled.p`
//
//`
//
//const Zip = styled.input`
//    width: 100%;
//    height: 2em;
//    border: solid #373737 1px;
//    border-radius: 5px;
//
//`
//
//const FirstColumnWrapper = styled.div`
//    display: flex;
//    flex-direction: column;
//    width: 100%;
//    margin-right: 1em;
//`
//
//const SecondColumnWrapper = styled.div`
//    display: flex;
//    flex-direction: column;
//    width: 50%;
//`
//
//const AddressWrapper = styled.div`
//    display: flex;
//    justify-content: space-between;
//    
//`
//
//const ProductWrapper = styled.div`
//    display: grid;
//    grid-template-columns: 1fr 1fr;
//    justify-items: center;
//    margin-top: 3em;
//`
//
//const Title = styled.h1`
//    margin-top: 0.7em;
//    text-align: center;
//    margin-bottom: 1.5rem;
//    letter-spacing: 3px;
//    font-weight: bold;
//    padding: 0 1rem;
//`
//
//const LeftColumn = styled.div`
//    display: flex;
//    flex-direction: row;
//    justify-items: flex-start;
//
//`
//const RightColumn = styled.div`
//    display: flex;
//    flex-direction: column;
//    justify-content: space-between;
//    align-items: flex-end;
//    margin-right: -4.8em;
//`
//const TrashCan = styled(BiTrash)`
//    font-size: 1.6em;
//    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
//    cursor: pointer;
//    &:hover {
//        color: #877D70;
//    }
//`
//
//const ProductCategory = styled.p`
//
//`
//
//const ProductTitle = styled.h2`
//    width: 0em;
//    margin: 0;
//`
//
//const TitleWrapper = styled.div`
//    width: 0;
//    margin-left: 1em;
//`
//
//const TotalCost = styled.p`
//    margin-top: 2em;
//
//`
//
//const BottomRow = styled.div`
//    display: grid;
//    grid-template-columns: 1fr 1fr;
//    justify-items: center;
//    margin-bottom: 5em;
//`
//
//const Cost = styled.p`
//    margin-top: 2em;
//    font-size: 1.2em;
//    font-weight: bold;
//`
//
//const CartWrapper = styled.div`
//    width: 100%;
//    display: flex;
//    flex-direction: column;
//    align-content: center;
//`
//
//const Line = styled.hr`
//    width: 60vw;
//    margin-left: auto;
//    margin-right: auto;
//    margin-top: 2.5em;
//    border-top: 1px solid #373737;
//    opacity: 20%;
//
//    @media screen and (max-width: 500px) {
//        width: 80vw;
//    }
//    
//`
//
//const Wrapper = styled.div`
//
//`
//
//const EmptyCartText = styled.p`
//    text-align:center;
//    height: 50vh;
//`
//
//const TaxTitle = styled.p`
//    font-size: 0.7em;
//    margin-left: 2em;
//`
//
//const TaxCost = styled.p`
//    font-size: 0.7em;
//
//`
//
//
//export default PaymentPage