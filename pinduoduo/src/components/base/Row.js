import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

class Row extends Component {
    static propTypes = {
		type: PropTypes.oneOf(['row', 'column']),
	};
	static defaultProps = {
		type: 'row', // row column
	}
    render() {
        const { child, type, style={} } = this.props;
        const _style = {
            flexDirection: type,
        };
        return (
            <View style={[RowStyle.row, _style, style]}>
                {child}
            </View>
        );
    }
}

const RowStyle = StyleSheet.create({
    row: {
        display: 'flex',
    },
});

export default Row;