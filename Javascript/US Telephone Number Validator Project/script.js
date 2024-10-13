const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

check.addEventListener("click", () => {
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/;

    if (!input.value) {
        alert("Please provide a phone number");
    } else if (regex.test(input.value)) {
        result.innerText = `Valid US number: ${input.value}`;
    } else {
        result.innerText = `Invalid US number: ${input.value}`;
    }
});

clear.addEventListener("click", () => result.innerText = "");
