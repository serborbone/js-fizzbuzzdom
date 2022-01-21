
let injectBox = document.getElementById('container');

for (let i = 1; i<=100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
    
      injectBox.innerHTML += "<div class='box box-fizzbuzz'>" + 'FizzBuzz' + "</div>";

    } else if (i % 3 == 0) {

      injectBox.innerHTML += "<div class='box box-fizz'>" + 'Fizz' + "</div>";
  
    } else if (i % 5 == 0) {
  
      injectBox.innerHTML += "<div class='box box-buzz'>" + 'Buzz' + "</div>";

    } else {

      injectBox.innerHTML += "<div class='box box-num'>" + i + "</div>";

  }

}