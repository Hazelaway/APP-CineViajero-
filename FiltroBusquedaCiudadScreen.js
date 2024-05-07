import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import peliculasData from './peliculasData';
import seriesData from './seriesData';

// Convertir el objeto organizado por ciudades en una lista plana de películas y series
const todasLasCiudades = [
  ...peliculasData.flatMap((pelicula) =>
    pelicula.ciudades.map((ciudad) => ({
      ...ciudad,
      tipo: 'pelicula',
      item: pelicula,
    }))
  ),
  ...seriesData.flatMap((serie) =>
    serie.ciudades.map((ciudad) => ({ ...ciudad, tipo: 'serie', item: serie }))
  ),
];

function FiltroBusquedaCiudadScreen({ navigation }) {
  const [filtroTexto, setFiltroTexto] = useState('');
  const [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);

  const handleFiltroTextoChange = (text) => {
    setFiltroTexto(text);
    if (text === '') {
      setCiudadesFiltradas([]);
    } else {
      const filtrado = todasLasCiudades.filter((ciudad) =>
        ciudad.nombre.toLowerCase().includes(text.toLowerCase())
      );
      setCiudadesFiltradas(filtrado);
    }
  };

  const handleSelectCiudad = (ciudad) => {
    if (ciudad.tipo === 'pelicula') {
      navigation.navigate('DetallesPeliculaFull', { pelicula: ciudad.item });
    } else if (ciudad.tipo === 'serie') {
      navigation.navigate('DetallesSerieFull', { serie: ciudad.item });
    }
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
        <Image source={require('./assets/pin.png')} style={styles.icono} />
      </View>

      <View style={styles.filtroContainer}>
        <Text style={styles.filtroLabel}>
          Introduce tu criterio de búsqueda:
        </Text>
        <TextInput
          style={styles.filtroInput}
          placeholder="Ciudad"
          value={filtroTexto}
          onChangeText={handleFiltroTextoChange}
        />
        <FlatList
          data={ciudadesFiltradas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelectCiudad(item)}>
              <Image
                source={
                  item.tipo === 'pelicula' ? item.item.imagen : item.item.imagen
                }
                style={styles.imagen}
              />
              <Text style={styles.titulo}>
                {item.nombre} (
                {item.tipo === 'pelicula' ? item.item.titulo : item.item.titulo}
                )
              </Text>
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
  },
  filtroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 60,
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
    alignItems: 'center',
  },
  imagen: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FiltroBusquedaCiudadScreen;
