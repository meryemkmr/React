import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import  './styles.css'
import Key from './Key'


export class Calculator extends Component {
    render() {
        return (
            <>
                <Row>
                    <div className ="window">
                    0
                    </div>
                </Row>
                <Row>
                <Key num ="AC" bgc= {true}/>
                <Key num ="+/-" bgc= {true} />
                <Key num ="%" bgc= {true}/>
                <Key num ="x" bgc= {true}/>
                </Row>
                <Row>
                <Key num ="7" />
                <Key num ="8" />
                <Key num ="9" />
                <Key num ="x" bgc= {true}/>
                </Row>
                <Row>
                <Key num ="4" />
                <Key num ="5" />
                <Key num ="6" />
                <Key num ="-" bgc= {true}/>
                </Row>
                <Row>
                <Key num ="1" />
                <Key num ="2" />
                <Key num ="3" />
                <Key num ="+" bgc= {true}/>
                </Row>
                <Row>
                <Key num ="0" zero={true}/>
                <Key num ="." />
                <Key num ="=" bgc= {true}/>
                
                </Row>
            </>
        )
    }
}

export default Calculator
