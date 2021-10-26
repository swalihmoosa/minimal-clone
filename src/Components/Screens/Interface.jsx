import React from 'react'
import styled from 'styled-components'
import one from "../Images/home/screen_light_1.png"
import two from "../Images/home/screen_light_2.png"
import three from "../Images/home/screen_light_3.png"

export default function Interface() {
    return (
        <Intersec>
            <Section className="wrapper">
                <Left>
                    <H5>
                        INTERFACE STARTER KIT
                    </H5>
                    <H6>
                        Huge pack of elements
                    </H6>
                    <P>
                        We collected most popular elements.Menu, sliders, buttons, inputs etc.are all here.Just drive in!
                    </P>
                    <View href="/">
                        View All Components
                    </View>
                </Left>
                <Right>
                    <Container className="one">
                        <img src={one} alt="screen_light" />
                    </Container>
                    <Container className="two">
                        <img src={two} alt="screen_light" />
                    </Container>
                    <Container className="three">
                        <img src={three} alt="screen_light" />
                    </Container>
                </Right>
            </Section>
        </Intersec>
    )
}
const Intersec = styled.section`
    padding: 8% 0 20%;
    background: linear-gradient(to bottom,#FFFFFF ,#e0e3e8);`
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;`
const Left = styled.div`
    width: 35%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 75%;
        margin: 0 auto;
        text-align: center;
    }
    @media all and (max-width: 768px){
        width: 95%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const H5 = styled.h5`
    font-size: 20px;
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;
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
const H6 = styled.h6`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
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
    margin-bottom: 8%;
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
const View = styled.a`
    border: 1px solid;
    padding: 15px 25px;
    font-weight: 700;
    border-radius: 15px;
    text-align: center;
    display: block;
    width: 50%;
    @media all and (max-width: 1280px){
        width: 75%;
    }
    @media all and (max-width: 980px){
        margin: 0 auto;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width: 90%;
    }
    @media all and (max-width: 320px){
    }`
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    position: relative;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        margin: 0 auto 55%;
    }
    @media all and (max-width: 768px){
        margin-bottom:58%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        margin-bottom:80%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Container = styled.div`
    width: 33%;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    box-shadow: inset -20px -10px 20px 20px rgb(0 0 0 / 20%), -5px -3px 20px 11px rgb(0 0 0 / 19%);
    transform: skewY(10deg);
    position: absolute;
    border-radius: 15px;
    img{
        border-radius: 15px;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    }
    &.one{
        left: 100px;
        z-index: 3;
    }
    &.two{
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        z-index: 2;
    }
    &.three{
        right:100px;
        z-index: 1;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 45%;
        &.one{
            left: 20px;
        }
        &.three{
            right: 20px;
        }
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width: 60%;
        &.one{
            left: -10px;
        }
        &.three{
            right: -10px;
        }
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`