const series = [
    {
      id: 1,
      titulo: 'Versailles',
      imagen: require('./assets/versailles.png'),
      anio: '2015',
      ciudades: [
        {
          nombre: 'París',
          ubicacionURL: 'https://www.google.com/maps/place/48.804865,2.120355',
          escenaImagen: require('./assets/versaillesParis.png'),
          descripcionEscena: 'Momento clave en la galería de los espejos del Palacio.'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Sherlock Holmes',
      imagen: require('./assets/sherlock.png'),
      anio: '2010',
      ciudades: [
        {
          nombre: 'Londres',
          ubicacionURL: 'https://www.google.com/maps/place/51.523767,-0.158555',
          escenaImagen: require('./assets/sherlockLondon.png'),
          descripcionEscena: 'Sherlock Holmes resolviendo misterios en Baker Street.'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Outlander',
      imagen: require('./assets/outlander.jpeg'),
      anio: '2014',
      ciudades: [
        {
          nombre: 'Edimburgo',
          ubicacionURL: 'https://www.google.com/maps/place/56.1851989,-4.0525207',
          escenaImagen: require('./assets/outlanderedimburgo.jpeg'),
          descripcionEscena: 'Claire y Jamie llegando al castillo de Edimburgo.'
    }
  ]
},
{
      id: 4,
      titulo: 'La Casa de Papel',
      imagen: require('./assets/casadepapel.jpeg'),
      anio: '2017',
      ciudades: [
        {
          nombre: 'Madrid',
          ubicacionURL: 'https://www.google.com/maps/place/40.4409315,-3.6941354',
          escenaImagen: require('./assets/escenacasapapelmadrid.jpeg'),
          descripcionEscena: 'El atraco al Banco de España y su edicio principal.'
    }
  ]
},
{
      id: 5,
      titulo: 'Lupin',
      imagen: require('./assets/lupin.jpg'),
      anio: '2021',
      ciudades: [
        {
          nombre: 'Paris',
          ubicacionURL: 'https://www.google.com/maps/place/48.8813125,2.3408708',
          escenaImagen: require('./assets/escenalupinparis.jpg'),
          descripcionEscena: 'Assane Diop planea el robo en el Museo del Louvre, París.'
    }
  ]
},
{
      id: 6,
      titulo: 'Juego de Tronos',
      imagen: require('./assets/juegodetronos.jpeg'),
      anio: '2011',
      ciudades: [
        {
          nombre: 'Dubrovnik',
          ubicacionURL: 'https://www.google.com/maps/place/42.6409133,18.1092779',
          escenaImagen: require('./assets/gotdubrovnik.jpeg'),
          descripcionEscena: 'Kings Landing, la capital de Westeros, fue filmada en Dubrovnik.'
    },
    {
          nombre: 'Sevilla',
          ubicacionURL: 'https://www.google.com/maps/place/Seville,+Spain/',
          escenaImagen: require('./assets/escenasevillagot.jpg'),
          descripcionEscena: 'El reino de Dorne fue filmado en el Alcázar de Sevilla.'
    }
  ]
}
  ];
  
  export default series;
  