import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Icon } from '../base';
class MenuItem extends Component {
    gotoNextPress = () => {
        const nextRoute = {
            
        };
        this.props.navigator.push(nextRoute);
    }
    render() {
        const {} = this.props;
        return (
            <TouchableOpacity
                onPress={this.gotoNextPress}
                style={[]}
            >
                <View style={[]}>
                    
                </View>
            </TouchableOpacity>
        );
    }
}

const MenuItemStyle = StyleSheet.create({
    item: {

    },
});

export default MenuItem;