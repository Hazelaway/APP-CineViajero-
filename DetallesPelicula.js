import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Linking, FlatList } from 'react-native';

function DetallesPelicula({ route, navigation }) {
  const { pelicula, ciudad } = route.params;
  console.log("Pelicula recibida:", pelicula);
  console.log("Ciudad recibida:", ciudad);

  if (!ciudad || !ciudad.escenaImagen) {
    console.error("Datos de la ciudad incompletos o no recibidos", ciudad);
  }

  const abrirUbicacion = (ubicacionURL) => {
    Linking.openURL(ubicacionURL);
  };

  const data = [
    { type: 'volver', data: null },
    { type: 'header', data: pelicula },
    { type: 'ciudad', data: ciudad }
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
            {item.data && item.data.imagen ? (
              <Image source={item.data.imagen} style={styles.imagenGrande} />
            ) : (
              <Text style={styles.error}>Imagen no disponible</Text>
            )}
            <Text style={styles.tituloSeccionanio}>AÑO: {item.data && item.data.anio ? item.data.anio : 'No disponible'}</Text>
            <Text style={styles.tituloSeccionescena}>ESCENA:</Text>
          </View>
        );
      case 'ciudad':
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.ciudad}>{item.data && item.data.nombre ? item.data.nombre : 'Nombre no disponible'}</Text>
            {item.data && item.data.escenaImagen ? (
              <Image source={item.data.escenaImagen} style={styles.imagenEscena} />
            ) : (
              <Text style={styles.error}>Imagen de escena no disponible</Text>
            )}
            <Text style={styles.descripcionEscena}>{item.data && item.data.descripcionEscena ? item.data.descripcionEscena : 'Descripción no disponible'}</Text>
            <View style={styles.buttonContainer}>
              {item.data && item.data.ubicacionURL ? (
                <Button
                  title="Ver ubicación en Google Maps"
                  onPress={() => abrirUbicacion(item.data.ubicacionURL)}
                />
              ) : (
                <Text style={styles.error}>Ubicación no disponible</Text>
              )}
            </View>
          </View>
        );
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
    backgroundColor: '#000',
  },
  botonVolver: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    margin: 10,
  },
  botonVolverTexto: {
    color: '#fff',
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
    color: '#fff',
    paddingHorizontal: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  ciudad: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 25,
    paddingLeft: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 80,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DetallesPelicula;





