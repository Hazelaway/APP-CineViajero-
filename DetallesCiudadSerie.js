import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Linking, FlatList } from 'react-native';

function DetallesCiudadSerie({ route, navigation }) {
  const { serie, ciudad } = route.params;
  console.log("Serie recibida:", serie);
  console.log("Ciudad recibida:", ciudad);

  if (!ciudad || !ciudad.escenaImagen) {
    console.error("Datos de la ciudad incompletos o no recibidos", ciudad);
  }

  const abrirUbicacion = (ubicacionURL) => {
    Linking.openURL(ubicacionURL);
  };

  // Preparar los datos para la FlatList, incluyendo los detalles de la serie y la ciudad seleccionada
  const data = [
    { type: 'volver', data: null }, // Botón de volver
    { type: 'header', data: serie },
    { type: 'ciudad', data: ciudad }, // Usando solo la ciudad seleccionada
    { type: 'footer', data: null } // No se necesita footer en este caso
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'volver':
        return (
          <TouchableOpacity style={styles.botonVolver} onPress={() => navigation.goBack()}>
            <Text style={styles.botonVolverTexto}>VOLVER</Text>
          </TouchableOpacity>
        );
      case 'header':
        return (
          <View>
            <Image source={serie.imagen} style={styles.imagenGrande} />
            <Text style={styles.tituloSeccionanio}>AÑO: {serie.anio}</Text>
            <Text style={styles.tituloSeccionescena}>ESCENA:</Text>
          </View>
        );
      case 'ciudad':
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.ciudad}>{ciudad.nombre}</Text>
            <Image source={ciudad.escenaImagen} style={styles.imagenEscena} />
            <Text style={styles.descripcionEscena}>{ciudad.descripcionEscena}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Ver ubicación en Google Maps"
                onPress={() => abrirUbicacion(ciudad.ubicacionURL)}
              />
            </View>
          </View>
        );
      case 'footer':
        return null; // No se utiliza footer en este caso
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    backgroundColor: '#000',  // Fondo negro
  },
  botonVolver: {
    backgroundColor: '#007AFF',  // Azul iOS por defecto
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    margin: 10,
  },
  botonVolverTexto: {
    color: '#fff',  // Texto blanco
    fontSize: 14,
  },
  imagenGrande: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  imagenEscena: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tituloSeccionanio: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  tituloSeccionescena: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  descripcionEscena: {
    fontSize: 14,
    color: '#fff',  // Texto blanco
    paddingHorizontal: 20,  // Espaciado horizontal
    marginBottom: 20,  // Espacio debajo del texto
    textAlign: 'center'  // Centrar el texto
  },
  ciudad: {
    fontSize: 14,
    color: '#fff',  // Texto blanco
    lineHeight: 25,
    paddingLeft: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 80,
  }
});

export default DetallesCiudadSerie;

