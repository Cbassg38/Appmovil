import React from 'react';
import { Text, View } from 'react-native';

export default function PropsParcial02({ route }) {
  // Asegúrate de que route.params esté definido, con valores predeterminados si no lo está
  const { nombre = 'Sin nombre', edad = 23 } = route.params || {};

  return (
    <View>
      <Text>Mi nombre es: {nombre}, actualmente tengo {edad ? '23' : ''}.</Text>
    </View>
  );
}
