import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

class TextNav extends Component {
    goBack = () => {
        this.props.navigator.pop();
    }
    render() {
        return (
            <View>
                <Text>这个是测试路由的地址</Text>
                <TouchableOpacity
                    onPress={this.goBack}
                >
                    <Text>返回 Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TextNav;