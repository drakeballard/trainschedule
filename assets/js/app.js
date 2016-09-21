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

//need to create a function for clicking the submit button
$("#addTrainButton").on("click", function(){
  //creating a few train variables that are associated with the text boxes
  var trainNameInput = $("#trainNameInput").val().trim();
  var destinantionInput = $("#destinantionInput").val().trim();
  var timeInput = $("#timeInput").val().trim();
  var frequencyInput = $("#frequencyInput").val().trim();

  //creating a new variable that includes all variables above into 1

  var train = {
    name : trainNameInput,
    destination : destinantionInput,
    time: timeInput,
  }
})
