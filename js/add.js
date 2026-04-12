<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ShowTrackr</title>
  <link rel="stylesheet" href="css/add.css">
</head>
<body>

  
  <header class="navbar">
    <div class="title-a">
    <div class="logo">ShowTracker</div>

    <nav>
      <a href="index.html">Home</a>
      <a href="add.html">Add</a>
    </nav>
</div>
    <div class="log-a">
      <a href="/login.html">Login</a>
      <a href="/singup.html">Sign up</a>
    </div>
  </header>

  
  <main class="container">
    <div class="card">
      <h3>ADD TV SHOW</h3>

      <label>Name</label>
    <p id="message"></p>
<input type="text" id="showName" placeholder="Enter TV Show Name" />
<button id="addBtn">Add</button>
    </div>
  </main>
<script>
  let input = document.getElementById("showName");
  let message = document.getElementById("message");
  let button = document.getElementById("addBtn");

  button.onclick = function () {
    let name = input.value;
    let first = name[0];

  
    if (name === "") {
      message.innerHTML = "Please enter TV Show name";
      message.style.color = "red";
    }

  
    else if (
      (first >= "A" && first <= "Z") ||
      (first >= "a" && first <= "z")
    ) {
      message.innerHTML = name + " has been added";
      message.style.color = "green";
    }

    else {
      message.innerHTML = "Invalid TV Show name";
      message.style.color = "red";
    }
  };
</script>
</body>
</html>