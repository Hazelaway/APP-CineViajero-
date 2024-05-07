import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import seriesData from './seriesData'; // Importamos el nuevo módulo de datos

// Convertir el objeto organizado por ciudades en una lista plana de series
const todasLasSeries = Object.values(seriesData).flat();

function BuscarPorSerieScreen({ navigation }) {
  const [filtroTexto, setFiltroTexto] = useState('');
  const [seriesFiltradas, setSeriesFiltradas] = useState([]);

  const handleFiltroTextoChange = (text) => {
    setFiltroTexto(text);
    if (text === '') {
      setSeriesFiltradas([]);
    } else {
      const filtrado = todasLasSeries.filter(serie =>
        serie.titulo.toLowerCase().includes(text.toLowerCase())
      );
      setSeriesFiltradas(filtrado);
    }
  };

  const handleSelectSerie = (serie) => {
    navigation.navigate('DetallesSerieFull', { serie }); // Cambiamos la navegación al detalle de serie
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
        <Image source={require('./assets/tvshow.png')} style={styles.icono} />
      </View>

      <View style={styles.filtroContainer}>
        <Text style={styles.filtroLabel}>Introduce tu criterio de búsqueda:</Text>
        <TextInput
          style={styles.filtroInput}
          placeholder="Serie"
          value={filtroTexto}
          onChangeText={handleFiltroTextoChange}
        />
        <FlatList
          data={seriesFiltradas}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelectSerie(item)}>
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
    color: '#fff',
  }
});

export default BuscarPorSerieScreen;

