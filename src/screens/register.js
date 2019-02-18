import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import FullView from '../components/fullView';
import StyledButton from '../components/button';
import TextInput from '../components/textInput';
import { primary } from '../commons/color';

export default class Register extends React.Component {
    constructor(props) {
        // define initial state of component; can bind event that occurs in component in constructor ex.this.state or this.handleEvent
        super(props)
        this.state = {
            // only use this.state in constructor rather than this.setState
            // represents what's currently on the screen 
            email: '',
            password: '',
            reenter: '',
        }
    }
    
    render() {
        console.log ( this.props )        
        return (
            <StyledFullView>
                <TitleContainer>
                    <TitleText>Register</TitleText>
                </TitleContainer>
                <ChildContainer>
                    <TextContainer>
                        <TextInput 
                            title = "Email"
                            value = { this.state.email } 
                            // value sent to the payload 
                            onChangeText = { this.onChangeEmail }
                            // something has been changed
                        />
                        <TextInput
                            title = "Password"
                            value = { this.state.password }
                            onChangeText = { this.onChangeEmail }
                        />
                        <TextInput 
                            title = "Re-enter Password"
                            value = { this.state.reenter }
                            onChangeText = {this.onChangeEmail }
                        />
                    </TextContainer>
                    <StyledButton
                        title = "Register" 
                        onPress = {() => this.props.navigation.navigate( "Landing" )}
                    />
                </ChildContainer>
            </StyledFullView>
        )
    }

        onChangeEmail = ( email ) => {
            this.setState ({ email })
        // onChange occurs when value of element has/will be changed
        // this.setState is an object that will eventually be merged into components current state
    }

        onChangePassword = ( password ) => {
            this.setState ({ password })
    }
        onChangePassword = ( reenter ) => {
            this.setState ({ reenter })
    }

    // register = () => {
        // const payload = {
            // password: this.state.password,
            // reenter: this.state.reenter,
        // }
        // this.props.registerUser(payload)
    // }
    // this is where everything combines together into a payload, if there is valid between password and reenter then it will finish the register
}

const StyledFullView = styled( FullView )`
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const TitleContainer = styled.View`
    width: 305px;
    margin: 15px 0;
    flex-direction: column;
`

const TitleText = styled.Text`
    font: 45px roboto;
    color: ${ primary };
`

const ChildContainer = styled.View`
    width: auto;
    height: 260px;
    flex-direction: column;
    justify-content: space-between;
`

const TextContainer = styled.View`
    height: 140px;
    justify-content: space-between;
`

