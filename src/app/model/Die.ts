import { Die66 } from "./Die66";

export class Die {

    readonly  name: string;


        
    constructor(protected size: number) {
        this.name = `D${this.size}`;
    }


    roll(): RollResult {
        return {
            name: this.name,
            size: this.size,
            result: this.rollSingle(this.size)
        }

    }

    probability(min:number, max:number) {
        return ((max - min) + 1) / this.size;
    }

    protected rollSingle(size: number) {
        return 1 + Math.floor(Math.random() * size);
    }
}

export interface RollResult {
    name: string;
    size: number;
    result: number;
}