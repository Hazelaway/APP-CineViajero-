import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

function DetallesPeliculasCiudades({ route, navigation }) {
  const { ciudad, peliculas } = route.params;
  console.log("Ciudad recibida:", ciudad);

  const renderItem = ({ item }) => {
    const ciudadDetalles = item.ciudades.find(c => c.nombre === ciudad.nombre);
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.titulo}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetallesPelicula', { pelicula: item, ciudad: ciudadDetalles })}>
          <Image source={item.imagen} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{ciudad ? ciudad.nombre.toUpperCase() : 'Nombre no disponible'}</Text>
      <FlatList
        data={peliculas}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  }
});

export default DetallesPeliculasCiudades;



