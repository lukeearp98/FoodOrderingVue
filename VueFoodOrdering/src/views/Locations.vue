<template>
  <div class="ui grid">
    <div class="six wide column">
      <form class="ui segment large form">
        <div class="contentcontainer">
          <button type="button" @click="findNearbyButtonPressed()">Find Nearby Restaurants</button>
          <gmap-map class="gmap" :center="center" :zoom="12">
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
        </div>
      </form>
    </div>
    <div class="ten wide column segment ui" ref="map"></div>
  </div>
</template>


<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    },
    geolocate: function() {
      
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    findNearbyButtonPressed() {
      var URL =
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        this.center.lat +
        "," +
        this.center.lng +
        "&type=restaurant&radius=1000&key=AIzaSyDNFRkBeCc6lN3UULDV044cstJL84OVsS0";
        this.geolocate();
      console.log(URL);
      fetch(URL, { mode: "cors" })
        .then(stream => stream.json())
        .then(data => {
          this.places = data.results;
          this.addLocationsToGoogleMaps();
        })
        .catch(error => {
          console.log(error);
        });
    },
    addLocationsToGoogleMaps() {
      this.places.forEach(place => {
        var lat = place.geometry.location.lat;
        var lng = place.geometry.location.lng;

        this.markers.push({ position: { lat: lat, lng: lng } });
      });
    }
  }
};
</script>
<style lang="scss">
.gmap {
  width: 80%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}
.contentcontainer {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
button {
  background-color: $theme_colour;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>