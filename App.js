import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    ListScreen: ListScreen
  },
  {
    initialRouteName: 'ListScreen',
    defaultNavigationOptions: {
      title: 'My awesome app' // Name of my app or the stack
    }
  }
);

export default createAppContainer(navigator);
