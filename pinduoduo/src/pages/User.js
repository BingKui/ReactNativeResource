import React, { Component } from 'react';

import { View, Text, Image, Button, StyleSheet } from 'react-native';

import { Icon }  from '../components/base';

import Style from '../common/Style';

const avatar = require('../assets/images/user_avatar.png');

class User extends Component {
    render() {
        return (
            <View style={Style.TopBarStyle}>
                <View style={UserStyle.userinfo}>
                    <Image style={UserStyle.avatar} source={avatar} />
                    <View style={UserStyle.info}>
                        <View style={UserStyle.username}>
                            <Text>用户名</Text>
                            <Icon name="wechat" size="small" color="#21B101" />
                        </View>
                        <View style={UserStyle.btns}>
                            <View style={UserStyle.btn}>
                                <Icon name="pindanqia" size="10" color="#E02E24" />
                                <Button style={UserStyle.btnText} title="拼单卡收藏馆" color="#333" />
                            </View>
                            <View style={UserStyle.btn}>
                                <Icon name="pindanqia" size="10" color="#E02E24" />
                                <Button style={UserStyle.btnText} title="今日满返" color="#333" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const UserStyle = StyleSheet.create({
    userinfo: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#eee',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    username: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 30,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    btnText: {
        fontSize: 10,
    },
});

export default User;