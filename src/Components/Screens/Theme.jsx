import React from 'react'
import divimg from "../Images/home/theme-color/grid.png"
import topimg from "../Images/home/theme-color/block1-default.png"
import bottomimg from "../Images/home/theme-color/block2-default.png"
import mainimg from "../Images/home/theme-color/screen-default.png"
import rightimg from "../Images/home/theme-color/sidebar-default.png"
import styled from 'styled-components'
import { green } from '../../App'
import { purple } from '../../App'
import { cyan } from '../../App'
import { blue } from '../../App'
import { orange } from '../../App'
import { red } from '../../App'

export default function Theme() {
    return (
        <Themesec>
            <section className="wrapper">
                <H5>
                    CHOOSE YOUR STYLE
                </H5>
                <H6>
                    Theme color
                </H6>
                <P>
                    Express your own style with just one click.
                </P>
                <Div>
                    <Main>
                        <img src={mainimg} alt="Theme" />
                    </Main>
                    <Top>
                        <img src={topimg} alt="Theme" />
                    </Top>
                    <Bottom>
                        <img src={bottomimg} alt="Theme" />
                    </Bottom>
                    <Right>
                        <img src={rightimg} alt="Theme" />
                    </Right>
                </Div>
            </section>
            <Ul>
                <Li id="green" onClick={green}>

                </Li>
                <Li id="purple" onClick={purple}>
                    
                </Li>
                <Li id="cyan" onClick={cyan}>
                    
                </Li>
                <Li id="blue" onClick={blue}>
                    
                </Li>
                <Li id="orange" onClick={orange}>
                    
                </Li>
                <Li id="red" onClick={red}>
                    
                </Li>
            </Ul>
        </Themesec>
    )
}
const Themesec = styled.section`
    padding: 8% 0;
    position: relative;`
const H5 = styled.h5`
    font-size: 20px;
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;`
const H6 = styled.h6`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;`
const P = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;`
const Div = styled.div`
    background:url(${divimg});
    position: relative;`
const Main = styled.div``
const Top = styled.div`
    position: absolute;
    top: 0;`
const Bottom = styled.div`
    position: absolute;
    top: 0;`
const Right = styled.div`
    position: absolute;
    top: 0;`
const Ul = styled.ul`
    position:absolute;
    top: 30%;
    right: 10%;`
const Li = styled.li`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-bottom: 30px;
    &:last-child{
        margin-bottom: 0px;
    }
    &:hover{
        cursor:pointer;
    }`

