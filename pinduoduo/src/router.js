import {
    createStackNavigator
} from 'react-navigation';

import MainApp from './MainApp';
import TestNav from './pages/TextNav';

const App = createStackNavigator({
    MainApp: {
        screen: MainApp
    },
    TestNav: {
        screen: TestNav
    },
});

export default App;