import { dir } from 'console';
import { Die } from './Die';

export abstract class Table {
    constructor(private dice:Die[], private rows:Array<ResultRow>) {

    }

    roll() : any {
        let roll = this.dice.map(die => die.roll().result).reduce((p,c) => p + c);
        let result = this.rows.find(r => r.max >= roll && r.min <= roll);
        return result?.result;
    }
}

export interface ResultRow {
    probability:number;
    min:number;
    max:number;
    result:any;
}