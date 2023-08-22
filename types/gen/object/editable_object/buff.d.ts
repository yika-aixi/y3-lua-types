//@ts-nocheck
declare interface Buff {
    /**
    
    */
    __tostring(): void;
    /**
    
    */
    destructor(): void;
    /**
    * 通过py层的魔法效果实例获取lua层的魔法效果实例
    * @param  py_buff py.ModifierEntity # py层的魔法效果实例
    * @return Buff # 返回在lua层初始化后的lua层魔法效果实例
    */
    get_by_handle(py_buff): Buff;
    /**
    * 是否具有标签
    * @param tag string 标签
    * @return boolean
    */
    has_tag(tag: string): boolean;
    /**
    * 魔法效果的图标是否可见
    * @return boolean is_visible 是否可见
    */
    is_icon_visible(): boolean;
    /**
    * 移除
    */
    remove(): void;
    /**
    * 是否存在
    * @return boolean is_exist 是否存在
    */
    is_exist(): boolean;
    /**
    * 设置魔法效果的名称
    * @param name string 名字
    */
    set_name(name: string): void;
    /**
    * 设置魔法效果对象的描述
    * @param description string 描述
    */
    set_description(description: string): void;
    /**
    * 设置剩余持续时间
    * @param time number 剩余持续时间
    */
    set_time(time: number): void;
    /**
    * 增加剩余持续时间
    * @param time number 剩余持续时间
    */
    add_time(time: number): void;
    /**
    * 设置堆叠层数
    * @param stack integer 层数
    */
    set_stack(stack: number): void;
    /**
    * 增加堆叠层数
    * @param stack integer 层数
    */
    add_stack(stack: number): void;
    /**
    * 设置护盾值
    * @param value number 护盾值
    */
    set_shield(value: number): void;
    /**
    * 增加护盾值
    * @param value number 护盾值
    */
    add_shield(value: number): void;
    /**
    * 获取魔法效果的堆叠层数
    * @return integer stack 层数
    */
    get_stack(): number;
    /**
    * 获取魔法效果的剩余持续时间
    * @return number time 剩余持续时间
    */
    get_time(): number;
    /**
    * 获取魔法效果类型
    * @return y3.Const.ModifierType type 魔法效果类型
    */
    get_buff_type(): y3.Const.ModifierType;
    /**
    * 获取魔法效果影响类型
    * @return y3.Const.EffectType type 魔法效果影响类型
    */
    get_buff_effect_type(): y3.Const.EffectType;
    /**
    * 获取魔法效果的最大堆叠层数
    * @return integer stack 层数
    */
    get_max_stack(): number;
    /**
    * 获取魔法效果的护盾
    * @return number shield 护盾值
    */
    get_shield(): number;
    /**
    * 获取所属光环
    * @return Buff aura 所属光环
    */
    get_aura(): Buff;
    /**
    * 获取魔法效果循环周期
    * @return number time 循环周期
    */
    get_cycle_time(): number;
    /**
    * 魔法效果的已持续时间
    * @return number duration 持续时间
    */
    get_passed_time(): number;
    /**
    * 获取魔法效果的光环效果类型ID
    * @return py.ModifierKey type 光环效果类型ID
    */
    get_buff_aura_effect_key(): py.ModifierKey;
    /**
    * 获取魔法效果的光环范围
    * @return number range 光环范围
    */
    get_buff_aura_range(): number;
    /**
    * 获取魔法效果的施加者
    * @return Unit provider 施加者
    */
    get_source(): Unit;
    /**
    * 获取魔法效果的携带者
    * @return Unit owner 携带者
    */
    get_owner(): Unit;
    /**
    * 获取魔法效果对象的名称
    * @return string name 名字
    */
    get_name(): string;
    /**
    * 获取魔法效果对象的描述
    * @return string description 描述
    */
    get_description(): string;
    /**
    * 获取等级
    * @return integer level 等级
    */
    get_level(): number;
    /**
    * 魔法效果类型的图标是否可见
    * @param buff_key py.ModifierKey 类型
    * @return boolean is_visible 是否可见
    */
    is_icon_visible_by_key(buff_key: py.ModifierKey): boolean;
    /**
    * 获得魔法效果的类别
    * @return py.ModifierKey buff_key 类别
    */
    get_key(): py.ModifierKey;
    /**
    * 获取魔法效果类型的描述
    * @param buff_key py.ModifierKey 类型
    * @return string description 描述
    */
    get_description_by_key(buff_key: py.ModifierKey): string;
    /**
    * 获取魔法效果类型的icon图标的图片
    * @param buff_key py.ModifierKey 类型
    * @return integer # 图片id
    */
    get_icon_by_key(buff_key: py.ModifierKey): number;
    /**
    * 获得关联技能
    * @return Ability|nil ability 投射物或魔法效果的关联技能
    */
    get_ability(): Ability | undefined;
    /**
    * 增加魔法效果光环影响范围
    * @param range number 影响范围
    */
    add_aura_range(range: number): void;
    /**
    * 设置魔法效果光环影响范围
    * @param range number 影响范围
    */
    set_aura_range(range: number): void;
}
