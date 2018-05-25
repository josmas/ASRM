<template>
  <div class="drag">
  <h1>{{ msg }}</h1>
    <h2>Draggable Components</h2>
    <draggable class="drag-area" element="ul" v-model="list" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
      <transition-group type="transition" :name="'flip-list'">
        <li class="list-group-item" v-for="(element, index) in list" :key="index">
          <v-btn>
            {{element.name}}
          </v-btn>
        </li>
      </transition-group>
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
        name: 'John',
        fixed: false
      }, {
        name: 'Joao',
        fixed: false
      }, {
        name: 'Jean',
        fixed: false
      }, {
        name: 'Edgard',
        fixed: false
      }],
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    dragOptions () {
      return {
        sort: false,
        group: {
          name: 'people',
          pull: 'clone',
          put: false
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag'
      }
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.drag-area {
  min-height: 20px;
}
</style>
