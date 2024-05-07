import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

function DetallesCiudad({ route, navigation }) {
  const { ciudad, peliculas, series } = route.params;

  const renderItem = ({ item, tipo }) => {
    const ciudadDetalles = item.ciudades.find(c => c.nombre === ciudad.nombre);
    const destino = tipo === 'Pelicula' ? 'DetallesPelicula' : 'DetallesCiudadSerie';
    return (
      <View style={styles.peliculaContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        {ciudadDetalles && (
          <TouchableOpacity onPress={() => navigation.navigate(destino, { [tipo.toLowerCase()]: item, ciudad: ciudadDetalles })}>
            <Image source={item.imagen} style={styles.imagen} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const combinedData = [
    ...peliculas.map(p => ({ ...p, tipo: 'Pelicula' })),
    ...series.map(s => ({ ...s, tipo: 'Serie' }))
  ];

  return (
    <View style={styles.container}>
      <View style={styles.botonVolverContainer}>
        <Button
          title="Volver"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.tituloCiudad}>{ciudad && ciudad.nombre ? ciudad.nombre : 'Nombre no disponible'}</Text>
      </View>
      <FlatList
        data={combinedData}
        renderItem={({ item }) => renderItem({ item, tipo: item.tipo })}
        keyExtractor={item => item.titulo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Establece el fondo a negro
  },
  botonVolverContainer: {
    marginBottom: 10,
    width: '20%',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  peliculaContainer: {
    marginBottom: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Cambia el color del texto a blanco para mejor contraste
  },
  tituloCiudad: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    marginTop: 15,  // Espacio debajo del título
  },
  imagen: {
    width: 200,
    height: 300,
  },
});

export default DetallesCiudad;



