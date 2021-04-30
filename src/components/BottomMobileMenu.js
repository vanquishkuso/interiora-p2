import React from 'react';
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import { BsFillPersonFill } from "react-icons/bs"

const BottomMobileMenu = () => {

  return (
    <MenuWrapper>
      <Nav>
        <ButtonWrapper>
          <Bars />
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

      </Nav>
    </MenuWrapper>
  )
}

const ButtonWrapper = styled.div`
  border-left: 2px solid #000;
  padding: 1em;
  width: 25%;
  display: flex;
  justify-content: center;
`

const Bars = styled(FaBars)`
  color: #fff;
  font-size: 2em;
`

const Search = styled(FiSearch)`
  color: #fff;
  font-size: 2em;
`

const Account = styled(BsFillPersonFill)`
  color: #fff;
  font-size: 2em;
`

const Cart = styled(FiShoppingCart)`
  color: #fff;
  font-size: 2em;
`

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 998;
  background-color: #373737;
  width: 100%;
`

const MenuWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`

export default BottomMobileMenu