import { Text, SafeAeSheet, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Getstart from './pages/Getstart'
import Splash from './pages/Splashscreen'
import Login from './pages/Login'
import Register from './pages/register'
import Home from './pages/Homescreen'
// or 
import AssetExample from './pages/AssetExample';
const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer 
   initialRouteName="Splash"
   >
   <Stack.Navigator screenOptions={{headerShown: false}}>
   <Stack.Screen name="Splash" component={Splash}/>
   <Stack.Screen name="Start" component={Getstart}/> 
   <Stack.Screen name="Login" component={Login}/>
   <Stack.Screen name="Register" component={Register}/>
   <Stack.Screen name="Home" component={Home}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

