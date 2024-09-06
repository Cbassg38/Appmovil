import React, { useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Overlay } from 'react-native-elements'; // Asegúrate de instalar esta dependencia
import { useNavigation } from '@react-navigation/native';

export default function ComponenteParcial01() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const items = [
    { id: '1', name: 'PropsParcial02' },
    { id: '2', name: 'AxiosParcial03' },
    { id: '3', name: 'AsyncStorageParcial04' },
  ];

  return (
    <View>
      <Text>Pantalla Principal</Text>
      <Button title="Mostrar Modal" onPress={toggleOverlay} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Bienvenido al Examen</Text>
      </Overlay>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => {
              if (item.name === 'PropsParcial02') {
                // Aquí es donde llamamos a la navegación con parámetros
                navigation.navigate('PropsParcial02', {
                  nombre: 'Oscar Sebastian Dominguez',
                  edad: 23,
                });
              } else {
                navigation.navigate(item.name);
              }
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
