import { TrafficLight, TrafficLightConfig, TrafficLightState, enumToString } from './betterTrafficLight'

describe('tests for timer', () => {
    test("after 17, time should be 16", () => {
        const trafficLightConfig :TrafficLightConfig = {
            redDuration: 20,
            greenDuration: 30,
            yellowDuration: 3
        }
        const light = new TrafficLight(trafficLightConfig) 
        light.setTimeLeft(17)
        light.tick()
        expect(light.getTimeLeft()).toBe(16)
    })

        test("after 1, time should be 30", () => {
        const trafficLightConfig :TrafficLightConfig = {
            redDuration: 20,
            greenDuration: 30,
            yellowDuration: 3
        }
        const light = new TrafficLight(trafficLightConfig) 
        light.setTimeLeft(1)
        light.tick()
        expect(light.getTimeLeft()).toBe(30)
    })

})

function testcolor(color: TrafficLightState, time: number, expectedColor: TrafficLightState) {
    test(`after ${time}, ${enumToString(color)} should change to ${enumToString(expectedColor)}`, () => {
        const trafficLightConfig :TrafficLightConfig = {
            redDuration: 20,
            greenDuration: 30,
            yellowDuration: 3
        }
        const light = new TrafficLight(trafficLightConfig)
        light.setTimeLeft(time);
        light.setState(color);
        light.tick()
        expect(light.getState()).toEqual(expectedColor)
    })
}

describe('tests for colors', () => {
    testcolor(TrafficLightState.RED, 7, TrafficLightState.RED)
    testcolor(TrafficLightState.RED, 1, TrafficLightState.GREEN)
    testcolor(TrafficLightState.GREEN, 1, TrafficLightState.YELLOW)
    testcolor(TrafficLightState.YELLOW, 1, TrafficLightState.RED)
})





