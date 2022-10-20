<template>
  <div class="container">
    <label for="email">
      <b>Email</b>
    </label>
    <input id="email" type="text" placeholder="Enter Username" name="email" required />

    <label for="password">
      <b>Password</b>
    </label>
    <input id="password" type="password" placeholder="Enter Password" name="password" required />

    <button type="submit" @click="login">Login</button>
    <button type="submit" @click="register">Register</button>
  </div>
</template>
<script>
import * as firebase from "firebase";

export default {
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          document.getElementById("email").value,
          document.getElementById("password").value
        )
        .then(() => {
          localStorage.setItem(
            "storedUser",
            document.getElementById("email").value
          );
          this.$router.replace("Menu");
        })
        .catch(err => {
          alert(err.message);
          this.error = err.message;
        });
    },
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          document.getElementById("email").value,
          document.getElementById("password").value
        )
        .then(() => {
          localStorage.setItem(
            "storedUser",
            document.getElementById("email").value
          );

          this.$router.replace("Menu");
        })
        .catch(err => {
          alert(err.message);
          this.error = err.message;
        });
    }
  }
};
</script>
<style lang="scss">
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: $theme_colour;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>