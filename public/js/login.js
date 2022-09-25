async function loginFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (user && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

//signup form
async function signupFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector("#user-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (user && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        user,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener(".signup-form", loginFormHandler);
