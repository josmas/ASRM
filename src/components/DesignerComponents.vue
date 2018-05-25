<template>
  <div class="drag">
  <h1>{{ msg }}</h1>
    <h2>Draggable Components</h2>
    <draggable class="drag-area" element="ul" v-model="list" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
      <transition-group type="transition" :name="'flip-list'">
        <li class="list-group-item" v-for="(element, index) in list" :key="index">
          <p class="text-xs-left">
            <v-icon>{{element.icon}}</v-icon>
              {{element.name}}
          </p>
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
        name: 'Text',
        fixed: false,
        icon: 'text_fields'
      }, {
        name: 'Date Picker',
        fixed: false,
        icon: 'date_range'
      }, {
        name: 'Time Picker',
        fixed: false,
        icon: 'access_time'
      }, {
        name: 'Address',
        fixed: false,
        icon: 'add_location'
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

ul {
  border-top: dashed #7f7f7f 1px;
  border-left: dashed #7f7f7f 1px;
  border-right: dashed #7f7f7f 1px;
}

li {
  border-bottom: dashed #7f7f7f 1px;
}
</style>
