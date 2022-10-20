<template>
  <nav>
    <ul>
      <li>
        <router-link to="/locations">
          <span class="navText">Locations</span>
        </router-link>
      </li>
      <li>
        <router-link to="/menu">
          <span class="navText">Menu</span>
        </router-link>
      </li>
      <li>
        <router-link to="/news">
          <span class="navText">News</span>
        </router-link>
      </li>
      <li>
        <router-link to="/currentOrder">
          <span class="navText">Current Order</span>
        </router-link>
      </li>
      <li>
        <router-link to="/foodComplaint">
          <span class="navText">Food Complaint</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: $theme_colour;
  flex-flow: row wrap;
}

nav li {
  flex-grow: 1;
  padding: 0;
  width: calc(20% - 2em);
  border: 1px $almost_black solid;
}

nav a {
  background-size: 45px 45px;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 50px;
}

nav li:nth-of-type(1) a {
  background-image: url(/img/appimages/map.svg);
}

nav li:nth-of-type(2) a {
  background-image: url(/img/appimages/menu.svg);
}

nav li:nth-of-type(3) a {
  background-image: url(/img/appimages/news.svg);
}
nav li:nth-of-type(4) a {
  background-image: url(/img/appimages/order.svg);
}
nav li:nth-of-type(5) a {
  background-image: url(/img/appimages/complaint.svg);
}
nav a {
  text-decoration: none;
  display: block;
  color: $almost_black;
  height: 100%;
  width: 100%;
}

.navText {
  position: absolute;
  top: -1200px;
}

/* Slightly larger screen - 1st media query */
@media only screen and (min-width: 450px) {
  nav a {
    background-position: center 2px;
  }

  .navText {
    display: block;
    position: relative;
    top: 0;
    text-align: center;
    padding-top: 48px;
  }
}

/* Desktop sized screen */
@media only screen and (min-width: 800px) {
  nav a {
    background-position: 5px center;
    display: block;
  }
  nav ul {
    justify-content: flex-end;
  }
  nav li {
    width: calc(20% - 2em);
    flex-grow: 1;
  }
  nav li:nth-of-type(1) {
    border-left: 2px solid $almost_black;
  }
  nav li:nth-of-type(5) {
    border-right: 2px solid $almost_black;
  }

  .navText {
    display: inline;
    text-align: left;
    padding-left: 53px;
    padding-top: 0;
  }

  nav a:hover {
    background: scale-color($theme_colour, $lightness: -30%);
    background-size: 45px 45px;
    background-repeat: no-repeat;
    background-position: 5px center;
  }
}
</style>
