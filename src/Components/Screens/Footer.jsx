import React from 'react'
import styled from 'styled-components'
import rocket from "../Images/home/rocket.png"
import logo from "../Images/brand/logo_single.svg"

export default function Footer() {
    return (
        <Footersec id="footer">
            <section className="wrapper">
                <Div className="bg">
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
    align-items: center;
    padding: 5%;
    flex-wrap: wrap;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Left = styled.div`
    width: 45%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        margin: 0 auto 5%;
        width:75%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Right = styled.div`
    width: 45%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width:75%;
        margin: 0 auto 5%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const H5 = styled.h5`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10%;
    color: #fff;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        font-size: 40px;
    }
    @media all and (max-width: 768px){
        width: 75%;
    }
    @media all and (max-width: 640px){
        text-align: center;
        width: 100%;
    }
    @media all and (max-width: 480px){
        font-size: 35px;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Purchase = styled.a`
    width: 30%;
    background: #fff;
    padding: 15px 25px;
    border-radius: 15px;
    color: #000;
    font-weight: 700;
    text-align: center;
    display: block;
    border:2px solid #fff;
    &:hover{
        background:transparent;
        color:#fff;
    }
    @media all and (max-width: 1280px){
        width: 50%;
    }
    @media all and (max-width: 980px){
        width: 65%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        margin: 0 auto;
    }
    @media all and (max-width: 480px){
        width: 80%;
    }
    @media all and (max-width: 360px){
        width: 95%;
    }
    @media all and (max-width: 320px){
    }`
const Logo = styled.div`
    width: 7%;
    margin: 1% auto;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 15%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width: 20%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Copy = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const P = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const B = styled.a`
    color: #4eac56;
    font-size: 18px;
    font-weight: 700;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
