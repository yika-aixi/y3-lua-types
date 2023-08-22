//@ts-nocheck
declare interface Projectile {
    /**
    * 创建直线运动器
    * @param mover_data Mover.CreateData.Line
    * @return Mover
    */
    mover_line(mover_data: Mover.CreateData.Line): Mover;
    /**
    * 创建追踪运动器
    * @param mover_data Mover.CreateData.Target
    * @return Mover
    */
    mover_target(mover_data: Mover.CreateData.Target): Mover;
    /**
    * 创建曲线运动器
    * @param mover_data Mover.CreateData.Curve
    * @return Mover
    */
    mover_curve(mover_data: Mover.CreateData.Curve): Mover;
    /**
    * 创建环绕运动器
    * @param mover_data Mover.CreateData.Round
    * @return Mover
    */
    mover_round(mover_data: Mover.CreateData.Round): Mover;
    /**
    * 打断运动器
    */
    break_mover(): void;
    /**
    * 移除运动器
    */
    remove_mover(): void;
}
