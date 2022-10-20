<template>
  <div class="post">
    <h1>{{menuItem.Name}}</h1>
    <h2>{{menuItem.Description}}</h2>
    <p>{{menuItem.Category}}</p>
    <p>£{{menuItem.Price}}</p>
    <button class="button" id="addBtn" @click="addItems">Add</button>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["menuItem"],
  methods: {
    addItems: function() {
      var itemList = [];
      alert(this.menuItem.Name + " has been added to your order.");
      if (localStorage.getItem("orderList")) {
        itemList = JSON.parse(localStorage.getItem("orderList"));
        itemList.push(this.menuItem);
        itemList = JSON.stringify(itemList);
        localStorage.setItem("orderList", itemList);
      } else {
        itemList.push(this.menuItem);
        localStorage.orderList = JSON.stringify(itemList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin: 0.8em 0.2em;
  box-sizing: border-box;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: rgba(255, 224, 179, 0.2);
  display: grid;
}

img {
  width: 100%;
  padding: 0;
  max-width: 290px;
  height: auto;
  margin: 0 auto;
  display: block;
}
h2,
p {
  width: 90%;
  padding: 0;
  margin: 5px auto;
}
.button {
  padding: 10px;
  background-color: scale-color($theme_colour, $lightness: -30%);
  color: $almost_black;
  text-decoration: none;
  font-weight: bold;
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5em;
  align-self: self-end;
}

@media only screen and (min-width: 450px) {
  .post {
    width: calc(50% - 0.8em);
  }
}

@media only screen and (min-width: 800px) {
  .post {
    width: calc(33% - 1em);
  }
}
</style>
