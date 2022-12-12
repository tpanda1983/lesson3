function completeAndRedirect() {
    var form = document.forms['myform'];
    text.innerHTML = "Веденні вами дані: " +
        "<br> Salutation: " + form.elements.salutation.value
        + "<br> First name: " + form.elements.firstname.value + "<br> Last name: " + form.elements.lastname.value + "<br> Gender: " + form.elements.gender.value + "<br> Email: " + form.elements.email.value + "<br> Date of Birth: " + form.elements.date_birth.value + "<br> Address: " + form.elements.address.value;
}