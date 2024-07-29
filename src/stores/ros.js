import { defineStore } from 'pinia'

export const useRosStore = defineStore('ros', {
    state: () => {
        return {
            distances : [0,0,0,0,0,0],
        }
    },
    getters: {
        
        // doubleCount: (state) => state.count * 2
    },
    actions: {
        // increment() {
        //     this.count++
        // }
        updateDis(distances)  {
            this.distances = distances;
        }
    }
})