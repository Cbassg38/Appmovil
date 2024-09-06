import React, { useState, useEffect } from 'react';
import { Text, TextInput, Button, View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageParcial04() {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false); // Para manejar el estado de edición
  const [editIndex, setEditIndex] = useState(null); // Para almacenar el índice del elemento que se está editando

  // Guardar datos en AsyncStorage
  const storeData = async () => {
    try {
      const newData = { codigo, carrera, facultad };

      // Si está en modo de edición, actualizar el elemento correspondiente
      if (editMode && editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = newData;
        const jsonValue = JSON.stringify(updatedData);
        await AsyncStorage.setItem('datos', jsonValue);
        setData(updatedData);
      } else {
        // Si no está en modo de edición, añadir un nuevo dato
        const jsonValue = JSON.stringify([...data, newData]);
        await AsyncStorage.setItem('datos', jsonValue);
        setData([...data, newData]);
      }

      // Limpiar los campos después de guardar
      clearFields();
    } catch (e) {
      console.error(e);
    }
  };

  // Obtener datos de AsyncStorage
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('datos');
      setData(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.error(e);
    }
  };

  // Eliminar datos de AsyncStorage
  const deleteData = async (codigo) => {
    const filteredData = data.filter((item) => item.codigo !== codigo);
    const jsonValue = JSON.stringify(filteredData);
    await AsyncStorage.setItem('datos', jsonValue);
    setData(filteredData);
  };

  // Establecer datos en los campos para editar
  const editData = (item, index) => {
    setCodigo(item.codigo);
    setCarrera(item.carrera);
    setFacultad(item.facultad);
    setEditMode(true); // Cambiar al modo de edición
    setEditIndex(index); // Guardar el índice del elemento que se está editando
  };

  // Limpiar los campos de entrada
  const clearFields = () => {
    setCodigo('');
    setCarrera('');
    setFacultad('');
    setEditMode(false); // Salir del modo de edición
    setEditIndex(null); // Restablecer el índice de edición
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Codigo"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        placeholder="Facultad"
        value={facultad}
        onChangeText={setFacultad}
      />

      <Button title={editMode ? "Actualizar" : "Crear"} onPress={storeData} />
      <Button title="Limpiar Campos" onPress={clearFields} />

      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.codigo} - {item.carrera} - {item.facultad}</Text>
            <Button title="Eliminar" onPress={() => deleteData(item.codigo)} />
            <Button title="Editar" onPress={() => editData(item, index)} />
          </View>
        )}
        keyExtractor={(item) => item.codigo}
      />
    </View>
  );
}
