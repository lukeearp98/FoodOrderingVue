<template>
  <div id="app">
    <Header>{{ $route.meta.header_text }}</Header>
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>


<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'


export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Footer
  },
  watch: {
      '$route':{
        handler: (to) => {
          document.title = to.meta.title || 'Your Website'
          document.querySelector("meta[name='description']").setAttribute("content",to.meta.description)
        },
         immediate: true
      }
    }
}
</script>


<style lang="scss">
/*font face declarations*/
@font-face {
    font-family: 'Roboto';
    src: url('/img/fonts/Roboto-Regular.woff2') format('woff2'), 
                url('/img/fonts/Roboto-Regular.woff') format('woff'),
                url('/img/fonts/Roboto-Regular.ttf') format('truetype'),
                url('/img/fonts/Roboto-Regular.eot') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}
 
@font-face {
    font-family: 'Raleway';
    src: url('/img/fonts/Raleway-Regular.woff2') format('woff2'), 
    url('/img/fonts/Raleway-Regular.woff') format('woff'),
    url('/img/fonts/Raleway-Regular.ttf') format('truetype'),
    url('/img/fonts/Raleway-Regular.eot') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
}
 
body {
background-color:rgb(243, 240, 240);
}
 
h1, h2, h3 {
    font-family:'Raleway','Roboto', Helvetica, Arial, sans-serif;
    margin: 0.5em 0;
}
 
h1 {
    font-size:1.8em;
    text-align:center;
}
 
h3 {
    margin: 1em 0;
}
/*Other mobile first styles */
 
#app {
font-family: 'Roboto', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
min-width:240px;
max-width:1000px;
width:100%;
margin:0 auto;
background: #f2f2f2;
}

main {
padding:1em;
margin:0;
}
 
</style>


