
import React, { Component } from 'react';

import { Image, StyleSheet } from 'react-native';

class Avatar extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['small', 'normal', 'large']) | PropTypes.number,
        src: PropTypes.string.isRequired,
	};
	static defaultProps = {
        size: 'normal', // row column
        src: '',
    }
    dealSize = (size) => {
        if (typeof(size) === Number) {
            return {
                width: size,
                height: size,
                borderRadius: size / 2,
            };
        }
        return AvatarStyle[size];
    }
    render() {
        const { size, src, style } = this.props;
        return (
            <Image style={[this.dealSize(size), style]} source={src} />
        );
    }
}

const AvatarStyle = StyleSheet.create({
    small: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    normal: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    large: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
});

export default Avatar;