import { Table } from "./Table";

import { Race } from "./Race";
import { Dice } from "./Dice";

export class GoodRaceTable extends Table {
    constructor() {
        super([Dice.D66], [
            {min:11,max:16, probability: Dice.D66.probability(11,16), result: 'Basic Race'}
        ]);
    }
}