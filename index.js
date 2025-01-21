document.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.getElementById("loginBox");
  const signupBox = document.getElementById("signupBox");
  const welcomeBox = document.getElementById("welcomeBox");
  const userNameSpan = document.getElementById("userName");

  // Buttons
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");

  // User data (temporary for demo)
  const users = [];

  // Show signup form
  showSignup.addEventListener("click", () => {
      loginBox.style.display = "none";
      signupBox.style.display = "block";
  });

  // Show login form
  showLogin.addEventListener("click", () => {
      signupBox.style.display = "none";
      loginBox.style.display = "block";
  });

  // Handle signup
  signupBtn.addEventListener("click", () => {
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;

      if (name && email && password) {
          users.push({ name, email, password });
          alert("Signup successful! Please log in.");
          signupBox.style.display = "none";
          loginBox.style.display = "block";
      } else {
          alert("Please fill in all fields.");
      }
  });

  // Handle login
  loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
          userNameSpan.textContent = user.name;
          loginBox.style.display = "none";
          welcomeBox.style.display = "block";
      } else {
          alert("Invalid email or password.");
      }
  });
});
