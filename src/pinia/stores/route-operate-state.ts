import { ref } from 'vue'
import { defineStore } from 'pinia'

export enum RouteOperateState {
  forward,
  replace,
  back
}

export const useRouteOperateState = defineStore('routeOperateState', () => {
  const routeOperateState = ref<RouteOperateState>()
  function updateRouteOperateState(state: RouteOperateState) {
    routeOperateState.value = state
  }
  return { routeOperateState, updateRouteOperateState }
})
