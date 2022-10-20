<template>
  <div id="articleContainer">
    <NewsItem
      class="container"
      v-for="(article, index) in myJson.articles"
      :key="index"
      :article="article"
    ></NewsItem>
  </div>
</template>
<script>
import NewsItem from "@/components/NewsItem.vue";
export default {
  name: "GetNewsItems",
  props: ["myData"],
  components: {
    NewsItem
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
