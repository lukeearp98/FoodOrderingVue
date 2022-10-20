<template>
  <div id="app">
    <main>
    <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else>
      <img :src="image" id="image"/>
      <button @click="removeImage">Remove Image</button>
      <button @click="saveImage">Save Image</button>
    </div>
    </main>
  </div>
</template>

<style>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  margin-top: 100px;
}
input {
  margin-bottom: 100px;
}
h2,
p {
  width: 90%;
  padding: 0;
  margin: 5px auto;
}
</style>
<script>
export default {
  data() {
    return {
      image: ""
    };
  },
  created()
  {
    this.image = localStorage.getItem('img');
  },
  methods: {
    get(key) {
      this.image = localStorage.getItem(key);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function() {
      this.image = "";
      localStorage.removeItem("img");
    },
    saveImage: function()
    {
        localStorage.setItem('img', document.getElementById('image').src);
        alert("Image has been saved.")
    }
  }
};
</script>