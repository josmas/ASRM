<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="drag">
      <h2>Draggable Components</h2>
      <draggable v-model="list" class="dragArea" :options="{group:{ name:'people',  pull:'clone', put:false }}">
        <v-btn v-for="element in list" :key="element.name">{{element.name}}</v-btn>
      </draggable>
    </div>
    <hr/>
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
      list: [{
        name: 'John'
      }, {
        name: 'Joao'
      }, {
        name: 'Jean'
      }, {
        name: 'Edgard'
      }],
      list2: [{
        name: 'Johnson'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
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
.dragArea {
  min-height: 10px;
}
.device {
  background: url('../assets/android_device.png') no-repeat;
  min-width: 400px;
  min-height: 750px;
}
</style>
