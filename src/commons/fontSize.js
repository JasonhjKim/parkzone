/**
 * Few text component that are same size as html { h1, h2, h3, h4, h5, h6, p, t}
 * 
 * Example
 * 
 * import { H1, P, T } from './fontSize.js;
 * 
 * <H1 {...props}></H1>
 */

import { Dimensions, Platform, PixelRatio } from 'react-native';
import styled from 'styled-components/native';

import { primary } from './color';

function calculateSize(size) {
    const { width: device_width, height: device_height } = Dimensions.get('window');
    const BASE_SIZE = 320;
    const scale = device_width / BASE_SIZE;
    const newSize = size * scale


    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

const defaultText = styled.Text`
    font-family: roboto;
    color: ${props => props.color ? props.color : primary};
`;

//H1
export const H1 = styled(defaultText)`
    font-size: ${calculateSize(40)};
    font-weight: bold;
`;

//Recommend using h2 or h3 for headings
export const H2 = styled(defaultText)`
    font-size: ${calculateSize(36)};
    font-weight: bold;
`;

export const H3 = styled(defaultText)`
    font-size: ${calculateSize(32)};
    font-weight: bold;
`;

//Recommend using h4 for subheadings
export const H4 = styled(defaultText)`
    font-size: ${calculateSize(28)};
    font-weight: bold;
`;

export const H5 = styled(defaultText)`
    font-size: ${calculateSize(24)};
    font-weight: bold;
`;

export const H6 = styled(defaultText)`
    font-size: ${calculateSize(20)};
    font-weight: bold;
`;

export const B = styled(defaultText)`
    font-size: ${calculateSize(16)};
`;

//Regular Text => You can use this for most of your basic texts
export const T = styled(defaultText)`
    font-size: ${calculateSize(14)};
`;

export const P = styled(defaultText)`
    font-size: ${calculateSize(12)};
`;

export const TextInput = styled.TextInput`
    font-size: ${calculateSize(14)};
    font-family: roboto;
    color: ${props => props.color ? props.color : primary};
`;