<template>
  <div class="designer-container">
    <designer-components></designer-components>
    <device-view></device-view>
  </div>
</template>

<script>
import DeviceView from './DeviceView'
import DesignerComponents from './DesignerComponents'
export default {
  components: {DesignerComponents, DeviceView}
}
</script>

<style scoped>

</style>
