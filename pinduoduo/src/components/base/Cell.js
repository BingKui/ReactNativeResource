import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

class Cell extends Component {
    static propTypes = {
		span: PropTypes.number,
	};
	static defaultProps = {
		span: 1,
	}
    render() {
        const { child, span, style={} } = this.props;
        const _style = {
            flex: span,
        };
        return (
            <View style={[_style, style]}>
                {child}
            </View>
        );
    }
}

export default Cell;