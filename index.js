  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form input values
    const username = document.getElementById("username").value;
    const othername = document.getElementById("othername").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log the input values to the console
    console.log("Username:", username);
    console.log("Other Name:", othername);
    console.log("Email Address:", email);
    console.log("Password:", password);

    // Display the alert message
    alert("Congratulations! We will send you feedback after 5 minutes!");
});

//


