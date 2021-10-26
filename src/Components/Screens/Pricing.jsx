import React from 'react'
import styled from 'styled-components'
import check from "../Images/home/check-solid.svg"
import one from "../Images/home/ic_js.svg"
import two from "../Images/home/ic_figma.svg"
import three from "../Images/home/ic_sketch.svg"
import four from "../Images/home/ic_ts.svg"
import left from "../Images/icons/chevron-down-solid.svg"

export default function Pricing() {
    return (
        <Pricingsec id="pricing">
            <section className="wrapper" >
                <H5>
                    PRICING PLANS
                </H5>
                <H6>
                    The right plan for your business
                </H6>
                <Choose>
                    Choose the perfect plan for your needs.Always flexible to grow
                </Choose>
                <Ul>
                    <Li>
                        <Licence>
                            LICENCE
                        </Licence>
                        <Standard>
                            Standard
                        </Standard>
                        <Liul>
                            <Lili>
                                <img src={one} alt="Standard" />
                            </Lili>
                        </Liul>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                One end products
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                12 months updates
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                6 months of support
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Javascript version
                            </P>
                        </Div>
                        <Div className="grey">
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Typescript version
                            </P>
                        </Div>
                        <Div className="grey">
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Design resourses
                            </P>
                        </Div>
                        <Div className="grey last">
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Commercial applications
                            </P>
                        </Div>
                        <Learn href="/">
                            Learn More
                            <Arrow>
                                <img src={left} alt="Arrow" />
                            </Arrow>
                        </Learn>
                        <Plan href="/" className="border">
                            Choose Plan
                        </Plan>
                    </Li>
                    <Li>
                        <Licence>
                            LICENCE
                        </Licence>
                        <Standard>
                            Standard Plus
                        </Standard>
                        <Liul>
                            <Lili>
                                <img src={three} alt="Standard" />
                            </Lili>
                            <Lili>
                                <img src={two} alt="Standard" />
                            </Lili>
                            <Lili>
                                <img src={one} alt="Standard" />
                            </Lili>
                            <Lili>
                                <img src={four} alt="Standard" />
                            </Lili>
                        </Liul>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                One end products
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                12 months updates
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                6 months of support
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Javascript version
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Typescript version
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Design resourses
                            </P>
                        </Div>
                        <Div className="grey last">
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Commercial applications
                            </P>
                        </Div>
                        <Learn href="/">
                            Learn More
                            <Arrow>
                                <img src={left} alt="Arrow" />
                            </Arrow>
                        </Learn>
                        <Plan className="button" href="/">
                            Choose Plan
                        </Plan>
                    </Li>
                    <Li>
                        <Licence>
                            LICENCE
                        </Licence>
                        <Standard>
                            Extended
                        </Standard>
                        <Liul>
                            <Lili>
                                <img src={three} alt="Standard" />
                            </Lili>
                            <Lili>
                                <img src={two} alt="Standard" />
                            </Lili>
                            <Lili>
                                <img src={one} alt="Standard" />
                            </Lili>
                            <Lili>
                                <img src={four} alt="Standard" />
                            </Lili>
                        </Liul>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                One end products
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                12 months updates
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                6 months of support
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Javascript version
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Typescript version
                            </P>
                        </Div>
                        <Div>
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Design resourses
                            </P>
                        </Div>
                        <Div className="last">
                            <Tick>
                                <img src={check} alt="Tick" />
                            </Tick>
                            <P>
                                Commercial applications
                            </P>
                        </Div>
                        <Learn href="/">
                            Learn More
                            <Arrow>
                                <img src={left} alt="Arrow" />
                            </Arrow>
                        </Learn>
                        <Plan href="/" className="border">
                            Choose Plan
                        </Plan>
                    </Li>
                </Ul>
                <Still>
                    Still have questions?
                </Still>
                <Describe>
                    Please describe Your case to recieve the most accurate advice.
                </Describe>
                <Contact href="/" className="button">
                    Contact Us
                </Contact>
            </section>
        </Pricingsec>
    )
}
const Pricingsec = styled.section`
    padding: 8% 0;
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
const H5 = styled.h5`
    font-size: 20px;
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;
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
const H6 = styled.h6`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
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
const Choose = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
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
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10%;
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
const Li = styled.li`
    width: 30%;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    padding: 5% 3%;
    border-radius: 20px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 47%;
        &:last-child{
            margin:5% auto 0;
        }
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width:75%;
        margin: 0 auto 5%;
        &:last-child{
            margin:0 auto 5%;
        }
    }
    @media all and (max-width: 480px){
        width: 95%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Licence = styled.h5`
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
        text-align:center;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Standard = styled.h6`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        text-align:center;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Liul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10%;
    width: 60%;
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
const Lili = styled.li`
    width: 22%;`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    &.last{
        margin-bottom: 15%;
    }
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
const Tick = styled.div`
    width: 25px;
    img{
        filter: invert(1) sepia(1) saturate(15) hue-rotate(
            60deg
            );
    }
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
    width: 85%;`
const Learn = styled.a`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-left: auto;
    margin-right: 0;
    align-items: center;
    margin-bottom: 12%;
    &:hover{
        text-decoration: underline;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 50%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Arrow = styled.div`
    width: 15px;
    transform: rotate(-90deg);
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
const Plan = styled.a`
    padding: 15px 25px;
    display: block;
    border-radius: 15px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    &.border{
        color: #4eac56;
        border:2px solid #4eac56;
    }
    &.button{
        background: #4eac56;
        color: #fff;
    }
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
const Still = styled.h5`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
    text-align: center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        margin-bottom: 5%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Describe = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        margin-bottom: 5%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Contact = styled.a`
    width: 20%;
    background: #4eac56;
    padding: 15px 25px;
    border-radius: 15px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    display: block;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 25%;
    }
    @media all and (max-width: 768px){
        width: 30%;
    }
    @media all and (max-width: 640px){
        width: 35%;
    }
    @media all and (max-width: 480px){
        width: 50%;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`