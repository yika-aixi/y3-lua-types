//@ts-nocheck
declare interface Particle {
    /**
    
    */
    __tostring(): void;
    /**
    * @param sfx py.Sfx
    * @return self
    */
    __init(sfx: py.Sfx): this;
    /**
    
    */
    __del(): void;
    /**
    * @param py_sfx py.Sfx
    * @return Particle
    */
    get_by_handle(py_sfx: py.Sfx): Particle;
    /**
    * @class Particle.Param.Screen
    * @field type py.SfxKey 特效id
    * @field time number 持续时间
    * @field target Player 玩家
    * @field is_on_fog boolean 是否在迷雾上方
    * 创建屏幕特效
    * @param data Particle.Param.Screen
    * @return Particle
    */
    create_screen(data: Particle.Param.Screen): Particle;
    /**
    * @class Particle.Param.Create
    * @field type py.SfxKey 特效类型id
    * @field target Point|Unit 点
    * @field angle number 方向
    * @field scale number 缩放
    * @field time number 持续时间
    * @field height? number 高度，只有当 `target` 的类型为点时有效
    * @field socket? string 特效挂节点，只有当 `target` 的类型为单位时有效
    * @field follow_rotation? integer 跟随单位旋转的模式，只有当 `target` 的类型为单位时有效
    * @field follow_scale? boolean 是否跟随单位缩放，只有当 `target` 的类型为单位时有效
    * @field immediate? boolean 销毁时，是否有过度
    * 创建特效到单位或点
    * @param data Particle.Param.Create
    * @return Particle
    */
    create(data: Particle.Param.Create): Particle;
    /**
    * @return py.Sfx
    */
    get_handle(): py.Sfx;
    /**
    * 删除粒子
    */
    remove(): void;
    /**
    * 设置旋转角度
    * @param x number X轴角度
    * @param y number Y轴角度
    * @param z number Z轴角度
    */
    set_rotate(x: number, y: number, z: number): void;
    /**
    * 设置朝向
    * @param direction number 方向
    */
    set_facing(direction: number): void;
    /**
    * 设置缩放比例
    * @param x number X轴缩放
    * @param y number Y轴缩放
    * @param z number Z轴缩放
    */
    set_scale(x: number, y: number, z: number): void;
    /**
    * 设置高度
    * @param height number 高度
    */
    set_height(height: number): void;
    /**
    * 设置坐标
    * @param point Point 点
    */
    set_point(point: Point): void;
    /**
    * 设置动画速度
    * @param speed number 速度
    */
    set_animation_speed(speed: number): void;
    /**
    * 设置持续时间
    * @param duration number 持续时间
    */
    set_time(duration: number): void;
}
