// @ts-nocheck
declare interface Projectile {
    mover_line(mover_data: Mover.CreateData.Line): Mover;
    mover_target(mover_data: Mover.CreateData.Target): Mover;
    mover_curve(mover_data: Mover.CreateData.Curve): Mover;
    mover_round(mover_data: Mover.CreateData.Round): Mover;
    break_mover(): void;
    remove_mover(): void;
}
