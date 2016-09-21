//The JS reference is no longer needed
// alert('The train is coming 1, 2 ,3');

//
// firebase application
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDChpuTErGfXUtRSDAAWOAMSN8fAoBGb9Y",
  authDomain: "train-schedule-61b08.firebaseapp.com",
  databaseURL: "https://train-schedule-61b08.firebaseio.com",
  storageBucket: "train-schedule-61b08.appspot.com",
  messagingSenderId: "26945234726"
};

firebase.initializeApp(config);

// the database needs to be defined from firebase
var database = firebase.database();

//need to create a function for clicking the submit button
$("#addTrainBtn").on("click", function(){
  //creating a few train variables that are associated with the text boxes
  var trainNameInput = $("#trainNameInput").val().trim();
  var destinantionInput = $("#destinantionInput").val().trim();
  var timeInput = $("#timeInput").val().trim();
  var frequencyInput = $("#frequencyInput").val().trim();

  //creating a new variable that includes all variables above into 1

  var newTrain = {
    name : trainNameInput,
    destination : destinantionInput,
    time: timeInput,
    frequency : frequencyInput
  }

  //we need to push the info to firebase for it to retrieve.
  database.ref().push(newTrain);

  //console log to make sure that info is being retrieved
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  //the input information that was inserted needs to be cleared for the next train
  $("#trainNameInput").val("");
  $("#destinantionInput").val("");
  $("#timeInput").val("");
  $("#frequencyInput").val("");

  return false;
});
