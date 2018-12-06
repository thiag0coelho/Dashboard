import React from 'react';
import { Row, Col, FormGroup, CustomInput, Input, Form } from 'reactstrap';

const body = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '10px',
    marginRight: '0px',
}

const Search = ({ children }) => (
    <Form className="form">
        <Row style={body}>
            <Col xs={12} md={5}>
                <FormGroup>
                    <CustomInput id="chkPeriodo1" inline type="radio" name="periodo" label="dia" />
                    <CustomInput id="chkPeriodo2" inline type="radio" name="periodo" label="semana" />
                    <CustomInput id="chkPeriodo3" inline type="radio" name="periodo" label="mês" />
                    <CustomInput id="chkPeriodo4" inline type="radio" name="periodo" label="ano" />
                </FormGroup>
            </Col>

            <Col xs={4} md={2}>
                <CustomInput type="checkbox" id="exampleCustomInline" inline label="comparar" />
            </Col>

            <Col xs={8} md={2} >
                <Input type="text" />
            </Col>

            <Col xs={12} md={2}>
                <Input className="pesquisar" type="submit" value="consultar" title="consultar" alt="consultar" />
            </Col>
        </Row>
        <hr />
    </Form>
)

export default Search;
