// @ts-nocheck
declare interface Y3EventDeclarations {
    LOGIC_UNIT_DESTROY;
    定时器超时;
    周期性定时器超时;
    经过一定帧数;
    周期性经过一定帧数;
    游戏初始化;
    Loading结束;
    重启客户端追帧完成;
    接收触发事件: {
        /*触发器id*/
        trigger_id: py.TriggerID;
    };
    游戏结束;
    游戏暂停;
    游戏恢复;
    空事件;
    全局计时器超时: {
        /*计时器名称*/
        name: string;
    };
    昼夜发生变化: {
        /*是否是白天转到黑夜*/
        is_day_to_night: boolean;
    };
    添加容器: {
        /*容器名*/
        name: string;
        /*容器*/
        container: py.ActorContainer;
    };
    容器中添加actor: {
        /*容器从属actor*/
        owner: py.Actor;
    };
    容器中删除actor: {
        /*原容器从属actor*/
        owner: py.Actor;
    };
    actor属性更新: {
        /*属性名*/
        name: string;
    };
    单位进入区域: {
        /*单位*/
        unit: Unit;
        /*区域*/
        area: Area;
        /*触发器ID*/
        trigger_id: py.TriggerID;
    };
    单位离开区域: {
        /*单位*/
        unit: Unit;
        /*区域*/
        area: Area;
        /*触发器ID*/
        trigger_id: py.TriggerID;
    };
    玩家加入战斗: {
        /*玩家*/
        player: Player;
        /*是否中途加入*/
        is_middle_join: boolean;
    };
    玩家主动退出游戏: {
        /*玩家*/
        player: Player;
    };
    玩家断开服务器连接: {
        /*玩家*/
        player: Player;
    };
    AI接管玩家: {
        /*玩家*/
        player: Player;
    };
    下载档案数据回调: {
        /*玩家*/
        player: Player;
    };
    玩家成功使用收费道具: {
        /*玩家*/
        player: Player;
        /*收费道具编号*/
        store_key: py.StoreKey;
        /*使用次数*/
        use_cnt: integer;
    };
    玩家成功使用收费道具（触发器内）: {
        /*玩家*/
        player: Player;
        /*收费道具编号*/
        store_key: py.StoreKey;
    };
    玩家持有收费道具: {
        /*玩家*/
        player: Player;
        /*收费道具编号*/
        store_key: py.StoreKey;
    };
    玩家资源变化: {
        /*玩家*/
        player: Player;
        /*玩家资源类型*/
        res_key: py.RoleResKey;
        /*玩家资源值*/
        res_value: integer;
        /*玩家资源变量值*/
        res_value_delta: number;
    };
    玩家输入字符串: {
        /*玩家*/
        player: Player;
        /*字符串*/
        msg: string;
    };
    玩家输入激活码: {
        /*玩家*/
        player: Player;
        /*激活码组*/
        activation_code_group: string;
    };
    玩家科技升级: {
        /*玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
        /*当前科技等级*/
        curr_lv: integer;
    };
    玩家科技降级: {
        /*玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
        /*当前科技等级*/
        curr_lv: integer;
    };
    玩家科技变化: {
        /*玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
        /*当前科技等级*/
        curr_lv: integer;
        /*科技变化等级*/
        delta_lv: integer;
    };
    单位研发科技: {
        /*单位*/
        unit: Unit;
        /*单位所属玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
    };
    单位添加科技: {
        /*单位*/
        unit: Unit;
        /*单位所属玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
    };
    单位删除科技: {
        /*单位*/
        unit: Unit;
        /*单位所属玩家*/
        player: Player;
        /*科技编号*/
        tech_no: py.TechKey;
    };
    玩家敌对关系变化: {
        /*源玩家*/
        src_player: Player;
        /*目标玩家*/
        dst_player: Player;
        /*关系*/
        relation: py.RoleRelation;
    };
    建筑技能建造成功: {
        /*技能*/
        ability: Ability;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能ID*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
        /*主人*/
        unit: Unit;
        /*建造出来的单位*/
        build_unit: Unit;
    };
    普通攻击命中: {
        /*技能id*/
        ability_id: integer;
    };
    普通攻击造成伤害: {
        /*技能id*/
        ability_id: integer;
        /*被伤害的单位*/
        other_unit: Unit;
    };
    技能CD变化: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*cd剩余时间*/
        left: number;
        /*cd总时长*/
        total: number;
        /*技能id*/
        ability_id: py.AbilityKey;
    };
    单位获得新技能: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
    };
    技能充能层数变化: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*技能充能层数*/
        stack: number;
    };
    技能加点: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*技能对象*/
        ability: Ability;
        /*单位*/
        unit: Unit;
    };
    充能CD变化: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*充能cd剩余时间*/
        left: number;
        /*充能cd总时长*/
        total: number;
    };
    技能禁用状态发生变化: {
        /*技能坑位*/
        ability_index: py.AbilityIndex;
        /*是否禁用*/
        is_forbidden: boolean;
    };
    技能的沉默状态发生变化: {
        /*是否禁用*/
        is_silent: boolean;
    };
    技能的图标发生变化;
    单位的名称发生变化;
    单位的小地图图标发生变化;
    单位头像图标发生变化: {
        /*undefined*/
        unit: Unit;
    };
    阵营内单位变化: {
        /*undefined*/
        unit: Unit;
    };
    阵营内单位标签变化: {
        /*undefined*/
        unit: Unit;
    };
    单位进入运动器状态: {
        /*undefined*/
        unit: Unit;
    };
    单位开始移动: {
        /*undefined*/
        unit: Unit;
    };
    单位结束移动: {
        /*undefined*/
        unit: Unit;
    };
    单位删除（ECA专用）: {
        /*undefined*/
        unit: Unit;
    };
    单位删除（对象真正销毁）: {
        /*undefined*/
        unit: Unit;
    };
    单位传送结束: {
        /*undefined*/
        unit: Unit;
    };
    单位属性变化: {
        /*undefined*/
        unit: Unit;
        /*undefined*/
        attr: string;
    };
    单位即将死亡: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
    };
    单位死亡: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
    };
    单位解绑玩家: {
        /*undefined*/
        unit: Unit;
        /*undefined*/
        player: Player;
    };
    单位绑定玩家: {
        /*undefined*/
        unit: Unit;
        /*undefined*/
        player: Player;
    };
    单位即将受到攻击: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    单位即将击中其他单位: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    单位即将受到攻击（计算加成后）: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    单位即将击中其他单位（计算加成后）: {
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    单位实际对其他单位造成伤害: {
        /*是否是暴击*/
        is_critical_hit: number;
        /*是否是普通攻击*/
        is_normal_hit: boolean;
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    单位实际受到伤害: {
        /*是否是暴击*/
        is_critical_hit: number;
        /*是否是普通攻击*/
        is_normal_hit: boolean;
        /*受到的伤害值*/
        damage: number;
        /*施加伤害的单位*/
        source_unit: Unit;
        /*承受伤害的单位*/
        target_unit: Unit;
        /*当前伤害所属技能*/
        ability: Ability;
        /*伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
        /*伤害实例*/
        damage_instance: DamageInstance;
    };
    单位即将受到治疗: {
        /*受到的治疗值*/
        cured_value: number;
        /*当前治疗所属技能*/
        ability: Ability;
    };
    单位受到治疗结束: {
        /*受到的治疗值*/
        cured_value: number;
        /*当前治疗所属技能*/
        ability: Ability;
    };
    单位受到治疗: {
        /*受到的治疗值*/
        cured_value: number;
        /*当前治疗所属技能*/
        ability: Ability;
    };
    单位动画状态机进入状态: {
        /*单位*/
        unit: Unit;
        /*前一个动画机状态*/
        last_asm_state: py.CcAsmState;
        /*当前动画机状态*/
        cur_asm_state: py.CcAsmState;
    };
    单位动画状态机退出状态: {
        /*单位*/
        unit: Unit;
        /*当前动画机状态*/
        cur_asm_state: py.CcAsmState;
    };
    修改玩家属性图标: {
        /*资源*/
        res_key: py.RoleResKey;
        /*ICON ID*/
        icon_id: integer;
    };
    单位施放技能事件: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
        /*技能的目标单位*/
        ability_target_unit: Unit;
    };
    单位施放技能开始事件: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
    };
    单位施放技能结束事件: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
    };
    单位施放技能事件: {
        /*施放的技能对象*/
        ability: Ability;
        /*触发事件的单位unit_*/
        unit: Unit;
    };
    单位技能变化事件;
    单位经验变化事件;
    单位即将获得经验: {
        /*获得经验的单位*/
        unit: Unit;
        /*增加的经验*/
        add_exp: number;
    };
    单位获得经验: {
        /*获得经验的单位*/
        unit: Unit;
        /*增加的经验*/
        add_exp: number;
    };
    单位接收命令: {
        /*单位*/
        unit: Unit;
        /*接收的命令*/
        cmd_type: py.UnitCommand;
        /*目标单位*/
        target_unit: Unit;
        /*目标点*/
        point: Point;
        /*目标可破坏物*/
        destructible: Destructible;
        /*目标物品*/
        item: Item;
    };
    单位击杀其他单位: {
        /*伤害值*/
        damage: number;
        /*杀手单位*/
        source_unit: Unit;
        /*死亡单位*/
        target_unit: Unit;
        /*致命伤害所属技能*/
        ability: Ability;
        /*致命伤害类型*/
        damage_type: integer;
        /*undefined*/
        unit: Unit;
    };
    单位出生: {
        /*undefined*/
        unit: Unit;
    };
    单位进入战斗状态: {
        /*单位*/
        unit: Unit;
    };
    单位脱离战斗状态: {
        /*单位*/
        unit: Unit;
    };
    单位创建仆从: {
        /*仆从*/
        unit: Unit;
    };
    物品附加属性变化: {
        /*undefined*/
        item: Item;
        /*undefined*/
        attr_key: string;
        /*undefined*/
        delta: number;
    };
    商品购买: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品数量*/
        cnt: integer;
        /*商品物品*/
        item: Item;
    };
    商品购买: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品数量*/
        cnt: integer;
        /*商品单位*/
        unit_stuff: Unit;
    };
    道具出售: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*道具*/
        item: Item;
    };
    商店商品变化: {
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品id*/
        shop_key: string;
        /*当前库存*/
        curr_stock: integer;
    };
    商品库存变化: {
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品id*/
        shop_key: string;
        /*当前库存*/
        curr_stock: integer;
    };
    商品售价变化: {
        /*商店单位*/
        shop_unit: Unit;
        /*商店分页*/
        tab_idx: integer;
        /*商品id*/
        shop_key: string;
        /*资源编号*/
        res_type: py.RoleResKey;
        /*当前售价*/
        res_cost: integer;
    };
    道具合成事件: {
        /*单位*/
        unit: Unit;
        /*道具编号*/
        compose_id: py.ItemKey;
        /*道具*/
        item_prop: Item;
    };
    商品合成购买: {
        /*购买物品单位*/
        unit: Unit;
        /*商店单位*/
        shop_unit: Unit;
        /*物品编号*/
        item: Item;
    };
    单位重生: {
        /*undefined*/
        unit: Unit;
    };
    单位升级: {
        /*undefined*/
        unit: Unit;
    };
    单位运动目标达成: {
        /*undefined*/
        unit: Unit;
    };
    单位碰撞到障碍: {
        /*undefined*/
        unit: Unit;
    };
    单位进入草丛: {
        /*单位*/
        unit: Unit;
    };
    单位离开草丛: {
        /*单位*/
        unit: Unit;
    };
    地图显隐因触发器发生变化;
    单位所属玩家发生变化: {
        /*触发事件的单位*/
        unit: Unit;
        /*单位原所属玩家*/
        old_player: Player;
        /*单位新所属玩家*/
        new_player: Player;
    };
    单位的kv属性发送变化: {
        /*KV名*/
        kv_name: string;
    };
    单位的多个kv属性发送变化: {
        /*单位原所属玩家*/
        kv_name_list: py.List;
    };
    单位类型的前置条件满足要求: {
        /*单位类型*/
        unit_key: py.UnitKey;
        /*玩家*/
        player: Player;
    };
    单位类型的前置条件不满足要求: {
        /*单位类型*/
        unit_key: py.UnitKey;
        /*玩家*/
        player: Player;
    };
    物品类型的前置条件满足要求: {
        /*物品类型*/
        item_no: py.ItemKey;
        /*玩家*/
        player: Player;
    };
    物品类型的前置条件不满足要求: {
        /*物品类型*/
        item_no: py.ItemKey;
        /*玩家*/
        player: Player;
    };
    技能类型的前置条件满足要求: {
        /*技能类型*/
        ability_id: py.AbilityKey;
        /*玩家*/
        player: Player;
    };
    技能类型的前置条件不满足要求: {
        /*技能类型*/
        ability_id: py.AbilityKey;
        /*玩家*/
        player: Player;
    };
    科技类型的前置条件满足要求: {
        /*科技类型*/
        tech_no: py.TechKey;
        /*玩家*/
        player: Player;
    };
    科技类型的前置条件不满足要求: {
        /*科技类型*/
        tech_no: py.TechKey;
        /*玩家*/
        player: Player;
    };
    技能升级: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
    };
    技能开始施法: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能开始施法结束: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
    };
    技能前摇开始: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能前摇结束: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    道具技能前摇结束: {
        /*技能对象*/
        ability: Ability;
    };
    技能准备结束: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能持续施法结束: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能后摇结束: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能准备阶段被打断: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
    };
    技能前摇阶段被打断: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能准备阶段被打断: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能持续施法阶段被打断: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    技能后摇阶段被打断: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
    };
    技能结束（无论何种方式）: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
        /*技能目标单位*/
        ability_target_unit: Unit;
        /*施法*/
        cast: Cast;
    };
    获得技能: {
        /*技能对象*/
        ability: Ability;
        /*单位*/
        unit: Unit;
    };
    失去技能: {
        /*技能对象*/
        ability: Ability;
        /*单位*/
        unit: Unit;
    };
    交换技能: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
    };
    技能禁用: {
        /*技能对象*/
        ability: Ability;
    };
    技能启用: {
        /*技能对象*/
        ability: Ability;
    };
    技能属性变化: {
        /*技能对象*/
        ability: Ability;
    };
    技能冷却事件: {
        /*技能对象*/
        ability: Ability;
        /*技能Owner*/
        unit: Unit;
    };
    技能自动释放状态变化: {
        /*技能对象*/
        ability: Ability;
    };
    获得效果: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    失去效果: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    循环触发事件: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    BUFF更新事件;
    BUFF叠加事件: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    效果层数变化事件: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*层数变化值*/
        layer_change_values: integer;
        /*效果施加者*/
        from_unit: Unit;
    };
    魔法效果即将获得事件: {
        /*触发的魔法效果*/
        buff: Buff;
        /*效果携带者*/
        owner_unit: Unit;
        /*效果施加者*/
        from_unit: Unit;
    };
    魔法效果被覆盖事件: {
        /*效果携带者*/
        owner_unit: Unit;
        /*已有的魔法效果*/
        old_buff: Buff;
        /*新增的魔法效果*/
        new_buff: Buff;
    };
    魔法效果属性变化事件: {
        /*魔法效果*/
        buff: Buff;
    };
    可破坏物资源个数发生变化;
    可破坏物的名称发生变化;
    可破坏物资源名称发生变化;
    可破坏物死亡: {
        /*死亡的可破坏物*/
        destructible: Destructible;
        /*凶手单位*/
        unit_for_dest: Unit;
    };
    可破坏物被采集枯竭: {
        /*资源枯竭的可破坏物*/
        destructible: Destructible;
        /*采集的单位*/
        unit_for_dest: Unit;
    };
    可破坏物被攻击: {
        /*被攻击的可破坏物*/
        destructible: Destructible;
        /*攻击的单位*/
        unit_for_dest: Unit;
    };
    可破坏物被采集: {
        /*被采集的可破坏物*/
        destructible: Destructible;
        /*采集的单位*/
        unit_for_dest: Unit;
    };
    区域内的可破坏物死亡: {
        /*可破坏物死亡的区域*/
        area: Area;
        /*死亡的可破坏物*/
        destructible: Destructible;
        /*杀手单位*/
        unit_for_dest: Unit;
    };
    区域内的可破坏物被采集枯竭: {
        /*可破坏物被采集枯竭的区域*/
        area: Area;
        /*资源枯竭的可破坏物*/
        destructible: Destructible;
        /*采集单位*/
        unit_for_dest: Unit;
    };
    区域内的可破坏物被攻击: {
        /*可破坏物被攻击的区域*/
        area: Area;
        /*被攻击的可破坏物*/
        destructible: Destructible;
        /*攻击单位*/
        unit_for_dest: Unit;
    };
    区域内的可破坏物被采集: {
        /*可破坏物被采集的区域*/
        area: Area;
        /*被采集的可破坏物*/
        destructible: Destructible;
        /*采集单位*/
        unit_for_dest: Unit;
    };
    可破坏物创建: {
        /*可破坏物*/
        destructible: Destructible;
    };
    可破坏物死亡: {
        /*可破坏物*/
        destructible: Destructible;
        /*凶手单位ID*/
        unit_id_of_dest_killer: Unit;
    };
    可破坏物复活: {
        /*可破坏物*/
        destructible: Destructible;
    };
    可破坏物资源量变化: {
        /*可破坏物*/
        destructible: Destructible;
        /*可破坏物资源变化量*/
        res_chg_cnt_in_dest_event: integer;
    };
    可破坏物被采集: {
        /*可破坏物*/
        destructible: Destructible;
        /*事件中的单位*/
        unit_id_in_dest_event: Unit;
        /*事件中的技能对象*/
        ability_in_dest_event: Ability;
        /*采集的玩家属性个数*/
        player_res_cnt_in_event: integer;
    };
    可破坏物受到伤害: {
        /*可破坏物*/
        destructible: Destructible;
        /*事件中的单位*/
        unit_id_of_hurt_dest: Unit;
        /*受到的伤害*/
        damage_value_of_hurt_dest: number;
    };
    玩家选中可破坏物: {
        /*玩家*/
        player: Player;
        /*点击到可破坏物*/
        destructible: Destructible;
    };
    删除可破坏物: {
        /*触发事件的可破坏物*/
        destructible: Destructible;
    };
    投射物产生;
    投射物死亡;
    投射物运动开始;
    投射物运动目标达成;
    投射物碰撞到障碍: {
        /*undefined*/
        unit: Unit;
    };
    给单位创建投射物;
    ui编辑器事件: {
        /*玩家*/
        player: Player;
        /*ui事件变量名*/
        ui_event_name: string;
        /*触发事件控件名称*/
        comp_name: string;
        /*触碰坐标*/
        pos: py.Vector2;
        /*触碰ID*/
        touch_id: integer;
    };
    全局触发器发送ui事件: {
        /*ui事件名*/
        event_name: string;
        /*参数*/
        args: py.Dict;
    };
    键盘按键按下: {
        /*触发按键的玩家*/
        player: Player;
        /*当前键盘按键*/
        current_key: py.KeyboardKey;
    };
    键盘按键抬起: {
        /*触发按键的玩家*/
        player: Player;
        /*当前键盘按键*/
        current_key: py.KeyboardKey;
    };
    鼠标按键按下: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
    };
    鼠标按键抬起: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
    };
    鼠标按键双击: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
    };
    鼠标按键按下单位: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*当前操作的单位*/
        unit: Unit;
    };
    鼠标按键抬起单位: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*当前操作的单位*/
        unit: Unit;
    };
    鼠标按键双击单位: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标按键*/
        current_key: py.MouseKey;
        /*当前操作的单位*/
        unit: Unit;
    };
    鼠标移动事件: {
        /*触发按键的玩家*/
        player: Player;
        /*鼠标指向的世界坐标*/
        pointing_world_pos: Point;
        /*鼠标指向的屏幕坐标X*/
        tar_x: integer;
        /*鼠标指向的屏幕坐标Y*/
        tar_y: integer;
    };
    鼠标滚轮事件: {
        /*触发按键的玩家*/
        player: Player;
        /*当前鼠标滚轮*/
        mouse_wheel: py.MouseWheel;
    };
    本地鼠标移动事件(勿通过该事件进行逻辑操作);
    单位触发器向全局触发器发送事件: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    技能触发器向全局触发器发送事件: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    效果触发器向全局触发器发送事件: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    投射物触发器向全局触发器发送事件: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    物品触发器向全局触发器发送事件: {
        /*事件名*/
        event_name: string;
        /*点*/
        point: Point;
        /*整数1*/
        int1: integer;
        /*实数1*/
        float1: number;
        /*布尔1*/
        bool1: boolean;
        /*字符串1*/
        str1: string;
        /*单位*/
        unit: Unit;
    };
    玩家选中单位: {
        /*玩家*/
        player: Player;
        /*点击到单位*/
        unit: Unit;
    };
    玩家控制的高亮单位: {
        /*玩家*/
        player: Player;
        /*高亮单位id*/
        high_light_unit_id: py.HighLightUnitID;
    };
    玩家选中物品: {
        /*玩家*/
        player: Player;
        /*点击到物品*/
        item: Item;
    };
    玩家双击选中物品: {
        /*玩家*/
        player: Player;
        /*双击到物品*/
        item: Item;
    };
    打开商店界面: {
        /*玩家*/
        player: Player;
        /*商店单位*/
        unit: Unit;
    };
    玩家双击选中可破坏物: {
        /*玩家*/
        player: Player;
        /*双击到可破坏物*/
        destructible: Destructible;
    };
    玩家选中单位组: {
        /*玩家*/
        player: Player;
        /*框选到单位组id列表*/
        unit_group_id_list: UnitGroup;
        /*队伍编号*/
        team_id: integer;
    };
    打开技能指示器: {
        /*玩家*/
        player: Player;
        /*释放单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    关闭技能指示器: {
        /*玩家*/
        player: Player;
        /*释放单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    缩放技能指示器范围圈: {
        /*玩家*/
        player: Player;
        /*释放单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    设置扇形指示器半径: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    设置扇形指示器角度: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    设置箭头/多段指示器长度: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    设置箭头/多段指示器宽度: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    设置圆形指示器半径: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
    };
    设置技能指示器类型: {
        /*技能Seq*/
        ability_seq: py.AbilitySeq;
        /*技能指示器类型*/
        skill_pointer_type: py.SkillPointerType;
    };
    触碰（鼠标）开始事件: {
        /*触碰(鼠标)id*/
        touch_id: integer;
        /*触碰(鼠标)坐标*/
        pos: py.Vector2;
    };
    触碰（鼠标）移动事件: {
        /*触碰(鼠标)id*/
        touch_id: integer;
        /*触碰(鼠标)坐标*/
        pos: py.Vector2;
    };
    触碰（鼠标）结束事件: {
        /*触碰(鼠标)id*/
        touch_id: integer;
        /*触碰(鼠标)坐标*/
        pos: py.Vector2;
    };
    最底层的触摸结束事件;
    排位变更事件;
    单位获得物品: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位添加物品用于物品合成事件的判断: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位获得物品到物品栏: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位获得物品到背包栏: {
        /*获得该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位失去物品: {
        /*失去该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位物品从物品栏离开: {
        /*失去该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位物品从背包栏离开: {
        /*失去该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位使用物品: {
        /*使用该物品的单位*/
        unit: Unit;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位使用物品后: {
        /*物品编号*/
        item_no: py.ItemKey;
    };
    单位开始寻路时: {
        /*单位*/
        unit: Unit;
    };
    单位结束寻路时: {
        /*单位*/
        unit: Unit;
    };
    背包刷新;
    物品层数变化: {
        /*单位*/
        unit: Item;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
        /*变化值*/
        delta_cnt: integer;
    };
    物品充能变化: {
        /*单位*/
        unit: Item;
        /*物品*/
        item: Item;
        /*物品编号*/
        item_no: py.ItemKey;
        /*变化值*/
        delta_cnt: integer;
    };
    物品创建: {
        /*被创建的物品*/
        item: Item;
    };
    物品销毁: {
        /*销毁的物品*/
        item: Item;
    };
    物品实体销毁: {
        /*物品实体*/
        item_unit: Item;
        /*物品*/
        item: Item;
    };
    出售物品: {
        /*购买者*/
        unit: Unit;
        /*贩卖者*/
        unit2: Unit;
        /*被售出的物品*/
        item: Item;
        /*收购物品的单位*/
        buy_unit: Unit;
        /*出售物品的单位*/
        shop_unit: Unit;
    };
    破坏物品: {
        /*被破坏的物品*/
        item: Item;
        /*破坏物品的单位*/
        unit: Unit;
    };
    物品名称改变: {
        /*改变名称的物体*/
        item: Item;
        /*改变后的名称*/
        name: string;
    };
    破坏物品: {
        /*改变描述的物体*/
        item: Item;
        /*改变后的描述*/
        name: string;
    };
    物品被采集创建: {
        /*事件中的物品*/
        item: Item;
        /*事件中的可破坏物*/
        destructible: Destructible;
        /*采集可破坏物事件中的单位*/
        unit: Unit;
        /*采集可破坏物的捷能*/
        ability: Ability;
    };
    左键A地板: {
        /*指定单位*/
        unit: Unit;
        /*点击位置X坐标*/
        tar_x: number;
        /*点击位置Y坐标*/
        tar_y: number;
    };
    出售物品: {
        /*商店单位*/
        shop_unit: Unit;
        /*商品*/
        item: Item;
    };
    释放技能: {
        /*指定单位*/
        unit: Unit;
        /*技能类型*/
        ability_type: py.AbilityType;
        /*技能Index*/
        ability_index: py.AbilityIndex;
        /*技能SEQ*/
        ability_seq: py.AbilitySeq;
        /*释放技能参数*/
        target_item: py.Dict;
    };
    巡逻: {
        /*指定单位*/
        unit: Unit;
        /*点击位置X坐标*/
        tar_x: number;
        /*点击位置Y坐标*/
        tar_y: number;
    };
    寻路到位置: {
        /*指定单位*/
        unit: Unit;
        /*点击位置X坐标*/
        tar_x: number;
        /*点击位置Y坐标*/
        tar_y: number;
    };
    鼠标悬停事件: {
        /*玩家*/
        player: Player;
        /*悬浮单位*/
        unit: Unit;
        /*悬浮物品*/
        item: Item;
        /*悬浮可破坏物*/
        destructible: Destructible;
    };
    追帧结束事件;
    运动器打断;
    运动器移除;
    运动器单位碰撞;
    运动器单位碰撞;
    运动器单位碰撞结束;
    运动器地形碰撞;
    聊天中发送指令: {
        /*指令字符串*/
        str1: string;
        /*玩家*/
        player: Player;
    };
    触发器自定义事件: {
        /*自定义参数1*/
        c_param_1: integer;
        /*自定义参数2*/
        c_param_2: integer;
        /*自定义参数3*/
        c_param_3: integer;
        /*自定义参数4*/
        c_param_4: integer;
        /*自定义参数5*/
        c_param_5: integer;
    };
    自定义事件: {
        /*事件参数*/
        c_param_1: integer;
        /*自定义参数列表*/
        c_param_dict: py.Dict;
    };
    界面控件动效播放事件: {
        /*动销回调句柄*/
        ui_vx_handler: string;
        /*控件uid*/
        comp_name: string;
        /*动效id*/
        int1: integer;
    };
    界面模块被创建: {
        /*玩家*/
        player: Player;
        /*ui模块id*/
        ui_prefab: string;
        /*创建出的实例控件*/
        ui_prefab_ins: py.UIPrefabIns;
    };
    界面模块被销毁: {
        /*玩家*/
        player: Player;
        /*ui模块id*/
        ui_prefab: string;
        /*销毁的模块实例控件*/
        ui_prefab_ins: py.UIPrefabIns;
    };
    输入框控件玩家输入: {
        /*玩家*/
        player: Player;
        /*字符串*/
        msg: string;
    };
    语音说话: {
        /*玩家*/
        player: Player;
        /*频道*/
        audio_channel: integer;
        /*是否发言*/
        audio_bool: boolean;
    };
    聊天中发送指令: {
        /*单位*/
        unit: Unit;
        /*是否开启*/
        is_active: boolean;
    };
    逻辑物理组件创建: {
        /*被创建的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件激活: {
        /*被激活的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件关闭: {
        /*被关闭的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件运行: {
        /*运行的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件暂停: {
        /*被暂停的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件重置: {
        /*被重置的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件销毁: {
        /*被销毁的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件被获得: {
        /*被获得的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件使用: {
        /*被使用的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件使用结束: {
        /*被使用结束的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
    逻辑物理组件失去: {
        /*被失去的组件*/
        physics_entity: py.PhysicsEntity;
        /*组件id*/
        physics_entity_id: py.PhysicsEntityKey;
    };
}