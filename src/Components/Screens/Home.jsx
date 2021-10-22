import React from 'react'
import styled from 'styled-components'
import Logo from "../Images/brand/logo_single.svg"
import Arrow from "../Images/icons/chevron-down-solid.svg"

export default function Home() {
    return (
        <Homesec>
            <section className="wrapper">
                <Header>
                    <H1>
                        <img src={Logo} alt="Logo" />
                    </H1>
                    <Nav>
                        <Navlist>
                            Home
                        </Navlist>
                        <Navlist>
                            Components
                        </Navlist>
                        <Page>
                            Pages
                            <Arrowdiv>
                                <img src={Arrow} alt="Arrow" />
                            </Arrowdiv>
                        </Page>
                        <Navlist>
                            Documentation
                        </Navlist>
                        <Purchase>
                            Purchase Now
                        </Purchase>
                    </Nav>
                </Header>
            </section>
        </Homesec>
    )
}
const Homesec = styled.section``
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;`
const H1 = styled.h1``
const Nav = styled.ul`
    display: flex;
    justify-content: space-between;`
const Navlist = styled.li``
const Page = styled.li``
const Arrowdiv = styled.div``
const Purchase = styled.li``