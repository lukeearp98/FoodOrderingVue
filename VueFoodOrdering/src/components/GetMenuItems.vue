<template>
  <div id="articleContainer">
    <MenuItem
      class="container"
      v-for="(menuItem, index) in myJson.menuItems"
      :key="index"
      :menuItem="menuItem"
    ></MenuItem>
  </div>
</template>
<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  name: "GetMenuItems",
  props: ["myData"],
  components: {
    MenuItem
  },
  data() {
    return {
      //myJson: json
      myJson: []
    };
  },
  created() {
    // Fetch Data
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(this.myData)
        .then(stream => stream.json())
        .then(data => (this.myJson = data))
        .catch(error => console.error(error));
    }
  }
};
</script>



<style>
#articleContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
