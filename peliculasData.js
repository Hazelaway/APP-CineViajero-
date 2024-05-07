const peliculas = [
  {
    id: 1,
    titulo: 'John Wick 4',
    imagen: require('./assets/johnwick4.png'),
    anio: '2023',
    ciudades: [
      { 
        nombre: 'Paris', 
        ubicacionURL: 'https://www.google.com/maps/place/48.8846723,2.3425156',
        escenaImagen: require('./assets/johnwick4escena.png'),  // Imagen específica de la escena en París
        descripcionEscena: 'John Wick luchando en las escaleras de Montmartre.'
      },
      { 
        nombre: 'Londres', 
        ubicacionURL: 'https://www.google.com/maps/place/51.5074,0.1278',
        escenaImagen: require('./assets/johnwick4london.png'),  // Imagen específica de la escena en Londres
        descripcionEscena: 'John Wick en el interior de una iglesia de Londres.'
      },
      { 
        nombre: 'Osaka', 
        ubicacionURL: 'https://www.google.com/maps/place/34.6937,135.5023',
        escenaImagen: require('./assets/johnwick4osaka.png'),  // Imagen específica de la escena en Osaka
        descripcionEscena: 'John Wick en un duelo en el Museo Futurista de Osaka.'
      }
    ]
  },
  {
    id: 2,
    titulo: 'Midnight in Paris',
    imagen: require('./assets/midnightinparis.png'),
    anio: '2011',
    ciudades: [
      {
        nombre: 'Paris',
        ubicacionURL: 'https://www.google.com/maps/place/48.8558186,2.3412081',
        escenaImagen: require('./assets/midnightinparisScene.png'),
        descripcionEscena: 'Mítico paseo romántico por el Sena donde el protagonista se declara.'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Amelie',
    imagen: require('./assets/amelie.png'),
    anio: '2001',
    ciudades: [
      {
        nombre: 'Paris',
        ubicacionURL: 'https://www.google.com/maps/place/48.8855152,2.3348538',
        escenaImagen: require('./assets/amelieScene.png'),
        descripcionEscena: 'Amelie en su pequeña cafetería en Montmartre.'
      }
    ]
  },
    {
    id: 4,
    titulo: 'Star Wars: Episodio II',
    imagen: require('./assets/starwars2.jpeg'),
    anio: '2002',
    ciudades: [
      {
        nombre: 'Sevilla',
        ubicacionURL: 'https://www.google.com/maps/place/37.3771113,-5.9898393',
        escenaImagen: require('./assets/starwars2escena.jpeg'),
        descripcionEscena: 'La escena del Palacio de Naboo fue filmada en la Plaza de España, Sevilla.'
      }
    ]
  },
  {
    id: 5,
    titulo: 'Angeles y Demonios',
    imagen: require('./assets/angelesydemonios.jpeg'),
    anio: '2009',
    ciudades: [
      {
        nombre: 'Roma',
        ubicacionURL: 'https://www.google.com/maps/place/41.8985972,12.4755885',
        escenaImagen: require('./assets/panteon.jpg'),
        descripcionEscena: 'Robert Langdon investiga el Panteon en busca de pistas cruciales.'
    }
  ]
},
{
    id: 6,
    titulo: 'Gladiator',
    imagen: require('./assets/gladiator.jpeg'),
    anio: '2000',
    ciudades: [
      {
        nombre: 'Roma',
        ubicacionURL: 'https://www.google.com/maps/place/41.8902142,12.489656',
        escenaImagen: require('./assets/coliseo.jpeg'),
        descripcionEscena: 'Máximo Décimo Meridio, interpretado por Russell Crowe, combate en el Coliseo de Roma como gladiador, en una de las escenas más icónicas de la película.'
    }
  ]
}
];

export default peliculas;


  