import Vue from 'vue'
import component from './components/component.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('component', component)
}