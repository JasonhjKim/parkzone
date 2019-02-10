import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
// import Logo from './assets/PPP.png';
import styled from 'styled-components/native';

export default class Landing extends React.Component {
    render() {
        console.log (this.props)
        return (
            <ParentContainer>
                <ChildContainer>
                    {/* <Image source={ Logo } style={ styles.image }/> */}
                    <LoginButton>
                        <Button
                            title="Login"
                            onPress={() => this.props.navigation.navigate("Login")}
                            color= '#FCFCFC'
                        />
                    </LoginButton>
                    <RegisterButton>
                        <Button 
                            title="Register"
                            onPress={() => this.props.navigation.navigate("Register")}
                        />
                    </RegisterButton>
                </ChildContainer>
            </ParentContainer>
        );
    }
}

const ParentContainer = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`
const ChildContainer = styled.View`
    width: 100%;
    align-items:center;
    display: flex;
    flex-direction: column;
    margin: 10%;
`
const LoginButton = styled.TouchableHighlight`
    border-color: #398FFF;
    border-radius: 8px;
    border-width: 2px;
    margin: 20px;
    width: 70%;
    padding: 2px;
`
// font-color: #398FFF;
const RegisterButton = styled.TouchableHighlight`
    border-color: #398FFF;
    border-radius: 8px;
    border-width: 2px;
    margin: 2px;
    width: 70%;
`

// const Logo = require ('../assets/PPP.png');
// const LogoImage = styled.Image`
    // width: 50%;
    // height: 50%;
// `