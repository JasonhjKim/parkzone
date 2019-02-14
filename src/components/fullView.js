import React, { Component } from 'react';
import styled from 'styled-components';

export default class FullView extends Component {
  render() {
    return (
      <StyledFullView { ...this.props } />
    )
  }
}

const StyledFullView = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: column;
`