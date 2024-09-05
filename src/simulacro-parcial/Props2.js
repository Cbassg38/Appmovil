import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Props2 = ({ route }) => {
    const { parametros } = route.params;
    return (
        <View>
            {parametros.map(p => (
                <Text style={styles.text}>{p.nombre} | Estado: {p.estado ? 'Verdadero' : 'Falso'}</Text>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 50
    },
});
