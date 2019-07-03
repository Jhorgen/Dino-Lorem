import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import './triangle.js';

$(document).ready(function() {
  $('.formOne').submit(function(event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3');
    xhr.onload = function() {

      if (this.status === 200) {
        document.querySelector('.output').innerHTML = this.response;
      } else {
        console.log('Where did all the dinosaurs go?');
      }
    };
    xhr.send();
  });
});
