// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBba4xve68Vq21g8k3JCa2xXliBiufxOOg",
  authDomain: "crystal-shopping-database.firebaseapp.com",
  databaseURL: "https://crystal-shopping-database-default-rtdb.firebaseio.com",
  projectId: "crystal-shopping-database",
  storageBucket: "crystal-shopping-database.appspot.com",
  messagingSenderId: "969167995602",
  appId: "1:969167995602:web:94ef5a264e17d3f320a30b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

function Setdata() {
  Logo = document.getElementById('category').value
  firebase.database().ref('Products/'+Logo).push({
    Stars: 5,
    Name: document.getElementById('name').value,
    PriceBefore: document.getElementById('price text').value,
    PriceAfter: document.getElementById('price num').value,
    Description: document.getElementById('des').value,
    Availablity: 'Yes',
    Image01: document.getElementById('img1').value,
    Image02: document.getElementById('img2').value,
    Image03: document.getElementById('img3').value,
    Color01: document.getElementById('c1').value,
    Color02: document.getElementById('c2').value,
    Color03: document.getElementById('c3').value,
  });
  location.reload();
}