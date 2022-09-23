
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "http://www.biribombas.com.br/imagens/logo_biribombas.png" }} style={{ width: 305, height: 159 }} />
    
      <Text style={{color: '#888', fontSize: 18}}> 
        Biribombas
      </Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Davi feinho</Text>
      </TouchableOpacity>
    </View>
    
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