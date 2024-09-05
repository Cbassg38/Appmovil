import { Card, ListItem } from '@rneui/base'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native';

export const Axios3 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <ScrollView>
            {data.map(datos => (
                <Card>
                    <Card.Title>{datos.name}</Card.Title>
                    <Card.Divider />
                    <Text>
                        Usuario: {datos.username} {"\n"}Email: {datos.email}
                    </Text>
                </Card>
            ))}
        </ScrollView>

    )
}
