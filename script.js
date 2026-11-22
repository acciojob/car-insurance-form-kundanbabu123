
const form = document.getElementById("insuranceForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;
    const cars = document.getElementById("cars").value;
    const carage = document.getElementById("carage").value;
    const dop = document.getElementById("dop").value;
    const password = document.getElementById("password").value;

    // Display success message
    document.getElementById("message").innerText =
        "Registration Successful! Welcome " + name;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Car Brand:", cars);
    console.log("Car Age:", carage);
    console.log("Date of Purchase:", dop);

    form.reset();
});
