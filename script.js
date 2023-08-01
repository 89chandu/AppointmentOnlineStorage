// Get the "Get a call" button element
const callButton = document.getElementById('call-button');

// Function to save form data to local storage and cookie
function saveFormDataToStorage(formData) {

    // store data in network storage

    axios.post("https://crudcrud.com/api/6c66a1e25b114c618ad859c05c50021b/appointmentData",obj)
       .then((respons) => {
        showNewUserOnScreen(respone.data)
        console.log(respone)

       })
       .catch((err) => {
        console.log(err)
       })


    // Store the form data in local storage
    // localStorage.setItem('formData', JSON.stringify(formData));

    // Store the form data in a cookie with an expiration date (here, we set it to expire in 7 days)
    Cookies.set('formData', JSON.stringify(formData), { expires: 7 });
}

// Function to load and populate form fields with data from local storage and cookie (if available)
function loadFormDataFromStorage() {
    const localFormData = localStorage.getItem('formData');
    if (localFormData) {
        const parsedFormData = JSON.parse(localFormData);
        document.getElementById('username').value = parsedFormData.name;
        document.getElementById('email').value = parsedFormData.email;
        document.getElementById('number').value = parsedFormData.phone;
        document.getElementById('date-input').value = parsedFormData.date;
        document.getElementById('time-input').value = parsedFormData.time;
    }

    const cookieFormData = Cookies.get('formData');
    if (cookieFormData) {
        const parsedFormData = JSON.parse(cookieFormData);
        document.getElementById('username').value = parsedFormData.name;
        document.getElementById('email').value = parsedFormData.email;
        document.getElementById('number').value = parsedFormData.phone;
        document.getElementById('date-input').value = parsedFormData.date;
        document.getElementById('time-input').value = parsedFormData.time;
    }
}

// Add click event listener to the "Get a call" button
callButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const date = document.getElementById('date-input').value;
    const time = document.getElementById('time-input').value;

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time
    };

    // Save the form data to local storage and cookie
    saveFormDataToStorage(formData);

    // You can optionally show a success message or perform other actions here.
    alert('Form data saved successfully!');
});

// Load and populate form fields with stored data on page load
document.addEventListener('DOMContentLoaded', function() {
    loadFormDataFromStorage();
});
