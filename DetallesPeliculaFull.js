import React from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';

function DetallesPeliculaFull({ route, navigation }) {
  const { pelicula } = route.params;  // Obtener la película pasada como parámetro

  const handleCitySelect = (ciudad) => {
    // Aquí navegamos a la pantalla que muestra los detalles de la pelicula y la ciudad
    navigation.navigate('DetallesPelicula', { pelicula, ciudad });
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>{pelicula.titulo}</Text> 
      <Image source={pelicula.imagen} style={styles.imagen} />
      <Text style={styles.detalle}>AÑO: {pelicula.anio}</Text>  
      <Text style={styles.header}>CIUDADES DONDE SE GRABÓ:</Text>
      {pelicula.ciudades.map((ciudad, index) => (
        <TouchableOpacity key={index} onPress={() => handleCitySelect(ciudad)}>
          <Text style={styles.ciudad}>{ciudad.nombre}</Text> 
        </TouchableOpacity>
      ))}
      <View style={styles.botonVolverContainer}>
        <Button
          title="Volver"
          onPress={() => navigation.goBack()}
          color="#007AFF"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',  // Fondo negro para mantener la coherencia del estilo
  },
  botonVolverContainer: {
    marginBottom: 10,
    width: '20%',
    alignSelf: 'center',
    paddingTop: 60,
    paddingBottom: 80,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',  // Texto en blanco
    marginBottom: 20,
  },
  imagen: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  detalle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',  // Texto en blanco
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',  // Texto en blanco
    marginBottom: 10,
    marginTop: 40,
  },
  ciudad: {
    fontSize: 16,
    color: '#fff',  // Texto en blanco
    marginBottom: 5,
  }
});

export default DetallesPeliculaFull;
