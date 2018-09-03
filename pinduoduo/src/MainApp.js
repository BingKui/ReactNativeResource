import React, { Component } from 'react';
import { TabBarIOS, View, Text } from 'react-native';

import Icon from './components/Icon';

const Child = <Text> shouye </Text>;

const TabBarData = [{
    title: '首页',
    icon: require('./assets/icon/home.png'),
    selectIcon: require('./assets/icon/home_active.png'),
    children: Child,
}, {
    title: '精选',
    icon: require('./assets/icon/hot.png'),
    selectIcon: require('./assets/icon/hot_active.png'),
    children: Child,
}, {
    title: '搜索',
    icon: require('./assets/icon/search.png'),
    selectIcon: require('./assets/icon/search_active.png'),
    children: Child,
}, {
    title: '聊天',
    icon: require('./assets/icon/chat.png'),
    selectIcon: require('./assets/icon/chat_active.png'),
    children: Child,
}, {
    title: '我的',
    icon: require('./assets/icon/user.png'),
    selectIcon: require('./assets/icon/user_active.png'),
    children: Child,
}];

class MainApp extends Component {
    state = {
        selectedIndex: 0,
    };
    
    changeTabBar = (index) => {
        this.setState({
            selectedIndex: index,
        });
    }

    renderTabbarItem = (item, index) => {
        const { selectedIndex } = this.state;
        return (
            <TabBarIOS.Item
                    title={item.title}
                    icon={item.icon}
                    key={item.title}
                    selectIcon={item.selectIcon}
                    onPress={() => this.changeTabBar(index)}
                    selected={selectedIndex == index}
                >
                {item.children}
            </TabBarIOS.Item>
        );
    }

    render() {
        return (
            <TabBarIOS
                style={{width: '100%'}}
                tintColor="#E82C2A"
                translucent={true}
                unselectTintColor='#333'
            >
                {TabBarData.map((item, index) => this.renderTabbarItem(item, index))}
            </TabBarIOS>
        );
    }
}

export default MainApp;