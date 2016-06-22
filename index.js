var poemList = [
  "hi",
  "bye",
  "man",
  "shit",
  "last"
];

var imageList = [

  "./img/anita.jpg",
  "./img/court.jpg"
]

var poem = $('#poem');
var image = $('.image');

function slideToAnotherPoem() {
  poem.html(poemList[0]);
  image.css('background-image', 'url(' + imageList[0] + ')');
  counter = 0;
  $('.next').click(function() {
    counter = (counter + 1) % poemList.length;
    poem.html(poemList[counter]);
    image.css('background-image', 'url(' + imageList[counter] + ')');
  });
  $('.prev').click(function() {
    counter = (counter - 1) % poemList.length;
    poem.html(poemList[counter]);
    image.css('background-image', 'url(' + imageList[counter] + ')');
  });
}

function guessAuthor() {

}


slideToAnotherPoem();
