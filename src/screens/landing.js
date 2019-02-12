import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
// import Logo from './assets/PPP.png';
import styled from 'styled-components/native';
import { primary } from '../commons/color';
import { white } from '../commons/color';
import FullView from '../components/fullView';
import StyledButton from '../components/button';

export default class Landing extends React.Component {
    render() {
        console.log (this.props)
        return (
            <StyledFullView>
                <ChildContainer>
                    {/* <Image source={ Logo } style={ styles.image }/> */}
                    <StyledButton
                        title= "Login"
                        onPress={() => this.props.navigation.navigate("Login")}
                    />
                    <StyledButton 
                        title= "Register"
                        onPress={() => this.props.navigation.navigate("Register")}
                        theme= 'secondary'
                    />
                </ChildContainer>
            </StyledFullView>
        );
    }
}

const StyledFullView = styled(FullView)`
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

// const Logo = require ('../assets/PPP.png');
// const LogoImage = styled.Image`
    // width: 50%;
    // height: 50%;
// `