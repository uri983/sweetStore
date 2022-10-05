<template>
  <div>
    <div class="h-80" ref="map"></div>
  </div>
</template>
<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'MapsAutocomplete',
  components: {},
  data() {
    return {
      location: { coords: {} },
      lat: null,
      lng: null,
      address: null,
      resultArray: [],
      addressData: {
        addressText: null,
        address: null,
        zipcode: null,
        stateName: null,
        stateCode: null,
        countryName: null,
        countryCode: null,
        region: null,
        street_number: null,
        route: null,
        neighborhood: null,
        city: null,
      },
      city: null,
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    Title: {
      type: String,
      default: 'Procesando',
    },
    Subtitle: {
      type: String,
      default: 'Esto pude tardar unos minutos.',
    },
  },
  // Watch URL query for pagination changes (triggers fetch method again)
  // https://nuxtjs.org/api/pages-watchquery/
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      } else {
        console.log('No permite ubicacion');
      }
    },
    onChangeMap(formattedAddress, addressComponents) {
      this.address = formattedAddress;
      this.resultArray = addressComponents;
      this.addressData.lat = this.lat;
      this.addressData.lng = this.lng;
      this.addressData.addressText = formattedAddress;
      for (let i = 0; i < this.resultArray.length; i++) {
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'locality'
        ) {
          this.addressData.city = this.resultArray[i].long_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'administrative_area_level_1'
        ) {
          this.addressData.stateName = this.resultArray[i].long_name;
          this.addressData.stateCode = this.resultArray[i].short_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'country'
        ) {
          this.addressData.countryName = this.resultArray[i].long_name;
          this.addressData.countryCode = this.resultArray[i].short_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'postal_code'
        ) {
          this.addressData.zipcode = this.resultArray[i].long_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'neighborhood'
        ) {
          this.addressData.neighborhood = this.resultArray[i].long_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'route'
        ) {
          this.addressData.route = this.resultArray[i].long_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types[0] === 'street_number'
        ) {
          this.addressData.street_number = this.resultArray[i].long_name;
        }
        if (
          this.resultArray[i].types[0] &&
          this.resultArray[i].types.includes('sublocality')
        ) {
          this.addressData.region = this.resultArray[i].long_name;
        }
      }
      this.$emit('onChange', this.addressData);
    },
  },
  async mounted() {
    const location = await this.getLocation();
    this.lat = location.coords.latitude;
    this.lng = location.coords.longitude;
    const loader = new Loader({
      apiKey: process.env.gApiToken,
      version: 'weekly',
      libraries: ['places'],
    });

    const mapOptions = {
      center: {
        lat: Number(this.lat),
        lng: Number(this.lng),
      },
      zoom: 15,
    };
    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(this.$refs.map, mapOptions);
        const centerMarker = document.createElement('div');
        centerMarker.classList.add('centermarker');
        this.$refs.map.append(centerMarker);
        console.log(map);
        const position = new google.maps.Marker({
          position: {
            lat: Number(this.lat),
            lng: Number(this.lng),
          },
          map,
          icon: 'http://maps.gstatic.com/mapfiles/markers2/marker.png',
          title: 'Entregar aqui',
        });
        /* const searchBox = new google.maps.places.SearchBox(
          this.$refs.mapSearch,
        ); */
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode(
          { latLng: position.getPosition() },
          function (result, status) {
            if (status === 'OK') {
              // This line can also be written like if ( status == google.maps.GeocoderStatus.OK ) {
              $this.onChangeMap(
                result[0].formatted_address,
                result[0].address_components,
              );
              console.log(result[0]);
            } else {
              console.log(
                'Geocode was not successful for the following reason: ' +
                  status,
              );
            }
          },
        );
        const $this = this;
        google.maps.event.addListener(map, 'dragend', function () {
          position.setPosition(this.getCenter()); // set marker position to map center
          $this.lat = this.getCenter().lat();
          $this.lng = this.getCenter().lng();
          geocoder.geocode(
            { latLng: position.getPosition() },
            function (result, status) {
              if (status === 'OK') {
                // This line can also be written like if ( status == google.maps.GeocoderStatus.OK ) {
                $this.onChangeMap(
                  result[0].formatted_address,
                  result[0].address_components,
                );
                console.log(result[0]);
              } else {
                console.log(
                  'Geocode was not successful for the following reason: ' +
                    status,
                );
              }
            },
          );
        });
        console.log(position);
      })
      .catch((e) => {
        // do something
      });
  },
};
</script>
<style>
.centermarker {
  position: absolute;
  background: url('http://maps.gstatic.com/mapfiles/markers2/marker.png')
    no-repeat;
  top: 50%;
  left: 50%;
  z-index: 1;
  margin-left: -10px;
  margin-top: -34px;
  height: 34px;
  width: 20px;
  cursor: pointer;
}
</style>
