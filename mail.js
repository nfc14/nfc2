const firebaseConfig = {
  apiKey: "AIzaSyA1VxqAbPtFDxE4v4EqoOUB9Bk2oD9_WoU",
  authDomain: "cardmain2.firebaseapp.com",
  databaseURL: "https://cardmain2-default-rtdb.firebaseio.com",
  projectId: "cardmain2",
  storageBucket: "cardmain2.appspot.com",
  messagingSenderId: "476126971099",
  appId: "1:476126971099:web:9535ffcfffe94677bdb8fe"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
