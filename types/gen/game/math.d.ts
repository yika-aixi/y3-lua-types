//@ts-nocheck
declare interface Math {
    /**
    * 获取随机角度
    * @return number
    */
    get_random_angle(): number;
    /**
    * 范围内随机实数
    * @param min number 范围内最小实数
    * @param max number 范围内最大实数
    * @return number float 随机实数
    */
    random_float(min: number, max: number): number;
    /**
    * 正弦（角度制）
    * @param value number 实数
    * @return number float 实数
    */
    sin(value: number): number;
    /**
    * 余弦（角度制）
    * @param value number 实数
    * @return number float 实数
    */
    cos(value: number): number;
    /**
    * 正切（角度制）
    * @param value number 实数
    * @return number float 实数
    */
    tan(value: number): number;
    /**
    * 反正弦（角度制）
    * @param value number 实数
    * @return number float 实数
    */
    asin(value: number): number;
    /**
    * 反余弦（角度制）
    * @param value number 实数
    * @return number float 实数
    */
    acos(value: number): number;
    /**
    * 反正切（角度制）
    * @param y number
    * @param x number
    * @return number float 实数
    */
    atan(y: number, x: number): number;
    /**
    * 计算2个角度之间的夹角（角度制）
    * @param r1 number
    * @param r2 number
    * @return number angle 夹角，取值范围[0, 180]
    * @return number direction 方向，1为顺时针，1为逆时针
    */
    includedAngle(r1: number, r2: number): [
        number,
        number
    ];
    /**
    *  检查数字是否在[min, max]范围内
    * @param number number
    * @param min number
    * @param max number
    * @return boolean
    */
    isBetween(number: number, min: number, max: number): boolean;
    /**
    * 获取随机种子
    * @return integer seed 随机种子
    */
    get_random_seed(): number;
}
