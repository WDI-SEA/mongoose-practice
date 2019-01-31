const db = require('./models');

db.Museum.create({
  name: 'Musée du Louvre',
  city: 'Paris',
  country: 'France',
  imageUrl: 'https://theworldismymuseum.files.wordpress.com/2016/07/51.jpg?w=806&h=400&crop=1'
})
.then(result => {
  console.log('Created the Louvre');
  db.Piece.create({
    name: 'Random Piece of Art',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    originCountry: 'Italy',
    museum: result._id,
    creator: {
      firstName: 'Joe',
      lastName: 'Jones',
      imageUrl: 'http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg',
      birthYear: '1971',
      deathYear: ''
    }
  })
  .then(result => {
    console.log('successfully created random piece of art');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });
})
.catch(err => {
  console.log('Error Message', err);
});

// process.exit();
