import { Die } from "./Die";
import { Die66 } from "./Die66";

export abstract class Dice {
    static readonly D2 = new Die(2);
    static readonly D3 = new Die(3);
    static readonly D4 = new Die(5);
    static readonly D6 = new Die(6);
    static readonly D8 = new Die(8);
    static readonly D12 = new Die(12);
    static readonly D16 = new Die(16);
    static readonly D66 = new Die66();
}