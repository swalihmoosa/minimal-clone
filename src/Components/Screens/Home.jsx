import React from 'react'
import styled from 'styled-components'
import Logo from "../Images/brand/logo_single.svg"
import Arrow from "../Images/icons/chevron-down-solid.svg"
import prevd from "../Images/home/ic_sketch_small.svg"
import bolt from "../Images/home/bolt-solid.svg"
import hero from "../Images/home/hero.png"
import one from "../Images/home/ic_sketch.svg"
import two from "../Images/home/ic_figma.svg"
import three from "../Images/home/ic_material.svg"
import four from "../Images/home/ic_react.svg"
import five from "../Images/home/ic_js.svg"
import six from "../Images/home/ic_ts.svg"

export default function Home() {
    return (
        <Homesec>
            <section className="wrapper">
                <Header>
                    <H1>
                        <Logoo>
                            <a href="/">
                            <img src={Logo} alt="Logo" />
                            </a>
                        </Logoo>
                        <V>
                            v2.6.0
                        </V>
                    </H1>
                    <Nav>
                        <Navul>
                            <Navlist>
                                <A href="/" >
                                Home
                                </A>
                            </Navlist>
                            <Navlist>
                                <A href="/" >
                                Components
                                </A>
                            </Navlist>
                            <Page>
                                <A href="/" >
                                Pages
                                </A>
                                <Arrowdiv>
                                    <Img src={Arrow} alt="Arrow" />
                                </Arrowdiv>
                            </Page>
                            <Navlist>
                                <A href="/" >
                                Documentation
                                </A>
                            </Navlist>
                        </Navul>
                        
                        <Purchase href="/">
                            Purchase Now
                        </Purchase>
                    </Nav>
                </Header>
                <Spot>
                    <Left>
                        <H4>
                            Start a <br />new project <br />with <B>Minimal</B>
                        </H4>
                        <P>
                            The starting point for your next project based on easy-to-customize Material-UI &copy; helps you build apps faster and better.
                        </P>
                        <Prev>
                            <Diamond>
                                <img src={prevd} alt="Diamond" />
                            </Diamond>
                            <Dp>
                                Preview in Sketch Cloud
                            </Dp>
                        </Prev>
                        <Live>
                            <Thunder>
                                <Img src={bolt} alt="Thunder" />
                            </Thunder>
                            <Tp>
                                Live Preview
                            </Tp>
                        </Live>
                        <Companies>
                            <Company>
                                <img src={one} alt="Company" />
                            </Company>
                            <Company>
                                <img src={two} alt="Company" />
                            </Company>
                            <Company>
                                <img src={three} alt="Company" />
                            </Company>
                            <Company>
                                <img src={four} alt="Company" />
                            </Company>
                            <Company>
                                <img src={five} alt="Company" />
                            </Company>
                            <Company>
                                <img src={six} alt="Company" />
                            </Company>
                        </Companies>
                    </Left>
                    <Right>
                        <img src={hero} alt="Spotlight" />
                    </Right>
                </Spot>
            </section>
        </Homesec>
    )
}
const Homesec = styled.section`
    background: linear-gradient(to right, #161c24 , #434a52);`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;`
const H1 = styled.h1`
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;`
const Logoo = styled.div``
const V = styled.p`
    background: #1a314a;
    border-radius: 10px;
    color: #0c52b4;
    padding: 2px 6px;
    font-weight: 700;
    margin-left: 7px;`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;`
const Navul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 75%;
    text-align: center;`
const Navlist = styled.li`
    width: 24%;`
const A = styled.a`
    color: #fff;
    font-weight: 700;`
const Page = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23%;`
const Arrowdiv = styled.div`
    width: 13%;
    margin-left: 10px;`
const Img = styled.img`
    filter: invert(1);`
const Purchase = styled.a`
    width: 24%;
    background: #4eac56;
    padding: 15px 25px;
    border-radius: 15px;
    color: #fff;
    font-weight: 700;
    text-align:center;
    box-shadow: 0px 27px 34px 0px rgb(78 172 86 / 25%);
    border:2px solid #4eac56;
    &:hover{
        color: #4eac56;
        background: #fff;
    }`
const Spot = styled.section`
    padding: 5% 0;
    display: flex;
    justify-content: space-between;`
const Left = styled.div`
    width: 47%;`
const H4 = styled.h4`
    font-size: 60px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 8%;`
const B = styled.b`
    color: #4eac56;
    font-weight: 700;`
const P = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8%;`
const Prev = styled.div`
    display: flex;
    justify-content: space-between;
    width: 38%;
    margin-bottom: 8%;`
const Diamond = styled.div`
    width: 10%;`
const Dp = styled.p`
    color: #c3c3c3;
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;`
const Live = styled.div`
    background: #4eac56;
    padding: 15px 25px;
    border-radius: 15px;
    margin-bottom: 8%;
    display: flex;
    justify-content: space-between;
    width: 35%;
    box-shadow: 0px 27px 34px 0px rgb(78 172 86 / 25%);
    cursor:pointer;`
const Thunder = styled.div`
    width: 10%;`
const Tp = styled.p`
    color: #fff;
    width: 85%;
    font-weight: 700;
    text-align: center;`
const Companies = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 55%;`
const Company = styled.li`
    width: 13%;`
const Right = styled.div`
    width: 47%;
    opacity: 0.2;`