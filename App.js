import React from 'react';
import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos el resto de pantallas conectadas con la Home

import FiltroBusquedaCiudadScreen from './FiltroBusquedaCiudadScreen';
import BuscarPorSerieScreen from './BuscarPorSerieScreen';
import BuscarPorPeliculaScreen from './BuscarPorPeliculaScreen';
import DetallesCiudad from './DetallesCiudad';
import DetallesPelicula from './DetallesPelicula';
import DetallesPeliculasCiudades from './DetallesPeliculasCiudades';
import DetallesPeliculaFull from './DetallesPeliculaFull';
import DetallesSerieFull from './DetallesSerieFull';
import DetallesCiudadSerie from './DetallesCiudadSerie';

// HOME

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Cambiamos la ruta de la imagen
        style={styles.logo}
      />
      <Text style={styles.text}>
        Descubre dónde se rodaron exactamente las escenas de tus películas o
        series favoritas
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuscarPorPelicula')}>
        <View style={styles.buttonContent}>
          <Image source={require('./assets/busqueda.png')} style={styles.icon} />
          <Text style={styles.buttonText}>BUSCAR POR PELÍCULA</Text>
          <Image source={require('./assets/searchfilm.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BuscarPorSerie')}>
        <View style={styles.buttonContent}>
          <Image source={require('./assets/busqueda.png')} style={styles.icon} />
          <Text style={styles.buttonText}>BUSCAR POR SERIE</Text>
          <Image source={require('./assets/busquedaserie.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FiltroBusquedaCiudad')}>
        <View style={styles.buttonContent}>
          <Image source={require('./assets/busqueda.png')} style={styles.icon} />
          <Text style={styles.buttonText}>BUSCAR POR CIUDAD</Text>
          <Image source={require('./assets/ubicacion.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuscarPorPelicula"
          component={BuscarPorPeliculaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuscarPorSerie"
          component={BuscarPorSerieScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetallesSerieFull"
          component={DetallesSerieFull}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FiltroBusquedaCiudad"
          component={FiltroBusquedaCiudadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetallesCiudad"
          component={DetallesCiudad}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetallesPelicula"
          component={DetallesPelicula}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetallesPeliculasCiudades"
          component={DetallesPeliculasCiudades}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetallesPeliculaFull"
          component={DetallesPeliculaFull}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetallesCiudadSerie"
          component={DetallesCiudadSerie}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ESTILOS HOME

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start', // Para alinear la imagen en la parte superior
    paddingTop: 50, // Agregamos un relleno superior para separar la imagen del borde superior
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff', // Color del texto blanco
    fontSize: 22, // Tamaño de fuente
    textAlign: 'center', // Alineación centrada
    paddingHorizontal: 40, // Espaciado horizontal para que el texto no esté pegado a los bordes
    marginTop: 20, // Margen superior para separar el texto de la imagen
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 50,
    marginBottom: 10,
    width: '100%', // el ancho del botón ocupará todo el espacio disponible
  },
    buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    icon: {
    width: 24,
    height: 24,
  },
});
