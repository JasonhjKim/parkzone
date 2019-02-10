import React, { Component } from 'react';
import styled from 'styled-components/native';

import FullView from '../components/fullView';
import TextInput from '../components/textInput';
import Button from '../components/button';
import primary from '../commons/color';
export default class Login extends Component {
    render() {
        return(
            <StyledFullView>
                <InternalView>
                    <Title color={ primary }>Login</Title>
                    <TextInputContainer>
                        <TextInput title="Email" />
                        <TextInput title="Password" />
                    </TextInputContainer>
                    <Button title='Login' onPress={ () => this.props.navigation.navigate("Register")}/>
                </InternalView>
            </StyledFullView>
        )
    }
}

const StyledFullView = styled(FullView)`
    align-items: center;
    justify-content: center;
`;

const InternalView = styled.View`
    width: auto;
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.Text`
    font-size: 45px;
    color: green;
`;

const TextInputContainer = styled.View`
    height: 180px;
    justify-content: space-between;
`;