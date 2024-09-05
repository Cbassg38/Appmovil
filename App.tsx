import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//Componentes que se van sumando a mi pantalla principal
import BasicComponents from './src/components/BasicComponents';
import TextComponents from './src/components/TextComponents';
import TextInputComponents from './src/components/TextInputComponents';
import ListNotasComponents from './src/components/ListNotasComponents';
import Home from './src/react-native-elements/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBasic from './src/react-native-elements/AvatarBasic';
import BadgeBasic from './src/react-native-elements/BadgeBasic';
import CardBasic from './src/react-native-elements/CardBasic';
import TabBasic from './src/react-native-elements/TabBasic';
import PropsEjemplo from './src/navegacion/PropsEjemplo';
import AxiosEjemplo from './src/navegacion/AxiosEjemplo';
import AsyncStorageEjemplo from './src/navegacion/AsyncStorageEjemplo';
import { Componente01 } from './src/simulacro-parcial/Componente01';
import { Props2 } from './src/simulacro-parcial/Props2';
import { Axios3 } from './src/simulacro-parcial/Axios3';
import AsyncStorage4 from './src/simulacro-parcial/AsyncStorage4'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //     //<ScrollView>
    //       // {/* <BasicComponents></BasicComponents>*/}
    //       // {/* <TextComponents></TextComponents>*/}
    //       // {/* <TextInputComponents></TextInputComponents>*/}
    //       // {/*<ListNotasComponents></ListNotasComponents>*/}
    //       <NavigationContainer>
    //       <Stack.Navigator initialRouteName="Home">
    //         <Stack.Screen name="Home" component={Home} />
    //         <Stack.Screen name="Notas" component={ListNotasComponents} />
    //         <Stack.Screen name="Avatar" component={AvatarBasic} />
    //         <Stack.Screen name="Badge" component={BadgeBasic} />
    //         <Stack.Screen name="Card" component={CardBasic} />
    //         <Stack.Screen name="Tab" component={TabBasic} />
    //         <Stack.Screen name="Props" component={PropsEjemplo} />
    //         <Stack.Screen name="Axios" component={AxiosEjemplo} />
    //         <Stack.Screen name="Async" component={AsyncStorageEjemplo} />
    //       </Stack.Navigator>
    //    </NavigationContainer>
    // // </ScrollView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Componente01">
        <Stack.Screen name="Componente01" component={Componente01} />
        <Stack.Screen name="Props2" component={Props2} />
        <Stack.Screen name="Axios3" component={Axios3} />
        <Stack.Screen name="AsyncStorage4" component={AsyncStorage4} />

      </Stack.Navigator>
    </NavigationContainer>




  );
}
const styles = StyleSheet.create({
});

export default App;

