/**
 * Few text component that are same size as html { h1, h2, h3, h4, h5, h6, p, t}
 * 
 * Example
 * 
 * import { H1, P, T } from './fontSize.js;
 * 
 * <H1 {...props}></H1>
 */

import { Dimensions, Platform, PixelRatio, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

function calculateSize(size) {
    const { width: device_width, height: device_height} =  Dimensions.get('window');
    const BASE_SIZE = 320;
    const scale = device_width / BASE_SIZE;
    const newSize = size * scale


    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}


//H1 
export const H1 = (props) => (
    <Text {...props} style={{fontSize: calculateSize(40), fontWeight: "bold", color: props.color ? props.color  : "black" }}></Text>
)

//Recommend using h2 or h3 for headings
export const H2 = (props) => (
    <Text {...props} style={{fontSize: calculateSize(28), fontWeight: "bold", color: props.color ? props.color  : "black" }}></Text>
)

export const H3 = (props) => (
    <Text {...props} style={{fontSize: calculateSize(22), fontWeight: "bold", color: props.color ? props.color  : "black" }}></Text>
)

//Recommend using h4 for subheadings
export const H4 = (props) => (
    <Text {...props} style={{fontSize: calculateSize(20), fontWeight: "bold", color: props.color ? props.color  : "black" }}></Text>    
)

export const H5 = (props) => (
    <Text {...props} style={{fontSize: calculateSize(18), fontWeight: "bold", color: props.color ? props.color  : "black" }}></Text>    
)

export const H6 = (props) => (
    <Text {...props} style={{fontSize: calculateSize(16), fontWeight: "bold", color: props.color ? props.color  : "black" }}></Text>    
)

//Regular Text => You can use this for most of your basic texts
export const T = (props) => (
    <Text {...props} style={{fontSize: calculateSize(16), color: props.color ? props.color : "black" }}></Text>   
)

export const P = (props) => (
    <Text {...props} style={{fontSize: calculateSize(12), color: props.color ? props.color : "black" }}></Text>