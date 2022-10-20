<template>
<div>
<main>
<h2>Current Order</h2>
<div id="articleContainer">
    <li class = "post" v-for="item in addedItems" :key="item.Name">
    <h1>{{item.Name}}</h1>
    <h2>{{item.Description}}</h2>
    <p>{{item.Category}}</p>
    <p>£{{item.Price}}</p>
    </li>
</div>
<button id="clearSelections" @click="clearSelections">Clear Menu</button>
</main>
</div>
</template>


<script>
export default {
data: function()
{
    return{
        addedItems: JSON.parse(localStorage.getItem('orderList'))
    }
  },
methods:
{
    clearSelections: function()
    {
        this.addedItems = "";
        localStorage.orderList = [];
    }
}

}
</script>
<style>
    #articleContainer
    {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    }
    .post {
  margin: 0.8em 0.2em;
  box-sizing: border-box;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: rgba(255, 224, 179, 0.2);
  display: grid;
}
h2,
p {
  width: 90%;
  padding: 0;
  margin: 5px auto;
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

