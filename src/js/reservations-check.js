function validateForm() {
    //Get variables from the form "bookingForm"
    let userName = document.forms["bookingForm"]["userName"].value;
    let numberCustomers = document.forms["bookingForm"]["numberCustomers"].value;
    let dateTime = document.forms["bookingForm"]["bookingTime"].value;
    let dni = document.forms["bookingForm"]["dni"].value;
    let formatDate = new Date(dateTime);
    let check = "";

    if (userName == "") {
        check += "El nombre es obligatorio.\n";
    }

    if (!validateDNI(dni)){
        check += "DNI incorrecto.\n"
    }

    if (numberCustomers == "") {
        check += "Seleccione la cantidad de comensales.\n";
    }

    if (dateTime == "") {
        check += "Marque una fecha.\n";
    }

    if (check != "") {
        alert(check);
        return false;
    } else {
        alert("Reserva realizada con éxito a nombre de " + userName + " con numero de identificacion " + dni + " para " + numberCustomers + " a las " + dateTime);
        return true;
    }
}

function validateDNI(value){

    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var str = value.toString().toUpperCase();

    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

    var nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;

    if (validChars.charAt(charIndex) === letter) return true;

    return false;
}