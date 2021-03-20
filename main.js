  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCuv6SsWPWNyiAUfQfcGYL9WSroGmeR8Ow",
    authDomain: "khdgc-api.firebaseapp.com",
    projectId: "khdgc-api",
    storageBucket: "khdgc-api.appspot.com",
    messagingSenderId: "1010076959891",
    appId: "1:1010076959891:web:90a0ff6d719811e6b77966",
    databaseURL: "https://khdgc-api-default-rtdb.firebaseio.com/"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function writeUserData( name, score, date) {
    firebase.database().ref('scores/').push().set({
      name: name,
      score: score,
      date:date
    });
}

// writeUserData('Matt', 30, '2017-06-01');
var submit = document.getElementById('sub');

submit.addEventListener('click', event => {
    event.preventDefault();
    writeUserData(document.getElementById('name').value, document.getElementById('score').value, document.getElementById('date').value);

    scores.get().then(function(snapshot) {
        if (snapshot.exists()) {
        //   console.log(snapshot.val());
            var arr = Object.values(snapshot.val());
            document.getElementById('list').innerHTML = '';
    
            for(var i = 0; i<arr.length;i++){
                console.log(arr[i]);
                document.getElementById('list').insertAdjacentHTML('beforeend',`<div> ${arr[i].name} shot a ${arr[i].score} on  ${arr[i].date}</div><br>`);
          
            }
    
        }
        else {
          console.log("No data available");
        }
      }).catch(function(error) {
        console.error(error);
      });
  });


  var scores = database.ref().child('scores');


  scores.get().then(function(snapshot) {
    if (snapshot.exists()) {
    //   console.log(snapshot.val());
        var arr = Object.values(snapshot.val());

        for(var i = 0; i<arr.length;i++){
            console.log(arr[i]);
            document.getElementById('list').insertAdjacentHTML('beforeend',`<div> ${arr[i].name} shot a ${arr[i].score} on  ${arr[i].date}</div>`);
      
        }

    }
    else {
      console.log("No data available");
    }
  }).catch(function(error) {
    console.error(error);
  });

  




