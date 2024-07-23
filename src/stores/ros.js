import { defineStore } from 'pinia'

export const useRosStore = defineStore('ros', {
    state: () => {
        return {
            distances : [0,1,2,3,4,5],
        }
    },
    getters: {
        
        // doubleCount: (state) => state.count * 2
    },
    actions: {
        // increment() {
        //     this.count++
        // }
    }
})