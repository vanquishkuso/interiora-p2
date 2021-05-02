import React from 'react';
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import { BsFillPersonFill } from "react-icons/bs"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from "./Button"

const BottomMobileMenu = () => {

  return (
    <MobileMenuWrapper style={{ position: "fixed", bottom: "0" }}>
      <MobileNav>
        <ButtonWrapper>
          <Bars id="#bars" />
        </ButtonWrapper>

        <ButtonWrapper>
          <Search />
        </ButtonWrapper>

        <ButtonWrapper>
          <Cart />
        </ButtonWrapper>

        <ButtonWrapper>
          <Account />
        </ButtonWrapper>

      </MobileNav>


    </MobileMenuWrapper>
  )
}

const Search = styled(FiSearch)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const Account = styled(BsFillPersonFill)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const Cart = styled(FiShoppingCart)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const Bars = styled(FaBars)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const ButtonWrapper = styled.div`
  border-left: 2px solid #000;
  padding: 1em;
  width: 25%;
  display: flex;
  justify-content: center;
  transition: 0.3s ease;

  &:hover {
      background-color: #f8f8f8;
  }
  
  &:hover ${Bars} {
    color: #373737;
  }

  &:hover ${Account} {
    color: #373737;
  }

  &:hover ${Search} {
    color: #373737;
  }

  &:hover ${Cart} {
    color: #373737;
  }
`

const MobileNav = styled.nav`
  align-self: flex-start;
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 998;
  background-color: #373737;
  width: 100vw;
`

const MobileMenuWrapper = styled.div`
  z-index: 999;
`

export default BottomMobileMenu