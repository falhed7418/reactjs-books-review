import React, { Component } from 'react';
import styled from 'styled-components';
import {Col} from 'antd';
import { isEmail, isValidation } from "../components/Validation";


const Title = styled.div`
text-align: center;
font-family: Roboto;
font-size: 27px;
font-weight: bold;
margin-top: 50px;
margin-bottom: 50px;
text-transform: uppercase;
`;

const Box = styled.div`
margin-bottom:20px;
`;

const Label = styled.label`
text-align: left;
font-family: Roboto;
font-size: 12px;
display: block;
font-weight: bold;
margin-left:35px;
margin-bottom:10px;
`;

const EmailInput = styled.input`
font-size: 12px;
width:320px;
margin-left:35px;
`;

const PasswordInput = styled.input`
font-size: 12px;
width:320px;
margin-left:35px;
`;

const SiginButton = styled.button`
 background: transparent;
 border-radius: 3px;
 border: 2px solid palevioletred;
 color: palevioletred;
 margin: 0 5em;
 padding: 0.25em 1em;
 background: palevioletred;
 margin-left:35px;
 color: white;
`;

const Underline = styled.div`
    width:320px;
    height: 1px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom:15px;
    background: #9A9A9A;
   `;

/*const HR = styled.hr`
width:320px;
margin-left:35px;
`;*/

const LabelSmall = styled.label`
text-align: left;
font-family: Roboto;
font-size: 14px;
margin-left:35px;
margin-bottom:10px;
`;

const SigUpButton = styled.button`
 background: transparent;
 border-radius: 3px;
 border: 2px solid #3D7E9A;
 margin: 0 5em;
 padding: 0.25em 1em;
 background: #F3F7F8;
 margin-left:35px;
 color: #3D7E9A;
`;

const RecoverButton = styled.button`
 background: transparent;
 border-radius: 3px;
 border: 2px solid #3D7E9A;
 margin: 0 5em;
 padding: 0.25em 1em;
 background: #F3F7F8;
 margin-left:35px;
 color: #3D7E9A;
`;

export default class SigninForm extends Component {

    _emailInput = React.createRef();
    _passwordInput = React.createRef();

    state = {
        email: "",
        password: "",
        emailError: ""
    };

    

    onTextChange = e => {
        const {target: { name, value }} = e;
        this.setState({
          [name]: value
        });
      };

      onTextValidation = () => {
        if (!isValidation(this.state.email).success) {
          this.setState({ emailError: isValidation(this.state.email).error });
          return false;
        }
        return true;
      };

    render() {
        return (
        <Col
            span={12}
            style={{verticalAlign: 'top',}}>
        
            <Title>
                LOG IN. START SEARCHING.
            </Title>
        
            <Box>
                <Label>
                    Email
                </Label>
                <EmailInput
                    name="email"
                    type="text"
                    ref={this._emailInput}
                    placeholder="Input Email"
                    onChange={this.onTextChange}
                />
            </Box>
        
            <Box>
                <Label>
                    Password
                </Label>
                <PasswordInput
                    name="password"
                    type="password"
                    ref={this._passwordInput}
                    placeholder="Input Password"
                />
            </Box>

            <Box>
                <SiginButton>SIGN IN</SiginButton>
            </Box>
            
            <Underline/>
            
            <Box>
                <LabelSmall>
                  Need to create an account?  
                </LabelSmall>
                <SigUpButton>SIGN UP</SigUpButton>
            </Box>

            <Box>
                <LabelSmall>
                  Forgot your password
                </LabelSmall>
                <RecoverButton>RECOVERY</RecoverButton>
            </Box>

        </Col>
        );
    }
}