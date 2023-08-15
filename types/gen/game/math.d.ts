// @ts-nocheck
declare interface Math {
    get_random_angle(): number;
    random_float(min: number, max: number): number;
    sin(value: number): number;
    cos(value: number): number;
    tan(value: number): number;
    asin(value: number): number;
    acos(value: number): number;
    atan(y: number, x: number): number;
    includedAngle(r1: number, r2: number): [
        number,
        number
    ];
    isBetween(number: number, min: number, max: number): boolean;
    get_random_seed(): number;
}
