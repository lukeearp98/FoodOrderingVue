<template>
  <footer>
    <nav>
      <ul>
        <li id="logout">
          <a @click="logout" href="#">Logout</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>
 
<style lang="scss" scoped>
footer {
  background: #3d453e;
  padding: 1em;
  color: $theme_colour;
}

footer a {
  text-decoration: none;
  color: $theme_colour;
  line-height: 1.7;
}

footer ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

footer a:hover {
  text-decoration: underline;
  color: scale-color($theme_colour, $lightness: 30%);
}
</style>
<script>
import * as firebase from "firebase";

export default {
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });

      localStorage.setItem("storedUser", "");
    }
  }
};
</script>