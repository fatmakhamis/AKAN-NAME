<script>

function getName () {
  let yearOfBirth = document.getElementById("year-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");

  // function to get gender
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);
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