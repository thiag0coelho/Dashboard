import React from 'react';
import { Radio, FormGroup, Checkbox, Row, Col, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

const body = {
    paddingTop: '5px',
    borderBottom: '1px solid #dadada',
    backgroundColor: '#fff',
}

const defaultComponentSize =
{
    maxHeight: '32px',
    minHeight: '32px',
}

const formStyle = {
    padding: '4px 7px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '0.85em',
    maxHeight: '32px',
    minHeight: '32px',
    margin: '0px 18px 0px 0px'
};

export default ({ children }) => (
    <Row className="center-block" style={body}>
        <Col xs={12} md={3} style={formStyle}>
            <FormGroup >
                <Radio name="periodo" inline={true}>dia</Radio>{' '}
                <Radio name="periodo" inline={true}>semana</Radio>{' '}
                <Radio name="periodo" inline={true}>mês</Radio>{' '}
                <Radio name="periodo" inline={true}>ano</Radio>
            </FormGroup>
        </Col>

        <Col xs={6} md={2} style={formStyle}>
            <FormGroup >
                <Checkbox inline={true}>comparar</Checkbox>
            </FormGroup>
        </Col>

        <Col xs={5} md={2}>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" style={defaultComponentSize} />
                    <InputGroup.Addon>
                        <Glyphicon glyph="calendar" />
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
        </Col>

        <Col xs={4} md={3}>
            <FormGroup>
                <FormControl
                    className="pesquisar"
                    type="submit"
                    value="consultar"
                    title="consultar"
                    alt="consultar"
                    style={defaultComponentSize} />
            </FormGroup>
        </Col>
    </Row>
)