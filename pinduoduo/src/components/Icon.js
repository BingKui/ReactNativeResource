import React, { Component } from 'react';

import { Text } from 'react-native';

const FontMap = {
    'e658': '\ue658',
};

class Icon extends Component {
    static defaultProps = {
        size: 'normal',  // 'small'、'large' number
        color: '#707070',
        name: '',
    };
    render() {
        const { name, size, color } = this.props;
        const IconFontStyle = {
            fontSize: 20,
            color: '#707070',
            fontFamily: 'Iconfont'
        };
        return (
            <Text
                style={IconFontStyle}
            >{FontMap[name]}</Text>
        );
    }
}

export default Icon;