import * as firebase from 'firebase';

// Initialize Firebase
const config = {
<<<<<<< HEAD
  apiKey: "AIzaSyDOJCSq7zjnngREQ03EgKKJctto4whhS20",
  authDomain: "expensify-603ce.firebaseapp.com",
  databaseURL: "https://expensify-603ce.firebaseio.com",
  projectId: "expensify-603ce",
  storageBucket: "expensify-603ce.appspot.com",
  messagingSenderId: "144904523113"
=======
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATA_BASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASR_STOREGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
>>>>>>> ab5f55e16c760badb219b16195cb30818e44665e
};
firebase.initializeApp(config);

const database = firebase.database();

<<<<<<< HEAD
=======

export { firebase, database as default };

>>>>>>> ab5f55e16c760badb219b16195cb30818e44665e
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   })
//   .catch((e) => console.log('Error on once', e));

<<<<<<< HEAD
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  });
  console.log(expenses);
});
=======
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// });
>>>>>>> ab5f55e16c760badb219b16195cb30818e44665e

// database.ref('expenses').push(
//   {
//     description: 'flat',
//     amount: '100',
//     note: 'blank note',
//     createdAt: '1515688'
//   }
// );

// database.ref('notes').push({
//   title: 'To do',
//   body: 'Go for a run'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => console.log('Erros fetching data', e))

// database.ref()
//   .on('value',
//     (snapshot) => {
//       console.log(snapshot.val());
//     })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => console.log('Erroe fetching data', e))

// database.ref().set({
//     name: 'Tomasz Kotowski',
//     age: '27',
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Bialystok',
//         country: 'Poland'
//     },
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazone',
//     'location/city': 'Seatle'
// })

// database.ref('isSingle').remove().then(() => {
//     console.log('Data removed')
// }).catch((error) => {
//     console.log('This failed', error)
// });
// database.ref('attributes').set({
//     height: 180,
//     weight: 80
// }).then(() => {
//     console.log('Data has been saved')
// }).catch((error) => {
//     console.log('This is what happend', error)
<<<<<<< HEAD
// });
=======
// });



>>>>>>> ab5f55e16c760badb219b16195cb30818e44665e
