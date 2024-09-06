import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements'; // Asegúrate de tener instalada esta dependencia

export default function AxiosParcial03() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.name}</Text>
          </Card>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
