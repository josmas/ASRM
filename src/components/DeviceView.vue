<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="drag">
      <h2>List 1 Draggable</h2>
      <draggable v-model="list" class="dragArea" :options="{group:'people'}">
        <div v-for="element in list" :key="element.name">{{element.name}}</div>
      </draggable>
      <h2>List 2 Draggable</h2>
      <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
        <div v-for="element in list2" :key="element.name">{{element.name}}</div>
      </draggable>
    </div>
    <div class="device">
      <img src="../assets/android_device.png">
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
      }],
      list2: [{
        name: 'Juan'
      }, {
        name: 'Edgard'
      }, {
        name: 'Johnson'
      }]
    }
  },
  methods: {
    add: function () {
      this.list.push({
        name: 'Juan'
      })
    },
    replace: function () {
      this.list = [{
        name: 'Edgard'
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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
