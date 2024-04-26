let user = document.getElementById("date");
user.max = new Date().toISOString().split("T")[0];

function ageCheck() {
  let ageDate = new Date(user.value);

  let date1 = ageDate.getDate();
  let month1 = ageDate.getMonth() + 1;
  let year1 = ageDate.getFullYear();

  let today = new Date();

  let date2 = today.getDate();
  let month2 = today.getMonth() + 1;
  let year2 = today.getFullYear();

  
}
