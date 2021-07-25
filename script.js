function akanName(){
    event.preventDefault();
    //collect form data
    var getdate = document.getElementById("dayofbirth").value;

    try {

        if (getdate == "") throw "Empty"
    }

    catch {
        document.getElementById("enterDate").innerHTML = "*Date field required"
        
   }

   //get day of the date

   var date = new Date(getdate);
   var dayofbirth = date.getDay();

   //store akan names in Arrays

   var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

   //Find male akan name form dayofbirth

   if (document.getElementById("male").checked && (getdate != "")) {

    document.getElementById("yourname").innerHTML =
     "According to your gender, your Akan name is: " + "<strong>" +
     male[dayofbirth] + "</strong>";

    }
}