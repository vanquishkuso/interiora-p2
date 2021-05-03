import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { MenuData } from '../data/MenuData'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import { BsFillPersonFill } from "react-icons/bs"
import SearchPage from "./SearchPage"
import { AiOutlineClose } from "react-icons/ai"

const Header = ({ isClicked }) => {
  const [getCart, setGetCart] = useState()
  const [show, setShow] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const searchClick = () => {
    setShow(hide => !hide)
    localStorage.setItem("search", show)
  }

  const menuClick = () => {
    localStorage.setItem("mobilemenustate", showMobileMenu)
    setShowMobileMenu(hide => !hide)
    window.scrollTo(0, 0)
  }

  return (
    <Nav>
      <Wrapper>
        <Bars onClick={menuClick} />
        <NavLink to="/mitt-konto" style={{ display: "flex", alignContent: "center", order: "2" }}>
          <Account />
        </NavLink>
        <Logo to="/">Interiöra</Logo>

        <NavMenu>
          {MenuData.map((item, index) => (
            <NavLink to={item.link} key={index}>{item.title}</NavLink>
          ))}
        </NavMenu>

        <SearchClickable onClick={searchClick} style={{ order: "4" }}>
          <Search />
        </SearchClickable>

        <NavLink to="/varukorgen" style={{ display: "flex", alignContent: "center", order: "4" }}>
          <Cart />
        </NavLink>

      </Wrapper>
      { showMobileMenu ? <MobileWrapper>
        <MobileMenuCloseIcon onClick={menuClick} />
        <MobileMenu>

          <h2 style={{ marginTop: "0em", marginBottom: "0em" }}>Produkter</h2>
          {MenuData.map((item, index) => (
            <MobileNavLink to={item.link} key={index}>{item.title}</MobileNavLink>
          ))}

          <h2 style={{ marginTop: "1.5em", marginBottom: "0em" }}>Vilka är vi</h2>
          <MobileNavLink to={"/kontakta-oss"} key={"kontakta-oss"}>Kontakta oss</MobileNavLink>
          <MobileNavLink to={"/om-interiora"} key={"om-interiora"}>Om interiöra</MobileNavLink>
          <MobileNavLink to={"/vara-butiker"} key={"vara-butiker"}>Våra butiker</MobileNavLink>
          <MobileNavLink to={"/karriar"} key={"karriar"}>Karriär</MobileNavLink>

          <h2 style={{ marginTop: "1.5em", marginBottom: "0em" }}>Om webbplatsen</h2>
          <MobileNavLink to={"/integritetspolicy"} key={"integritetspolicy"}>Integritetspolicy</MobileNavLink>
          <MobileNavLink to={"/om-cookies"} key={"om-cookies"}>Om cookies</MobileNavLink>
          <MobileNavLink to={"/anvandarvillkor"} key={"anvandarvillkor"}>Användarvillkor</MobileNavLink>

        </MobileMenu>
      </MobileWrapper>
        : null
      }




      {show ? <div><SearchPage /><CloseIcon onClick={searchClick} /><SearchWrapper onClick={searchClick} /></div> : null}

      { /*
        {showMobileSearch ? <div><SearchPageMobile /><CloseIconMobile onClick={searchClickMobile} /><SearchWrapper onClick={searchClickMobile} /></div> : null}
        */}


      <MobileMenuWrapper style={{ position: "fixed", bottom: "0" }}>
        <MobileNav>
          <ButtonWrapper onClick={menuClick} >
            <BarsMobile />
          </ButtonWrapper>

          <ButtonWrapper onClick={searchClick}>
            <SearchMobile />
          </ButtonWrapper>



          <ButtonWrapperLink to="/varukorgen/">
            <CartMobile />
          </ButtonWrapperLink>



          <ButtonWrapperLink to="/mitt-konto/">
            <AccountMobile />
          </ButtonWrapperLink>

        </MobileNav>
      </MobileMenuWrapper>

    </Nav>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
`


const SearchMobile = styled(FiSearch)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const AccountMobile = styled(BsFillPersonFill)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const CartMobile = styled(FiShoppingCart)`
  color: #fff;
  font-size: 2em;
  height: 48px;
`

const BarsMobile = styled(FaBars)`
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
  cursor: pointer;

  &:hover {
      background-color: #f8f8f8;
  }
  
  &:hover ${BarsMobile} {
    color: #373737;
  }

  &:hover ${SearchMobile} {
    color: #373737;
  }

`

const ButtonWrapperLink = styled(Link)`
  border-left: 2px solid #000;
  padding: 1em;
  width: 25%;
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
      background-color: #f8f8f8;
  }

  &:hover ${CartMobile} {
    color: #373737;
  }
  
  &:hover ${AccountMobile} {
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

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const Logo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #373737;
  text-decoration: none;
  font-family: 'Poppins';
  font-size: clamp(1.35rem, 8vw, 2rem);

  &:hover {
    color: #877D70;
    transition: 0.3s ease;
  }

  @media screen and (max-width: 500px) {
    margin: 0 auto;
    z-index: 999;
  }

  @media screen and (max-width: 1085px) {
    order: 3;
    margin: 0 auto;
  }
`

const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
color: #877D70;

@media screen and (max-width: 1085px) {
    margin: 0 auto;
    display: block;
    padding: 0;
  }

  &:hover {
        color: #373737;
        transition: 0.3s ease;
    }
`

const Bars = styled(FaBars)`
  display: none;
  color: #877D70;
  
 
  &:hover {
    color: #373737;
    transition: 0.3s ease;
}

  @media screen and (max-width: 1085px) {
    order: 1;
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    margin: 0 auto;
}

@media screen and (max-width: 500px){
  margin-left: 0.3em;
}

`

const Search = styled(FiSearch)`
  color: #877D70;
  font-size: 1.8rem;

  &:hover {
      color: #373737;
      transition: 0.3s ease;
    }
    
  @media screen and (max-width: 1085px) {
  font-size: 1.8rem;
}
`

const SearchClickable = styled.div`
  cursor: pointer;
  
`

const Cart = styled(FiShoppingCart)`
  order: 5;
  color: #877D70;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
      color: #373737;
      transition: 0.3s ease;
    }

  @media screen and (max-width: 1085px) {
  display: block;
  font-size: 1.8rem;
}
`

const Account = styled(BsFillPersonFill)`
  color: #877D70;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
      color: #373737;
      transition: 0.3s ease;
    }
    
    @media screen and (max-width: 1085px) {
    display: block;
  }

  @media screen and (max-width: 500px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }


`


const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;

  @media screen and (max-width: 1085px) {
    display: none;

  }
`

const MobileWrapper = styled.div`
  background-color: rgb(250,250,250,1);
  height: 100vh;
  width: 100vw;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;
`

const MobileMenu = styled.div`
 // z-index: 60;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  height: 100%;
  margin-top: 20px;
`

const MobileNavLink = styled(Link)`
 // position: relative;
 // z-index: 999;
  text-decoration: none;
  padding: 0;
  height: 3.9%;
  cursor: pointer;
  color: #877D70;
  font-size: 1.2em;

  @media screen and (max-width: 1085px) {
    
  }

  &:hover {
        color: #373737;
        transition: 0.3s ease;
  }
`

const MobileMenuCloseIcon = styled(AiOutlineClose)`
    position: absolute;
    top: 8%;
    right: 0;
    margin-right: 0.9em;
    color: #877D70;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  &:hover {
      color: #373737;
      transition: 0.3s ease;
    }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and(max-width: 1085px) {
    display: none;
}
`

const CloseIcon = styled(AiOutlineClose)`
  position: fixed;
  top: calc(0% + 105px);
  right: 0;
  margin-right: 0.7em;
  color: #877D70;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 999;
    &:hover {
    color: #373737;
    transition: 0.3s ease;
}
`


const CloseIconMobile = styled(AiOutlineClose)`
  position: fixed;
  top: 105px;
  right: 0;
  margin-right: 0.7em;
  color: #877D70;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 999;
    &:hover {
    color: #373737;
    transition: 0.3s ease;
}
`

const SearchWrapper = styled.div`
background-color: rgb(50, 50, 50, 0.5);
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
`