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
    background-size: contain;
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
    width: 50%;
    position: relative;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 60%;
        margin:0 auto 10%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width: 75%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Drk = styled.div`
    position: absolute;
    top: 0;
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
const Lte = styled.div``
const Right = styled.div`
    width: 35%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        margin:0 auto;
        width: 75%;
        text-align: center;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 90%;
    }
    @media all and (max-width: 480px){
        width: 100%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const H4 = styled.h4`
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
        font-size: 17px;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const H5 = styled.h5`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 7%;
    color: #fff;
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
    color: #fff;
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