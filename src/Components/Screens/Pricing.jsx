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
        <Pricingsec>
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
                        <Plan href="/">
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
                        <Plan className="bg" href="/">
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
                        <Plan href="/">
                            Choose Plan
                        </Plan>
                    </Li>
                </Ul>
            </section>
        </Pricingsec>
    )
}
const Pricingsec = styled.section`
    padding: 8% 0;`
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
const Choose = styled.p`
    color: #c3c3c3;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 8%;`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;`
const Li = styled.li`
    width: 30%;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    padding: 5% 3%;
    border-radius: 20px;`
const Licence = styled.h5`
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;`
const Standard = styled.h6`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10%;`
const Liul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10%;
    width: 60%;`
const Lili = styled.li`
    width: 22%;`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    &.last{
        margin-bottom: 15%;
    }`
const Tick = styled.div`
    width: 25px;
    img{
        filter: invert(1) sepia(1) saturate(15) hue-rotate(
            60deg
            );
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
    }`
const Arrow = styled.div`
    width: 15px;
    transform: rotate(-90deg);`
const Plan = styled.a`
    padding: 15px 25px;
    display: block;
    border-radius: 15px;
    font-weight: 700;
    text-align: center;
    border:2px solid #4eac56;
    width: 100%;
    color: #4eac56;
    &:hover{
        background: #4eac56;
        color: #fff;
    }
    &.bg{
        background: #4eac56;
        color: #fff;
        &:hover{
            background: #fff;
            color: #4eac56;
        }
    }`