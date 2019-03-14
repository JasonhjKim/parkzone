import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, Polygon } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Dimensions, Platform, PixelRatio, PanResponder, ActivityIndicator } from 'react-native';
import { red, green, yellow, primary } from '../commons/color'
import axios from 'axios';
import SphericalMercator from '@mapbox/sphericalmercator';
import _ from 'underscore';

const { width, height } = Dimensions.get('window');
export default class MapScreen extends Component {
    state = {
        points: [],
        region: {
            latitude: 49.249149,
            longitude: -123.112590,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007
        },
        intersections:[],
        isInterpolated: false,
        interpolatedPoints: [],
        bounds: {},
        selectedCoordinate: {},
        fsc: {},
        ssc: {},
        loading: false
    }

    componentDidMount() {
        // this.getInterpolatedPoints()
        // this.getIntersectionPoints()
        // this.setState({
        //     region: {
        //         latitude: 49.249149,
        //         longitude: -123.112590,
        //         latitudeDelta: this.props.DELTA,
        //         longitudeDelta: this.props.DELTA
        //     }
        // })
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (event, gestureState) => true
        })
    }

    getInterpolatedPoints() {
        const { fsc, ssc } = this.state
        axios.get(`https://roads.googleapis.com/v1/snapToRoads?path=${fsc.latitude},${fsc.longitude}|${ssc.latitude},${ssc.longitude}&interpolate=true&key=`)
            .then((result) => {
                console.log(result);
                return result.data.snappedPoints;
            })
            .then((p) => {
                const parsed = [];
                p.map((point, index) => {
                    parsed.push(point.location);
                })
                return parsed;
            })
            .then((p) => {
                console.log(p);
                const pointA = p[0]
                const pointB = p[1]
                const interpolatedPoints = this.createPointsBetween(pointA, pointB)
                this.setState({ interpolatedPoints: interpolatedPoints })
            })
            .catch(err => console.log(err))
    }

    createPointsBetween(a, b) {
        const { latitude: x1, longitude: y1 } = a;
        const { latitude: x2, longitude: y2 } = b;

        const numOfMarkers = 10
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        const stepX = dx / numOfMarkers;
        const stepY = dy / numOfMarkers;

        var px = x1 + stepX
        var py = y1 + stepY

        const points = [];
        points.push(a);
        for(var i = 0; i < numOfMarkers; i++) {
            points.push({ latitude: px, longitude: py });
            px += stepX
            py += stepY
        }
        points.push(b);
        console.log(points);
        return points;
    }
    
    getZoomLevel() {
        const { latitudeDelta } = this.state.region;
        const { width, height } = Dimensions.get('window');

        return Math.floor(Math.log2((360 * ((width / 256) / latitudeDelta))));
    }

    getRegionBoundaries(zoomLevel) {
        const { latitude, longitude } = this.state.region;
        const { width, height } = Dimensions.get('window');
        const merc = new SphericalMercator();

        const [x,y] = merc.px([longitude, latitude], zoomLevel);
        const xmin = Math.floor(x - width / 2);
        const xmax = xmin + width;
        const ymin = Math.floor(y - height / 2);
        const ymax = ymin + height;

        const [westLongitude, northLatitude] = merc.ll([xmin, ymin], zoomLevel);
        const [eastLongitude, southLatitude] = merc.ll([xmax, ymax], zoomLevel);
        console.log(`w="${westLongitude}" e="${eastLongitude}" n="${northLatitude} s="${southLatitude}"`)
        console.log(latitude, longitude)
        const bounds = {
            northLatitude,
            southLatitude,
            eastLongitude,
            westLongitude,
        }
        this.setState({ bounds })
        // this.getIntersectionWithinBoundingBox(bounds);
        return bounds;
    }

    renderPolygon() {
        const { zoomLevel, bounds } = this.state;
        const { northLatitude, southLatitude, eastLongitude, westLongitude } = bounds;
        console.log()
        return (
            <MapView.Polygon
                coordinates={[
                { latitude: northLatitude, longitude: westLongitude },
                { latitude: northLatitude, longitude: eastLongitude },
                { latitude: southLatitude, longitude: eastLongitude },
                { latitude: southLatitude, longitude: westLongitude }
                ]}
            />
        )
    }
    
    getIntersectionWithinBoundingBox() {
        this.setState({ loading: true })
        const zoomLevel = this.getZoomLevel();
        const { northLatitude, southLatitude, eastLongitude, westLongitude } = this.getRegionBoundaries(zoomLevel);
        this.setState({
            zoomLevel,
            bounds: { 
                northLatitude, 
                southLatitude, 
                eastLongitude, 
                westLongitude 
            }
        })

        axios({
            method: "GET",
            timeout: 10000,
            url: `http://overpass-api.de/api/interpreter?data=[out:json];way["highway"~"^(unclassified|residential|living_street|service|)$"]["junction"!~"roundabout"](${southLatitude},${westLongitude},${northLatitude},${eastLongitude})->.minor;node(w.minor);out;`
        })
            .then(res => res.data.elements)
            .then(res => this.setState({ intersections: res }))
            .then(() => this.setState({ loading: false }))

            .catch((err) => console.log(err.response));
    }

    handleOnPress = (e) => {
        const { fsc, ssc } = this.state;
        const coord = e.nativeEvent.coordinate
        if (!_.isEmpty(fsc) && !_.isEmpty(ssc)) {
            this.setState({
                fsc: coord,
                ssc: {},
                isInterpolated: false
            }, () => console.log(`First coordinate selected: ${fsc.latitude} ${fsc.longitude} `))
            return;
        }

        if (_.isEmpty(fsc) && _.isEmpty(ssc)) {
            this.setState({
                fsc: coord,
                isInterpolated: false
            }, () => console.log(`First coordinate selected: ${fsc.latitude} ${fsc.longitude}`))
            return;
        }

        if (!_.isEmpty(fsc) && _.isEmpty(ssc)) {
            this.setState({
                ssc: coord,
                isInterpolated: true
            }, () => this.getInterpolatedPoints())
            return;
        }
        console.log(`First selected: ${fsc.latitude} ${fsc.longitude}\nSecond selected ${ssc.latitude} ${ssc.longitude}`)

    }

    onRegionChange(region) {
        // const boundingBox = this.getBoundingBox(region);
        console.log("on changed region", region);
        const { latitude, longitude } = region;
        this.setState({
            region: {
                latitude,
                longitude,
                latitudeDelta: this.props.DELTA,
                longitudeDelta: this.props.DELTA
            }
        })
    }

    renderLoadingView() {
        const { loading } = this.state;
        console.log(loading);
        if (loading) {
            return (
                <Loading isHidden={this.state.loading}>
                    <ActivityIndicator size="large" animating={loading}/>
                </Loading>
            )
        }
        return <View style={{width:0, height:0}}></View>
    }

    render() {
        console.log("loading:",this.state.loading)
        return (
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={this.props.region}
                showsUserLocation={true}
                onRegionChange={ this.onRegionChange.bind(this) }
                onRegionChangeComplete={ this.getIntersectionWithinBoundingBox.bind(this) }
            >
            {/* { this.renderLoadingView() } */}
            {/* { this.state.bounds && this.state.zoomLevel && this.renderPolygon() } */}
            { this.state.intersections.length > 0 && this.state.intersections.map((sect, index) => {
                    const coord = { latitude: sect.lat , longitude: sect.lon }
                    const { fsc, ssc } = this.state;
                    return (
                        <Marker 
                            coordinate={ coord }
                            onPress={ this.handleOnPress.bind(this) } 
                            key={ index }
                        >
                            <CustomMarker selected={ coord.latitude === fsc.latitude || coord.latitude === ssc.latitude ? true : false}/>
                        </Marker>
                    )
                })}

                { this.state.interpolatedPoints.length > 0 && this.state.interpolatedPoints.map((points) => 
                    <Marker coordinate={points}>
                        <CustomMarker selected={true}/>
                    </Marker>) }

            </MapView>
        )
    }
}

MapScreen.defaultProps = {
    DELTA: 0.007,
    region: {
        latitude: 49.249149,
        longitude: -123.112590,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007
    }
}

const FullView = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const CustomMarker = styled.View    `
    background-color: ${ props => props.selected ? primary : "transparent" };
    border-radius: 50;
    height: 10px;
    width: 10px;
    border: 1px solid ${ primary };
`

const Loading = styled.View`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: ${ props => props.isHidden ? "-1000000" : "1000000"}
    /* visibility: 
    width: ${ props => props.isHidden ? "0" : "100%"}
    height: ${ props => props.isHidden ? "0" : "100%"} */
`
