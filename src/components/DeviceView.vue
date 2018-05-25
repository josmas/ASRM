<template>
  <div class="device">
    <draggable v-model="list2" :options="{group: 'people'}">
      <ul>
        <li v-for="element in list2" :key="element.name">
          <v-btn>
            {{element.name}}
          </v-btn>
        </li>
      </ul>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DeviceView',
  components: {
    draggable
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list2: [{
        name: 'Johnson'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 60px;
}
li {
  margin: 10px 10px;
}
a {
  color: #42b983;
}
.device {
  background: url('../assets/android_device.png') no-repeat;
  min-width: 400px;
  min-height: 750px;
}
</style>
