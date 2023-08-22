//@ts-nocheck
declare interface Projectile {
    /**
    
    */
    destructor(): void;
    /**
    * @param py_projectile py.ProjectileEntity
    * @return Projectile projectile
    */
    get_by_handle(py_projectile: py.ProjectileEntity): Projectile;
    /**
    * 获取投射物的类型ID
    * @return py.ProjectileKey projectile_key
    */
    get_key(): py.ProjectileKey;
    /**
    * 是否存在
    * @return boolean is_exist 是否存在
    */
    is_exist(): boolean;
    /**
    * 获取投射物高度
    * @return number height 高度
    */
    get_height(): number;
    /**
    * 获取投射物剩余持续时间
    * @return number duration 投射物剩余持续时间
    */
    get_left_time(): number;
    /**
    * 获取投射物的拥有者
    * @return Unit unit 投射物的拥有者
    */
    get_owner(): Unit;
    /**
    * 获取投射物朝向
    * @return number angle 投射物朝向
    */
    get_facing(): number;
    /**
    * 获取投射物所在点
    * @return Point point 投射物所在点
    */
    get_point(): Point;
    /**
    * 是否拥有标签
    * @param  tag string 标签
    * @return boolean is_has_tag 是否拥有标签
    */
    has_tag(tag): boolean;
    /**
    * 投射物添加标签
    * @param tag string 标签
    */
    add_tag(tag: string): void;
    /**
    * 投射物移除标签
    * @param tag string 标签
    */
    remove_tag(tag: string): void;
    /**
    * @class Projectile.CreateData
    * @field key py.ProjectileKey 投射物类型ID
    * @field target Point|Unit 创建位置
    * @field socket? string 投射物关联骨骼，只有当 `target` 为单位时才有效
    * @field angle? number 投射物朝向
    * @field height? number 投射物高度
    * @field time? number 投射物持续时间
    * @field owner? Unit|Player 投射物拥有者
    * @field ability? Ability 投射物关联技能
    * @field visible_rule? integer 粒子特效可见性规则，默认为`1`
    * @field remove_immediately? boolean 是否立即移除表现，如果不填会读表
    *  创建投射物
    * @param data Projectile.CreateData 投射物创建数据
    * @return Projectile
    */
    create(data: Projectile.CreateData): Projectile;
    /**
    * 设置所属单位
    * @param unit Unit 所属单位
    */
    set_owner(unit: Unit): void;
    /**
    * 设置关联技能
    * @param ability Ability 关联技能
    */
    set_ability(ability: Ability): void;
    /**
    * 销毁
    */
    remove(): void;
    /**
    * 设置高度
    * @param height number 高度
    */
    set_height(height: number): void;
    /**
    * 设置坐标
    * @param point Point 点坐标
    */
    set_point(point: Point): void;
    /**
    * 设置朝向
    * @param direction number 朝向
    */
    set_facing(direction: number): void;
    /**
    * 设置旋转
    * @param x number x轴
    * @param y number y轴
    * @param z number z轴
    */
    set_rotation(x: number, y: number, z: number): void;
    /**
    * 设置缩放
    * @param x number x轴
    * @param y number y轴
    * @param z number z轴
    */
    set_scale(x: number, y: number, z: number): void;
    /**
    * 设置动画速度
    * @param speed number
    */
    set_animation_speed(speed: number): void;
    /**
    * 设置持续时间
    * @param duration number 持续时间
    */
    set_time(duration: number): void;
    /**
    * 增加持续时间
    * @param duration number 持续时间
    */
    add_time(duration: number): void;
    /**
    * 获得关联技能
    * @return Ability? ability 投射物或魔法效果的关联技能
    */
    get_ability(): Ability?;
}
