export interface TrafficLightConfig {
    redDuration : number;
    yellowDuration : number;
    greenDuration : number;
}
export enum TrafficLightState {
    RED,
    YELLOW,
    GREEN,
}

// get traffic light string, for test purpose only
export function enumToString(color : TrafficLightState) : string {
    switch (color) {
        case TrafficLightState.RED:
            return "red";
        case TrafficLightState.YELLOW:
            return "yellow";
        case TrafficLightState.GREEN:
            return "green";
        default:
            return ""
    }
}

export class TrafficLight {
    private config: TrafficLightConfig;

    private state: TrafficLightState = TrafficLightState.RED;

    private timeLeft  = 0;

    constructor (config : TrafficLightConfig) {
        this.config = config;
        this.timeLeft = this.config.redDuration;
    }

    /* simulate one second passing */
    public tick() {
        this.timeLeft--;
        
        if (this.timeLeft === 0) {
            switch (this.state) {
                case TrafficLightState.RED:
                    this.state = TrafficLightState.GREEN;
                    this.timeLeft = this.config.greenDuration;
                    break;
                case TrafficLightState.YELLOW:
                    this.state = TrafficLightState.RED;
                    this.timeLeft = this.config.redDuration;
                    break;
                case TrafficLightState.GREEN:
                    this.state = TrafficLightState.YELLOW;
                    this.timeLeft = this.config.yellowDuration;
                    break;
                default:
                    
            }
        }
    }

    public setTimeLeft(time: number) {
        this.timeLeft = time;
    }
    
    // get time left, for test purpose only
    public getTimeLeft() : number {
        return this.timeLeft;
    }
    
    public getState() {
        return this.state;
    }

    // set color traffic light color, for test purpose only
    public setState(state : TrafficLightState) {
        this.state = state;
    }
}