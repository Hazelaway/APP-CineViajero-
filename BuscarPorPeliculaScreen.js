import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import peliculasData from './peliculasData';

// Convertir el objeto organizado por ciudades en una lista plana de películas
const todasLasPeliculas = Object.values(peliculasData).flat();

function BuscarPorPeliculaScreen({ navigation }) {
  const [filtroTexto, setFiltroTexto] = useState('');
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  const handleFiltroTextoChange = (text) => {
    setFiltroTexto(text);
    if (text === '') {
      setPeliculasFiltradas([]);
    } else {
      const filtrado = todasLasPeliculas.filter(pelicula =>
        pelicula.titulo.toLowerCase().includes(text.toLowerCase())
      );
      setPeliculasFiltradas(filtrado);
    }
  };

  const handleSelectPelicula = (pelicula) => {
    navigation.navigate('DetallesPeliculaFull', { pelicula });
  };

  return (
    <View style={styles.container}>
      <View style={styles.botonContainer}>
        <Button
          title="Volver a la pantalla de inicio"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.iconContainer}>
        <Image source={require('./assets/claqueta.png')} style={styles.icono} />
      </View>

      <View style={styles.filtroContainer}>
        <Text style={styles.filtroLabel}>Introduce tu criterio de búsqueda:</Text>
        <TextInput
          style={styles.filtroInput}
          placeholder="Película"
          value={filtroTexto}
          onChangeText={handleFiltroTextoChange}
        />
        <FlatList
          data={peliculasFiltradas}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelectPelicula(item)}>
              <Image source={item.imagen} style={styles.imagen} />
              <Text style={styles.titulo}>{item.titulo}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  botonContainer: {
    marginTop: 40,
    backgroundColor: '#007bff',
  },
  filtroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
    iconContainer: {
    alignItems: 'center',
    marginTop: 60,// Ajustar el espacio entre el icono y el criterio de búsqueda
  },
  filtroLabel: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  filtroInput: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  imagen: {
    width: 100,
    height: 150,
    marginRight: 10
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',  // Color de texto ajustado para mejor visibilidad
  }
});

export default BuscarPorPeliculaScreen;





