import { DinoLorem } from './index.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('.formOne').submit(function(event) {
  event.preventDefault();

  $('.output').text("");
    let paragraph = $('#paragraph').val();
    let number = $('#number').val();


    let dinoLorem = new DinoLorem();
    let promise = dinoLorem.generateDino(paragraph, number);


    promise.then(function(response) {
      let body = JSON.parse(response);

      console.log(body);
      body.forEach(function(paragraph) {
        $('.output').append("<p>");
        paragraph.forEach(function(word){
          $('.output').append(word + " ");
        })
        $('.output').append("</p>");
      });
    });
  });
});
