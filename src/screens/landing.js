import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Logo from '../assets/PPP.png';
import styled from 'styled-components/native';
import FullView from '../components/fullView';
import StyledButton from '../components/button';
import { View, Text, Button } from 'react-native';
import { H1 } from '../commons/fontSize';

export default class Landing extends React.Component {
    render() {
        console.log ( this.props )
        return (
            <StyledFullView>
                {/* <LogoContainer> */}
                        {/* <Image source={Logo} style={StyleSheet.image}/> */}
                {/* </LogoContainer> */}
                <ChildContainer>
                    <StyledButton
                        title = "Login"
                        onPress ={() => this.props.navigation.navigate( "Login" )}
                        theme = 'secondary'
                    />
                    <StyledButton 
                        title = "Register"
                        onPress ={() => this.props.navigation.navigate( "Register" )}
                    />
                </ChildContainer>
            </StyledFullView>
        );
    }
}

const StyledFullView = styled( FullView )`
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`
const ChildContainer = styled.View`
    width: auto;
    height:115px;
    flex-direction: column;
    justify-content: space-between;
    margin: 325px;
`
// const LogoContainer = styled.View`
    // width:100px;
    // height: 100px;
    // margin: 15px 0;
    // flex-direction: column;
// `



// const Logo = require ('../assets/PPP.png');
// const LogoImage = styled.Image`
    // width: 50%;
    // height: 50%;
// `