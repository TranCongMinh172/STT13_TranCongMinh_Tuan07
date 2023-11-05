import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scr1 from './scr/screen1';
import Scr2 from './scr/screen2';
import Scr3 from './scr/screen3';
import Scr4 from './scr/screen4';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Scr1" component={Scr1} />
        <Stack.Screen name="Scr2" component={Scr2} />
        <Stack.Screen name="Scr3" component={Scr3} />
        <Stack.Screen name="Scr4" component={Scr4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
