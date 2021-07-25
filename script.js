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
}