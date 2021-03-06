import Formsy from 'formsy-react-2';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { PasswordRule } from './../../Rules/PasswordRule';
import { FormInput } from './../../Components/Form/FormInput';
import { LinkedinButton } from './../../Components/Social/Linkedin';
import { Row, Col, Button, FormGroup, Label, Container, Card, CardBody } from 'reactstrap';

export class LoginPage extends Component {

    /**
     * Constructor method
     *
     */
    constructor() {
        super();
        this.state = {
            canSubmit: false
        }
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
    }

    /**
     * Disable the submit button
     *
     */
    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    /**
     * Enable the submit button
     *
     */
    enableButton() {
        this.setState({
            canSubmit: true
        });
    }

    /**
     * Render the Login Page
     *
     */
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" md={{ size: 8, offset: 2 }} className="pt-5">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col className="d-none d-sm-block pt-4">
                                        <img width="100%" src="/login_person.png" />
                                    </Col>
                                    <Col>
                                        <h2 className="text-center page-title">Bem vindo de volta!</h2>
                                        <p className="text-wrapper">
                                            Para se manter conectado conosco, favor inserir
                                            seu endereço de Email e sua Senha
                    </p>

                                        <LinkedinButton></LinkedinButton>

                                        <div className="divider">
                                            <span>OU</span>
                                        </div>

                                        <Formsy.Form onValid={this.enableButton} onInvalid={this.disableButton} >

                                            {/* INPUT DE EMAIL */}
                                            <FormGroup>
                                                <Label for="email" className="mb-0">Email</Label>
                                                <FormInput validations={{
                                                    isEmail: true
                                                }}
                                                    validationErrors={{
                                                        isEmail: 'O e-mail digitado é inválido'
                                                    }}
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="email@exemplo.com" />
                                            </FormGroup>

                                            {/* INPUT DE SENHA */}
                                            <FormGroup row>
                                                <Col>
                                                    <Label for="password" className="mb-0">Senha</Label>
                                                    <FormInput type="password"
                                                        name="password"
                                                        validations={{
                                                            passwordRule: PasswordRule
                                                        }}
                                                        id="password"
                                                        className="form-control" />
                                                    <Link className="link float-right" to="/recoverypassword">
                                                        Esqueceu sua senha
                                </Link>
                                                </Col>
                                            </FormGroup>

                                            <Row>
                                                <Col>
                                                    <Link className="link" to="/signup">Eu não tenho uma conta!</Link>
                                                </Col>
                                                <Col className="text-right">
                                                    <Button disabled={!this.state.canSubmit}
                                                        className="px-4"
                                                        color="primary">Entrar</Button>
                                                </Col>
                                            </Row>

                                        </Formsy.Form>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

// End of file
