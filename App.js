

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '/Users/ataesaggarwal/code/Crystal/screens/HomeScreen.js';
import AddToDatabase from '/Users/ataesaggarwal/code/Crystal/screens/AddToDatabase.js';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Database: AddToDatabase,
}, 
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerShown: false 
  }
});

export default createAppContainer(navigator);


