import { ListItem } from '@rneui/base';
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Componente01 = ({ navigation }) => {

    const [texto, setTexto] = useState('');

    const parametros = [
        {
            nombre: texto,
            estado: false
        }];

    return (
        <SafeAreaView>
            <Text>Pantalla principal</Text>

            <TextInput
                style={styles.input}
                onChangeText={setTexto}
                value={texto}
                placeholder='Ingrese texto'
            />

            <FlatList
                style={{ marginVertical: 20 }}
                data={
                    [{ id: 1, titulo: 'Props02' }, { id: 2, titulo: 'Axios03' }, { id: 3, titulo: 'AsyncStorage04' }]
                }
                renderItem={({ item }) => (
                    <Text>{item.titulo}</Text>
                )}
            />
            <ListItem bottomDivider onPress={() => navigation.navigate('Props2', { parametros })}>
                <ListItem.Content >
                    <ListItem.Title>Props02</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('Axios3')}>
                <ListItem.Content >
                    <ListItem.Title>Axios03</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorage4')}>
                <ListItem.Content >
                    <ListItem.Title>AsyncStorage4</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});