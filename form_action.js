function validateForm() {
    var x = document.forms["myForm"]["imie"].value;
    if (x == "") {
      alert('Prosze wypełnić pole "Imie"');
      return false;
    }
  }