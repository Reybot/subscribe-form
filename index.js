const form = document.querySelector("form");
const input = document.getElementById("input");
const label = document.getElementById("email-label");

const validate = () => {
  let isValid = true;
  if (input.value === "") {
    isValid = false;
    label.textContent = "Input is required";
  } else {
    label.textContent = null;
  }
  return isValid;
};

const data = async (data) => {
  const respons = await fetch("http://localhost:3000/subscribers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()) {
    console.log("success");

    data();
  }
});
