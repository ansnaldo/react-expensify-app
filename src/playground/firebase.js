
import * as firebase from 'firebase';
import moment from "moment";

const config = {
    apiKey: "AIzaSyDMJY-sCKAwdWJ-FEpmXq1-Z0iy8ReT1F8",
    authDomain: "expensify-f4889.firebaseapp.com",
    databaseURL: "https://expensify-f4889.firebaseio.com",
    projectId: "expensify-f4889",
    storageBucket: "expensify-f4889.appspot.com",
    messagingSenderId: "882369326070"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


/*database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });

    console.log(expenses);
});


/*database.ref('expenses').push(
    {
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    });

//database.ref('notes/-LTb2CssXma111ek34y6').update({ body: 'First note'});

/*database.ref('notes').push({
    title: 'another note',
    body: 'This is a note'
});

/*const firebaseNotes = {
    notes: {
        asssass: {
            title: 'First note',
            body: 'This is my note'
        },
        werrvfo: {
            title: 'Second note',
            body: 'This is my note'
        }
    }
};

database.ref('notes').set(notes);
/*database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

setTimeout(() => {
    database.ref('name').set('Ansou');
}, 4000);

/*const onValueChange = database.ref().on('value', (snapshot) =>{
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e);
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);

/*database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data', e);
    });

/*database.ref().set({
    name: 'Ansoumane Camara',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    isSingle: false,
    location: {
        city: 'Manchester',
        country: 'United Kingdom'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This failed', error);
});

database.ref().update({
    stressLevel: 9,
    'job/company' : 'Amazon',
    'location/city': 'Seattle'
});

/*database.ref('isSingle').remove().then(() => {
    console.log('successfully removed');
}).catch((e) => {
    console.log('Remove Failed', e);
});*/

//database.ref().set('this is my data.');
//database.ref('age').set('27');
//database.ref('location/city').set('Salford');

/*database.ref('attributes').set({
    height: 170,
    width: 39
}).then(() => {
    console.log('attributes data saved');
}).catch((e) => {
    console.log('failed!', e);
});

console.log('I made a request to change the data');*/