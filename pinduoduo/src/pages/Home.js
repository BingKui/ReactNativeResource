import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TestNav from './TextNav';

class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    gotoNextPress = () => {
        const { navigate } = this.props.navigation;
        navigate('TestNav',{ user: 'Lucy' })
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={{marginTop: 100, backgroundColor: '#eee',}}
                    onPress={this.gotoNextPress}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;