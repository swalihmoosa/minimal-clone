import React from 'react'
import one from "../Images/home/lightmode.png"
import two from "../Images/home/darkmode.png"
import bg from "../Images/home/shape.svg"
import styled from 'styled-components'

export default function Dark() {
    return (
        <Darksec>
            <Section className="wrapper">
                <Left>
                    <Lte>
                        <img src={one} alt="Mode" />
                    </Lte>
                    <Drk>
                        <img src={two} alt="Mode" />
                    </Drk>
                </Left>
                <Right>
                    <H4>
                        EASY SWITCH BETWEEN STYLES
                    </H4>
                    <H5>
                        Dark mode
                    </H5>
                    <P>
                        A dark theme that feels easier on the eyes.
                    </P>
                </Right>
            </Section>
        </Darksec>
    )
}
const Darksec = styled.section`
    padding: 8% 0;
    background: #1a2027;`
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    background:url(${bg}) no-repeat;
    background-position: center;
    align-items: center;
    background-size: contain;`
const Left = styled.div`
    width: 50%;
    position: relative;`
const Drk = styled.div`
    position: absolute;
    top: 0;`
const Lte = styled.div``
const Right = styled.div`
    width: 35%;`
const H4 = styled.h4`
    font-size: 20px;
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;`
const H5 = styled.h5`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 7%;
    color: #fff;`
const P = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8%;`