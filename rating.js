
    function isChecked() {
      var checkOne = document.getElementById('one').checked;
      var checkTwo = document.getElementById('two').checked;
      var checkThree = document.getElementById('three').checked;
      var checkFour = document.getElementById('four').checked;
      var checkFive = document.getElementById('five').checked;

      if (checkOne == false && checkTwo == false && checkThree == false && checkFour == false && checkFive == false) {
        alert("You need to select an option!");
        return false;
      }
      
      if (checkOne == true) {
        return true;
      }
      else if (checkTwo == true) {
        return true;
      }
      else if (checkThree == true) {
        return true;
      }
      else if (checkFour == true) {
        return true;
      }
      else if (checkFive == true) {
        return true;
      }
    }

    function rating() {
      var ratingOne = document.getElementById('yourRating').innerHTML = 'You selected 1 out of 5';
      var ratingTwo = document.getElementById('yourRating').innerHTML = 'You selected 2 out of 5';
      var ratingThree = document.getElementById('yourRating').innerHTML = 'You selected 3 out of 5';
      var ratingFour = document.getElementById('yourRating').innerHTML = 'You selected 4 out of 5';
      var ratingFive = document.getElementById('yourRating').innerHTML = 'You selected 5 out of 5';
      
      if (checkOne == true) {
        ratingOne == true;
        return true;
      }
      else if (checkTwo == true) {
        ratingTwo == true;
      }
      else if (checkThree == true) {
        ratingThree == true;
        return true;
      }
      else if (checkFour == true) {
        ratingFour == true;
        return true;
      }
      else if (checkFive == true) {
        ratingFive == true;
        return true;
      }
    }






