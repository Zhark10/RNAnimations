import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { styles } from './HomeScreen.style';

type IHomeScreenProps = {}
type IHomeScreenState = {}

class HomeScreen extends Component<IHomeScreenProps, IHomeScreenState> {
    spinValue = new Animated.Value(0);

    componentDidMount() {
        this.spin()
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
          return (
            <View style={styles.container}>
              <Animated.Image
                style={{
                  width: 200,
                  height: 200,
                  transform: [{rotate: spin}] }}
                  source={{uri: 'https://svgsilh.com/png-512/1781540-ff5722.png'}}
              />
            </View>
          )
    }
}

export default HomeScreen;