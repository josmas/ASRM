<template>
  <draggable elemet="span" v-model="list2" :options="dragOptions" :move="onMove">
    <transition-group name="no" class="device" tag="ul">
      <li v-for="(element, index) in list2" :key="index">
        <v-btn>
          {{element.name}}
        </v-btn>
      </li>
    </transition-group>
  </draggable>
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
      list2: []
    }
  },
  methods: {
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  computed: {
    dragOptions () {
      return {
        group: { name: 'people' },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        disabled: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.device {
  background: url('../assets/android_device.png') no-repeat;
  min-width: 400px;
  min-height: 750px;
}
</style>
