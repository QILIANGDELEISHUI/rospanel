import { defineStore } from 'pinia'

export const useRosStore = defineStore('ros', {
    state: () => {
        return {
            distances : [0,0,0,0,0,0],
            battery : {
                electricity :90,
                charging:true,
                power:1,
                capacity:4,
                temperature:40,
            },
            batterySetting: {
                showText:true,
                rotate: "0",
            }

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
        },
        updateBattery(battery) {
            this.battery = battery;
        },
        updateBatterySetting(showText) {
            this.batterySetting.showText = showText;
        }
    }
})