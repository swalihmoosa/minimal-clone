import React from 'react'
import styled from 'styled-components'
import one from "../Images/icons/ic_design.svg"
import two from "../Images/icons/ic_code.svg"
import three from "../Images/icons/logo_single.svg"

export default function Helps() {
    return (
        <Helpsec>
            <section className="wrapper">
                <H5>
                    MINIMAL
                </H5>
                <H4>
                    What minimal helps you?
                </H4>
                <Ul>
                    <Li>
                        <Top>
                            <img src={one} alt="Design" />
                        </Top>
                        <Bottom>
                            <H6>
                                UI & UX Design
                            </H6>
                            <P>
                                The set is build on the principles of the atomic design system.It helps you to create projects fastest and easily customised packages for you project.
                            </P>
                        </Bottom>
                    </Li>
                    <Li>
                        <Top>
                            <img src={two} alt="Design" />
                        </Top>
                        <Bottom>
                            <H6>
                                Development
                            </H6>
                            <P>
                                Easy to customise and extend each component,saving you time and money.
                            </P>
                        </Bottom>
                    </Li>
                    <Li>
                        <Top>
                            <img src={three} alt="Design" />
                        </Top>
                        <Bottom>
                            <H6>
                                Branding
                            </H6>
                            <P>
                                Consistent design in colors,fonts...makes brand recognition easily.
                            </P>
                        </Bottom>
                    </Li>
                </Ul>
            </section>
        </Helpsec>
    )
}
const Helpsec = styled.section`
    padding: 8% 0;`
const H5 = styled.h5`
    text-align: center;
    font-size: 20px;
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;`
const H4 = styled.h4`
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 8%;`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;`
const Li = styled.li`
    width: 30%;`
const Top = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 15%;`
const Bottom = styled.div``
const H6 = styled.h6`
    text-align: center;
    margin-bottom: 5%;
    font-size: 20px;
    font-weight: 900;`
const P = styled.p`
    text-align: center;`