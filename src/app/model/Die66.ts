import { Die, RollResult } from "./Die";

export class Die66 extends Die {

    private readonly numberOfPossibleValues = 6 * 6;
    possibleValues: number[];
    
    constructor() {
        super(66);
        this.possibleValues = [];
        for(let x = 1; x <= 6; x++) {
            for(let y = 1; y <= 6;y++) {
                this.possibleValues.push((x*10) + y);
            }
        }
    }
    
    override roll(): RollResult {
        return {
            name: this.name,
            size: this.size,
            result: [6,6].reduce((p,c) => (p * 10) + this.rollSingle(c))
        }
    }
    override probability(min:number, max:number) {
        // use as numbers of base 6 for easy maths
        let values = 1 + this.possibleValues.indexOf(max) - this.possibleValues.indexOf(min);
        return values / this.numberOfPossibleValues;
    }
}