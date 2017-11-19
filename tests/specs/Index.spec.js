import Vue from 'vue'
import { expect } from 'chai'
import Index from '@/components/Index.vue'

Vue.config.productionTip = false

describe('Index.vue', () => {
  it('should have a proper title.', () => {
    const Compoment = Vue.extend(Index)
    const vm = new Compoment().$mount()

    expect(vm.$el.querySelector('h1.title').textContent).to.equal('Hi.')
  })
})
