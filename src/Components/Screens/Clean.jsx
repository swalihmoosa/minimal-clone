import React from 'react'
import clean_1 from "../Images/home/clean-1.png"
import clean_2 from "../Images/home/clean-2.png"
import clean_3 from "../Images/home/clean-3.png"
import clean_4 from "../Images/home/clean-4.png"
import clean_5 from "../Images/home/clean-5.png"
import clean_6 from "../Images/home/clean-6.png"
import clean_7 from "../Images/home/clean-7.png"
import clean_8 from "../Images/home/clean-8.png"
import clean_9 from "../Images/home/clean-9.png"
import clean_10 from "../Images/home/clean-10.png"
import styled from 'styled-components'

export default function Clean() {
    return (
        <Cleansec>
            <section className="wrapper">
                <H5>
                    CLEAN & CLEAR
                </H5>
                <H6>
                    Beautiful, modern and clean use interfaces
                </H6>
                <Div>
                    <One>
                        <img src={clean_1} alt="Clean" />
                    </One>
                    <Two>
                        <img src={clean_2} alt="Clean" />
                    </Two>
                    <Three>
                        <img src={clean_3} alt="Clean" />
                    </Three>
                    <Four>
                        <img src={clean_4} alt="Clean" />
                    </Four>
                    <Five>
                        <img src={clean_5} alt="Clean" />
                    </Five>
                    <Six>
                        <img src={clean_6} alt="Clean" />
                    </Six>
                    <Seven>
                        <img src={clean_7} alt="Clean" />
                    </Seven>
                    <Eight>
                        <img src={clean_8} alt="Clean" />
                    </Eight>
                    <Nine>
                        <img src={clean_9} alt="Clean" />
                    </Nine>
                    <Ten>
                        <img src={clean_10} alt="Clean" />
                    </Ten>
                </Div>
            </section>
        </Cleansec>
    )
}
const Cleansec = styled.section`
    padding: 0% 0 65%;`
const H5 = styled.h5`
    font-size: 20px;
    color: #85888b;
    font-weight: 700;
    margin-bottom: 2%;`
const H6 = styled.h6`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2%;
    width: 40%;`
const Div = styled.div`
    position: relative;`
const One = styled.div`
    position: absolute;
    top: 0;`
const Two = styled.div`
    position: absolute;
    top: 0;`
const Three = styled.div`
    position: absolute;
    top: 0;`
const Four = styled.div`
    position: absolute;
    top: 0;`
const Five = styled.div`
    position: absolute;
    top: 0;`
const Six = styled.div`
    position: absolute;
    top: 0;`
const Seven = styled.div`
    position: absolute;
    top: 0;`
const Eight = styled.div`
    position: absolute;
    top: 0;`
const Nine = styled.div`
    position: absolute;
    top: 0;`
const Ten = styled.div`
    position: absolute;
    top: 0;`