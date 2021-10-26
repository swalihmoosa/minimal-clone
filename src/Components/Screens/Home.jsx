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
import cog from "../Images/home/cogs-solid.svg"
import menu from "../Images/icons/chevron-circle-down-solid.svg"
import close from "../Images/icons/times-circle-solid.svg"
import { green } from '../../App'
import { purple } from '../../App'
import { cyan } from '../../App'
import { blue } from '../../App'
import { orange } from '../../App'
import { red } from '../../App'

export default function Home() {
    return (
        <Homesec id="home">
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
                        
                        <Purchase href="/" className="button">
                            Purchase Now
                        </Purchase>
                    </Nav>
                    <Menudiv id="menudiv" onClick={active}>
                        <img src={menu} alt="Menu" />
                    </Menudiv>
                    <Closediv id="closediv" onClick={inactive}>
                        <img src={close} alt="Close" />
                    </Closediv>
                    <Mobleft id="left">
                        <Mobul>
                            <Moblist>
                                <A href="/" >
                                Home
                                </A>
                            </Moblist>
                            <Moblist>
                                <A href="/" >
                                Components
                                </A>
                            </Moblist>
                            <Moblist>
                                <A href="/" >
                                Pages
                                </A>
                            </Moblist>
                            <Moblist>
                                <A href="/" >
                                Documentation
                                </A>
                            </Moblist>
                            <Moblist>
                                <A href="/" >
                                Purchase Now
                                </A>
                            </Moblist>
                        </Mobul>
                    </Mobleft>
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
                        <Live className="button" href="/">
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
                <Settings id="settings" onClick={set}>
                    <img src={cog} alt="Setting" />
                </Settings>
                <Setting id="settings_div">
                    <Head>
                        <S>
                            Settings
                        </S>
                        <Headclose onClick={setinactive}>
                            <img src={close} alt="Close" />
                        </Headclose>
                    </Head>
                    <Dir>
                        <Dirh>
                            Direction
                        </Dirh>
                        <Side>
                            <Sideleft onClick={left}>
                                <Lefttop>

                                </Lefttop>
                                <Leftbottom>

                                </Leftbottom>
                            </Sideleft>
                            <Sideright onClick={right}>
                                <Righttop>

                                </Righttop>
                                <Rightbottom>
                                    
                                </Rightbottom>
                            </Sideright>
                        </Side>
                    </Dir>
                    <Color>
                        <Colorh>
                            Colors
                        </Colorh>
                        <Colordiv>
                            <Colors>
                                <Col className="green" onClick={green}>
                                </Col>
                            </Colors>
                            <Colors>
                                <Col className="purple" onClick={purple}>
                                </Col>
                            </Colors>
                            <Colors>
                                <Col className="cyan" onClick={cyan}>
                                </Col>
                            </Colors>
                            <Colors>
                                <Col className="blue" onClick={blue}>
                                </Col>
                            </Colors>
                            <Colors>
                                <Col className="orange" onClick={orange}>
                                </Col>
                            </Colors>
                            <Colors>
                                <Col className="red" onClick={red}>
                                </Col>
                            </Colors>
                        </Colordiv>
                    </Color>
                </Setting>
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
    padding: 2% 0;
    position:relative;
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
const H1 = styled.h1`
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px){
        width: 15%;
    }
    @media all and (max-width: 980px){
        width: 20%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 30%;
    }
    @media all and (max-width: 480px){
        width: 40%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Logoo = styled.div``
const V = styled.p`
    background: #1a314a;
    border-radius: 10px;
    color: #0c52b4;
    padding: 2px 6px;
    font-weight: 700;
    margin-left: 7px;
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
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px){
        width: 80%;
    }
    @media all and (max-width: 980px){
        display: none;
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
const Navul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 75%;
    text-align: center;
    @media all and (max-width: 1280px){
        width: 63%;
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
const Navlist = styled.li`
    width: 24%;
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
const A = styled.a`
    color: #fff;
    font-weight: 700;`
const Page = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23%;
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
const Arrowdiv = styled.div`
    width: 13%;
    margin-left: 10px;
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
    @media all and (max-width: 1280px){
        width: 27%;
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
const Spot = styled.section`
    padding: 5% 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
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
    width: 47%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 75%;
        margin: 0 auto;
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
const H4 = styled.h4`
    font-size: 60px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 8%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        font-size: 45px;
    }
    @media all and (max-width: 480px){
        font-size: 43px;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const B = styled.b`
    color: #4eac56;
    font-weight: 700;`
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
        margin-bottom: 15%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Prev = styled.div`
    display: flex;
    justify-content: space-between;
    width: 38%;
    margin-bottom: 8%;
    @media all and (max-width: 1280px){
        width: 53%;
    }
    @media all and (max-width: 980px){
        width:42%;
    }
    @media all and (max-width: 768px){
        width:49%;
    }
    @media all and (max-width: 640px){
        width: 66%;
    }
    @media all and (max-width: 480px){
        width: 90%;
        margin-bottom: 15%;
    }
    @media all and (max-width: 360px){
        width: 100%;
    }
    @media all and (max-width: 320px){
    }`
const Diamond = styled.div`
    width: 10%;
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
const Dp = styled.p`
    color: #c3c3c3;
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
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
const Live = styled.a`
    background: #4eac56;
    padding: 15px 25px;
    border-radius: 15px;
    margin-bottom: 8%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 35%;
    box-shadow: 0px 27px 34px 0px rgb(78 172 86 / 25%);
    @media all and (max-width: 1280px){
        width: 60%;
    }
    @media all and (max-width: 980px){
        width: 38%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 55%;
    }
    @media all and (max-width: 480px){
        width: 75%;
        margin-bottom: 15%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Thunder = styled.div`
    width: 10%;
    @media all and (max-width: 1280px){
        width: 7%;
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
const Tp = styled.p`
    color: #fff;
    width: 85%;
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
const Companies = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 55%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        margin-bottom: 5%;
    }
    @media all and (max-width: 768px){
        width: 65%;
    }
    @media all and (max-width: 640px){
        width: 100%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Company = styled.li`
    width: 13%;
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
const Right = styled.div`
    width: 47%;
    opacity: 0.2;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 75%;
        margin: 0 auto 5%;
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
const Settings = styled.div`
    position: fixed;
    width: 50px;
    top: 50%;
    right: 0;
    background: #fff;
    padding: 9px;
    border-radius: 50% 0 40% 50%;
    &:hover{
        cursor:pointer;
    }`

const Mobleft = styled.nav`
    background:#fff;
    border-radius: 15px;
    position: fixed;
    transition: all 0.4s ease-in;
    left: -300px;
    z-index:25;`
const Mobul = styled.ul`
    border-radius: 15px;
    height:100%;
    a{
        color:#fff;
        margin: 0 auto;
    }`
const Moblist = styled.li`
    height:20%;
    text-align:center;
    border-radius:15px;
    display:flex;
    align-items:center;
    &:nth-child(1){
        background:#3e979b;
    }
    &:nth-child(2){
        background:#6db464;
    }
    &:nth-child(3){
        background:#f3c14e;
    }
    &:nth-child(4){
        background:#f78055;
    }   
    &:last-child{
        margin-bottom: 0px;
        background:#c97694;        
    }`
const Menudiv = styled.div`
    display:none;
    width: 40px;    
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        display:block;
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
const Closediv = styled.div`
    display:none;
    width: 40px;
    position: fixed;
    right:0;
    transform: rotateX(90deg);    
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        display:block;
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
const Setting = styled.div`
    position: fixed;
    top: 0;
    right: -300px;
    background: #fff;
    padding: 30px;
    z-index: 2;
    bottom: 0;
    width: 280px;
    padding-top: 40px;
    transition: all 0.4s ease-in;`
const Head = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid grey;
    padding-bottom: 5%;
    margin-bottom: 20%;`
const S = styled.h3`
    font-weight:700;`
const Headclose = styled.div`
    width:25px;
    &:hover{
        cursor:pointer;
    }`
const Dir = styled.div``
const Dirh = styled.h4`
    margin-bottom: 10%;
    font-weight:700;`
const Side = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 20%;`
const Sideleft = styled.div`
    width:100px;
    height:100px;
    box-shadow:0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    border-radius:10px;
    cursor:pointer;
    padding: 5%;`
const Sideright = styled.div`
    width:100px;
    height:100px;
    box-shadow:0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    border-radius:10px;
    cursor:pointer;
    padding: 5%;`
const Lefttop = styled.div`
    width:100%;
    height:25%;
    background:#b9c1c9;
    margin-left:0;
    margin-right:auto;
    border-radius:5px;
    margin-bottom: 15%;`
const Leftbottom = styled.div`
    width:75%;
    height:25%;
    background:#b9c1c9;
    margin-left:0;
    margin-right:auto;
    border-radius:5px;`
const Righttop = styled.div`
    width:100%;
    height:25%;
    background:#b9c1c9;
    margin-right:0;
    margin-left:auto;
    border-radius:5px;
    margin-bottom: 15%;`
const Rightbottom = styled.div`
    width:75%;
    height:25%;
    background:#b9c1c9;
    margin-right:0;
    margin-left:auto;
    border-radius:5px;`
const Color = styled.div``
const Colorh = styled.h4`
    font-weight:700;
    margin-bottom: 10%;`
const Colordiv = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;`
const Colors = styled.div`
    width:65px;
    height:65px;
    box-shadow:0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    border-radius:10px;
    cursor:pointer;
    padding: 5%;
    margin-bottom:10%;
    display:flex;`
const Col = styled.div`
    width:25px;
    height:25px;
    border-radius: 50% 0% 50% 0;
    margin:auto;`


function active(){
    var left = document.getElementById("left")
    var closediv = document.getElementById("closediv")

    left.classList.add("nav_active_left");
    left.classList.remove("nav_inactive_left");
    closediv.classList.add("closediv_active");
    closediv.classList.remove("closediv_inactive");

}

function inactive(){
    var left = document.getElementById("left")
    var closediv = document.getElementById("closediv")

    left.classList.add("nav_inactive_left");
    left.classList.remove("nav_active_left");
    closediv.classList.add("closediv_inactive");
    closediv.classList.remove("closediv_active");
}
function set(){
    var div = document.getElementById("settings_div");

    div.classList.add("active");
}
function setinactive(){
    var div = document.getElementById("settings_div");

    div.classList.remove("active");
}

function left(){
    var div = document.getElementById("settings_div");

    div.classList.remove("right");
    div.classList.add("left");
}
function right(){
    var div = document.getElementById("settings_div");

    div.classList.remove("left");
    div.classList.add("right");
}
