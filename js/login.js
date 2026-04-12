<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ShowTrackr Login</title>
  <link rel="stylesheet" href="css/login.css">
</head>
<body>

 
   
  <div class="navbar">
    <div class="title-c">
    <div class="logo">ShowTrackr</div>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="add.html">Add</a></li>
    </ul>
</div>
    <div class="log-i">
      <a href="/login.html" class="btn-outline">Login</a>
      <a href="/singup.html">Sign up</a>
    </div>
  </div>

  
  <div class="container">
    <div class="card">
      <h2>Log in</h2>

     <input type="email" id="email" placeholder="Email">

     <input type="password" id="password" placeholder="Password">

<button class="btn-primary" id="loginBtn">Log in</button>

      <p class="link">Forgot your password?</p>
     <p class="link">Don't have an account? <span id="signupLink">Sign up</span></p>
      <div class="divider">or</div>

      <button class="btn-facebook">Sign in with Facebook</button>
      <button class="btn-google">Sign in with Google</button>
    </div>
  </div>
<script>

  let signup = document.getElementById("signupLink");

  signup.onclick = function () {
    window.location.href = "signup.html";
  };

 
  let users = [
    { email: "user1@gmail.com", password: "1234" },
    { email: "user2@gmail.com", password: "1234" },
    { email: "user3@gmail.com", password: "1234" },
    { email: "user4@gmail.com", password: "1234" },
    { email: "user5@gmail.com", password: "1234" }
  ];


  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let loginBtn = document.getElementById("loginBtn");

  loginBtn.onclick = function () {
    let email = emailInput.value;
    let password = passwordInput.value;

    let success = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        success = true;
      }
    }

    if (success) {
      alert("Login Successful");
    } else {
      alert("Login Unsuccessful");
    }
  };
</script>
</body>
</html>