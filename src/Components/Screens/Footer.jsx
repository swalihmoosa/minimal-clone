import React from 'react'
import styled from 'styled-components'
import rocket from "../Images/home/rocket.png"
import logo from "../Images/brand/logo_single.svg"

export default function Footer() {
    return (
        <Footersec>
            <section className="wrapper">
                <Div>
                    <Left>
                        <img src={rocket} alt="Rocket" />
                    </Left>
                    <Right>
                        <H5>
                            Get started with minimal kit today
                        </H5>
                        <Purchase href="/">
                            Purchase Now
                        </Purchase>
                    </Right>
                </Div>
                <Logo>
                    <img src={logo} alt="Logo" />
                </Logo>
                <Copy>
                    &copy; All rights reserved
                </Copy>
                <P>
                    made by <B href="/">minimals.cc</B>
                </P>
            </section>
        </Footersec>
    )
}
const Footersec = styled.footer`
    padding: 0 0 2%;`
const Div = styled.div`
    background: linear-gradient(to right,#4eac56 ,#388256);
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;`
const Left = styled.div`
    width: 45%;`
const Right = styled.div`
    width: 45%;`
const H5 = styled.h5`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10%;
    color: #fff;`
const Purchase = styled.a`
    width: 30%;
    background: #fff;
    padding: 15px 25px;
    border-radius: 15px;
    color: #4eac56;
    font-weight: 700;
    text-align: center;
    display: block;
    border:2px solid #fff;
    &:hover{
        background:transparent;
        color:#fff;
    }`
const Logo = styled.div`
    width: 7%;
    margin: 1% auto;`
const Copy = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1%;`
const P = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;`
const B = styled.a`
    color: #4eac56;
    font-size: 18px;
    font-weight: 700;`
