const inputData = document.querySelector("#input-data")

inputData.addEventListener('input', function () {
    toCheck();
});

function toCheck() {
    return validateInput(inputData, /^\w+@\w+(\.\w{2,3})$/) || validateInput(inputData,/^(0|\+\d{2})\d{9}$/ );
}

function validateInput(input, regex) {
    if (regex.test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}