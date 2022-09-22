const customerContainer = document.querySelector("#customer_container")

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

function buildDirectory(customerArray) {
    for (let customer of customerArray) {
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer");
        let customerImage = document.createElement("img");
        let name = document.createElement("h3");
        let email = document.createElement("p");
        let address = document.createElement("p");
        let state = document.createElement("p");
        let dateOfBirth = document.createElement("p");
        let customerSince = document.createElement("p");
        email.classList.add("gray")
        customerImage.src = customer.picture.medium;
        name.innerText = `${capitalizeFirstLetter(customer.name.title)} ${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`;
        email.innerText = `${customer.email}`
        address.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        state.innerText = `${customer.location.city},  ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
        dateOfBirth.innerText = `DOB: ${moment(customer.dob.date).format('MMM Do, YYYY')}`
        customerSince.innerText = `Customer since: ${moment(customer.registered.date).format('MMM Do, YYYY')}`
        customerDiv.appendChild(customerImage);
        customerDiv.appendChild(name);
        customerDiv.appendChild(email);
        customerDiv.appendChild(address);
        customerDiv.appendChild(state);
        customerDiv.appendChild(dateOfBirth);
        customerDiv.appendChild(customerSince);
        customerContainer.appendChild(customerDiv);
    }
}
buildDirectory(customers);