<script>

// validation functions
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
alert('Invalid date format!');
     } else {
      return true;
    }
  }

  function dayValidator () {
    if (dayOfBirth <=0 && dayOfBirth >31) { 
alert('Invalid date format!');

   
      } else {
        return true;
  }
</script>