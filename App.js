import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    InitialSearch: HomeScreen,
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  }, {
    initialRouteName: 'InitialSearch',
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);
