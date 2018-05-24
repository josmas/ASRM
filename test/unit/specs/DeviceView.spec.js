import Vue from 'vue'
import DeviceView from '@/components/DeviceView'

describe('DeviceView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(DeviceView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.device h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
