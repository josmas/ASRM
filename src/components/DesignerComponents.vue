<template>
  <div class="drag">
  <h1>{{ msg }}</h1>
    <h2>Draggable Components</h2>
    <draggable v-model="list" class="dragArea" :options="{group:{ name:'people',  pull:'clone', put:false }}">
      <v-btn v-for="element in list" :key="element.name">{{element.name}}</v-btn>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Components',
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
      }]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.dragArea {
  min-height: 10px;
}
</style>
