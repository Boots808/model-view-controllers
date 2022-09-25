async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const responses = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (responses.ok) {
      document.location.replace("/");
    } else {
      alert(responses.statusText);
    }
  } else {
    alert(responses.statusText);
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
