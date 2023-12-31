// @ts-nocheck
declare type GameEventNames = keyof GameEventParamsDeclarations;
declare interface GameEventParamsDeclarations extends Record<GameEventDeclarations, object> {
    ['未知-ET_LOGIC_UNIT_DESTROY']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_LOGIC_UNIT_DESTROY"]>) => void;
    ['游戏-初始化']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u521D\u59CB\u5316"]>) => void;
    ['游戏-开始']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u5F00\u59CB"]>) => void;
    ['游戏-追帧完成']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u8FFD\u5E27\u5B8C\u6210"]>) => void;
    ['未知-ET_RECV_TRIGGER']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_RECV_TRIGGER"]>) => void;
    ['游戏-结束']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u7ED3\u675F"]>) => void;
    ['游戏-暂停']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u6682\u505C"]>) => void;
    ['游戏-恢复']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u6062\u590D"]>) => void;
    ['未知-ET_EMPTY']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_EMPTY"]>) => void;
    ['未知-TIMER_TIMEOUT']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-TIMER_TIMEOUT"]>) => void;
    ['游戏-昼夜变化']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u663C\u591C\u53D8\u5316"]>) => void;
    ['未知-ET_CONTAINER_ADDED']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_CONTAINER_ADDED"]>) => void;
    ['未知-ET_CONTAINER_ACTOR_ADDED']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_CONTAINER_ACTOR_ADDED"]>) => void;
    ['未知-ET_CONTAINER_ACTOR_REMOVED']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_CONTAINER_ACTOR_REMOVED"]>) => void;
    ['未知-ET_ACTOR_ATTR_UPDATED']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ACTOR_ATTR_UPDATED"]>) => void;
    ['区域-进入']: (/*区域*/
    area: Area, act: Action1<Trigger, GameEventDeclarations["\u533A\u57DF-\u8FDB\u5165"]>) => void;
    ['区域-离开']: (/*区域*/
    area: Area, act: Action1<Trigger, GameEventDeclarations["\u533A\u57DF-\u79BB\u5F00"]>) => void;
    ['玩家-加入游戏']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u52A0\u5165\u6E38\u620F"]>) => void;
    ['玩家-离开游戏']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u79BB\u5F00\u6E38\u620F"]>) => void;
    ['玩家-掉线']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u6389\u7EBF"]>) => void;
    ['未知-ET_AI_TAKE_CONTROL']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_AI_TAKE_CONTROL"]>) => void;
    ['未知-ET_DOWNLOAD_MAP_ARCHIVE_CALLBACK']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_DOWNLOAD_MAP_ARCHIVE_CALLBACK"]>) => void;
    ['玩家-使用平台道具']: (/*道具编号*/
    store_key: py.StoreKey, act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u4F7F\u7528\u5E73\u53F0\u9053\u5177"]>) => void;
    ['未知-ET_CONSUME_STORE_ITEM']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_CONSUME_STORE_ITEM"]>) => void;
    ['玩家-持有平台道具']: (/*道具编号*/
    store_key: py.StoreKey, act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u6301\u6709\u5E73\u53F0\u9053\u5177"]>) => void;
    ['玩家-属性变化']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u5C5E\u6027\u53D8\u5316"]>) => void;
    ['玩家-发送指定消息']: (/*消息内容*/
    msg: string, act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u53D1\u9001\u6307\u5B9A\u6D88\u606F"]>) => void;
    ['未知-ET_ROLE_INPUT_ACTIVATION_CODE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ROLE_INPUT_ACTIVATION_CODE"]>) => void;
    ['玩家-科技提升']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u79D1\u6280\u63D0\u5347"]>) => void;
    ['玩家-科技降低']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u79D1\u6280\u964D\u4F4E"]>) => void;
    ['玩家-科技变化']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u79D1\u6280\u53D8\u5316"]>) => void;
    ['单位-研发科技']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u7814\u53D1\u79D1\u6280"]>) => void;
    ['单位-获得科技']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u83B7\u5F97\u79D1\u6280"]>) => void;
    ['单位-失去科技']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5931\u53BB\u79D1\u6280"]>) => void;
    ['玩家-关系变化']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u5173\u7CFB\u53D8\u5316"]>) => void;
    ['技能-建造完成']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5EFA\u9020\u5B8C\u6210"]>) => void;
    ['单位-普攻命中']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u666E\u653B\u547D\u4E2D"]>) => void;
    ['单位-普攻造成伤害']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u666E\u653B\u9020\u6210\u4F24\u5BB3"]>) => void;
    ['技能-冷却变化']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u51B7\u5374\u53D8\u5316"]>) => void;
    ['未知-ET_ACTIVE_ABILITY_CHANGED']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ACTIVE_ABILITY_CHANGED"]>) => void;
    ['技能-层数变化']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5C42\u6570\u53D8\u5316"]>) => void;
    ['技能-学习']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5B66\u4E60"]>) => void;
    ['技能-充能进度变化']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5145\u80FD\u8FDB\u5EA6\u53D8\u5316"]>) => void;
    ['技能-可用状态变化']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u53EF\u7528\u72B6\u6001\u53D8\u5316"]>) => void;
    ['技能-沉默状态变化']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u6C89\u9ED8\u72B6\u6001\u53D8\u5316"]>) => void;
    ['技能-图标变化']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u56FE\u6807\u53D8\u5316"]>) => void;
    ['单位-名称变化']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u540D\u79F0\u53D8\u5316"]>) => void;
    ['单位-小地图图标变化']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5C0F\u5730\u56FE\u56FE\u6807\u53D8\u5316"]>) => void;
    ['单位-头像变化']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5934\u50CF\u53D8\u5316"]>) => void;
    ['未知-ET_ROLE_UNIT_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ROLE_UNIT_CHANGE"]>) => void;
    ['未知-ET_ROLE_UNIT_TAG_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ROLE_UNIT_TAG_CHANGE"]>) => void;
    ['未知-ET_UNIT_ENTER_MOVER_STATE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_ENTER_MOVER_STATE"]>) => void;
    ['单位-开始移动']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5F00\u59CB\u79FB\u52A8"]>) => void;
    ['单位-结束移动']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u7ED3\u675F\u79FB\u52A8"]>) => void;
    ['单位-移除']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u79FB\u9664"]>) => void;
    ['单位-移除后']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u79FB\u9664\u540E"]>) => void;
    ['单位-传送结束']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u4F20\u9001\u7ED3\u675F"]>) => void;
    ['单位-属性变化']: (/*单位*/
    unit: Unit, /*属性名*/
    attr: string, act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5C5E\u6027\u53D8\u5316"]>) => void;
    ['单位-即将死亡']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5373\u5C06\u6B7B\u4EA1"]>) => void;
    ['单位-死亡']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u6B7B\u4EA1"]>) => void;
    ['未知-ET_UNIT_ON_UNBIND_ROLE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_ON_UNBIND_ROLE"]>) => void;
    ['未知-ET_UNIT_ON_BIND_ROLE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_ON_BIND_ROLE"]>) => void;
    ['单位-受到伤害前']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u53D7\u5230\u4F24\u5BB3\u524D"]>) => void;
    ['单位-造成伤害前']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u9020\u6210\u4F24\u5BB3\u524D"]>) => void;
    ['单位-受到伤害时']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u53D7\u5230\u4F24\u5BB3\u65F6"]>) => void;
    ['单位-造成伤害时']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u9020\u6210\u4F24\u5BB3\u65F6"]>) => void;
    ['单位-造成伤害后']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u9020\u6210\u4F24\u5BB3\u540E"]>) => void;
    ['单位-受到伤害后']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u53D7\u5230\u4F24\u5BB3\u540E"]>) => void;
    ['单位-受到治疗前']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u53D7\u5230\u6CBB\u7597\u524D"]>) => void;
    ['单位-受到治疗后']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u53D7\u5230\u6CBB\u7597\u540E"]>) => void;
    ['单位-受到治疗时']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u53D7\u5230\u6CBB\u7597\u65F6"]>) => void;
    ['玩家-属性图标变化']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u5C5E\u6027\u56FE\u6807\u53D8\u5316"]>) => void;
    ['单位-施放技能']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u65BD\u653E\u6280\u80FD"]>) => void;
    ['未知-ET_UNIT_RELEASE_ABILITY_START']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_RELEASE_ABILITY_START"]>) => void;
    ['未知-ET_UNIT_RELEASE_ABILITY_END']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_RELEASE_ABILITY_END"]>) => void;
    ['未知-ET_UNIT_RELEASE_MAGIC_BOOK']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_RELEASE_MAGIC_BOOK"]>) => void;
    ['未知-ET_UNIT_LEVEL_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_LEVEL_CHANGE"]>) => void;
    ['未知-ET_UNIT_EXP_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_EXP_CHANGE"]>) => void;
    ['单位-获得经验前']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u83B7\u5F97\u7ECF\u9A8C\u524D"]>) => void;
    ['单位-获得经验后']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u83B7\u5F97\u7ECF\u9A8C\u540E"]>) => void;
    ['单位-接收命令']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u63A5\u6536\u547D\u4EE4"]>) => void;
    ['单位-击杀']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u51FB\u6740"]>) => void;
    ['单位-创建']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u521B\u5EFA"]>) => void;
    ['单位-进入战斗']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u8FDB\u5165\u6218\u6597"]>) => void;
    ['单位-脱离战斗']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u8131\u79BB\u6218\u6597"]>) => void;
    ['未知-ET_UNIT_CREATE_SLAVE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_CREATE_SLAVE"]>) => void;
    ['未知-ET_ITEM_ATTACHED_ATTR_CHANGED']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ITEM_ATTACHED_ATTR_CHANGED"]>) => void;
    ['单位-购买物品']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u8D2D\u4E70\u7269\u54C1"]>) => void;
    ['单位-购买单位']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u8D2D\u4E70\u5355\u4F4D"]>) => void;
    ['单位-出售物品']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u51FA\u552E\u7269\u54C1"]>) => void;
    ['商店-商品变化']: (act: Action1<Trigger, GameEventDeclarations["\u5546\u5E97-\u5546\u54C1\u53D8\u5316"]>) => void;
    ['商店-库存变化']: (act: Action1<Trigger, GameEventDeclarations["\u5546\u5E97-\u5E93\u5B58\u53D8\u5316"]>) => void;
    ['商店-售价变化']: (act: Action1<Trigger, GameEventDeclarations["\u5546\u5E97-\u552E\u4EF7\u53D8\u5316"]>) => void;
    ['单位-物品合成']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u7269\u54C1\u5408\u6210"]>) => void;
    ['单位-购买物品合成']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u8D2D\u4E70\u7269\u54C1\u5408\u6210"]>) => void;
    ['单位-复活']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u590D\u6D3B"]>) => void;
    ['单位-升级']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5347\u7EA7"]>) => void;
    ['未知-ET_REACH_MOVE_TARGET_UNIT']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_REACH_MOVE_TARGET_UNIT"]>) => void;
    ['未知-ET_COLLIDE_OBSTACLE_UNIT']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_COLLIDE_OBSTACLE_UNIT"]>) => void;
    ['单位-进入草丛']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u8FDB\u5165\u8349\u4E1B"]>) => void;
    ['单位-离开草丛']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u79BB\u5F00\u8349\u4E1B"]>) => void;
    ['未知-ET_MAP_VISIBILITY_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_MAP_VISIBILITY_CHANGE"]>) => void;
    ['单位-改变所属']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u6539\u53D8\u6240\u5C5E"]>) => void;
    ['未知-ET_UNIT_KV_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_KV_CHANGE"]>) => void;
    ['未知-ET_UNIT_MUL_KV_CHANGE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_MUL_KV_CHANGE"]>) => void;
    ['单位类型-前置条件成立']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u6210\u7ACB"]>) => void;
    ['单位类型-前置条件不成立']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u4E0D\u6210\u7ACB"]>) => void;
    ['物品类型-前置条件成立']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u6210\u7ACB"]>) => void;
    ['物品类型-前置条件不成立']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u4E0D\u6210\u7ACB"]>) => void;
    ['技能类型-前置条件成立']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u6210\u7ACB"]>) => void;
    ['技能类型-前置条件不成立']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u4E0D\u6210\u7ACB"]>) => void;
    ['科技类型-前置条件成立']: (act: Action1<Trigger, GameEventDeclarations["\u79D1\u6280\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u6210\u7ACB"]>) => void;
    ['科技类型-前置条件不成立']: (act: Action1<Trigger, GameEventDeclarations["\u79D1\u6280\u7C7B\u578B-\u524D\u7F6E\u6761\u4EF6\u4E0D\u6210\u7ACB"]>) => void;
    ['技能-升级']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5347\u7EA7"]>) => void;
    ['施法-即将开始']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u5373\u5C06\u5F00\u59CB"]>) => void;
    ['未知-ET_ABILITY_CS_END']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ABILITY_CS_END"]>) => void;
    ['施法-开始']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u5F00\u59CB"]>) => void;
    ['施法-引导']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u5F15\u5BFC"]>) => void;
    ['未知-ET_ITEM_ABILITY_PS_END']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ITEM_ABILITY_PS_END"]>) => void;
    ['施法-出手']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u51FA\u624B"]>) => void;
    ['施法-完成']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u5B8C\u6210"]>) => void;
    ['施法-结束']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u7ED3\u675F"]>) => void;
    ['未知-ET_ABILITY_CS_INTERRUPT']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ABILITY_CS_INTERRUPT"]>) => void;
    ['施法-打断开始']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u6253\u65AD\u5F00\u59CB"]>) => void;
    ['施法-打断引导']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u6253\u65AD\u5F15\u5BFC"]>) => void;
    ['施法-打断出手']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u6253\u65AD\u51FA\u624B"]>) => void;
    ['未知-ET_ABILITY_BS_INTERRUPT']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_ABILITY_BS_INTERRUPT"]>) => void;
    ['施法-停止']: (act: Action1<Trigger, GameEventDeclarations["\u65BD\u6CD5-\u505C\u6B62"]>) => void;
    ['技能-获得']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u83B7\u5F97"]>) => void;
    ['技能-失去']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5931\u53BB"]>) => void;
    ['技能-交换']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u4EA4\u6362"]>) => void;
    ['技能-禁用']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u7981\u7528"]>) => void;
    ['技能-启用']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u542F\u7528"]>) => void;
    ['技能-冷却结束']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u51B7\u5374\u7ED3\u675F"]>) => void;
    ['效果-获得']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u83B7\u5F97"]>) => void;
    ['效果-失去']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u5931\u53BB"]>) => void;
    ['效果-心跳']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u5FC3\u8DF3"]>) => void;
    ['效果-叠加']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u53E0\u52A0"]>) => void;
    ['效果-层数变化']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u5C42\u6570\u53D8\u5316"]>) => void;
    ['效果-即将获得']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u5373\u5C06\u83B7\u5F97"]>) => void;
    ['效果-覆盖']: (act: Action1<Trigger, GameEventDeclarations["\u6548\u679C-\u8986\u76D6"]>) => void;
    ['可破坏物-创建']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u521B\u5EFA"]>) => void;
    ['可破坏物-死亡']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u6B7B\u4EA1"]>) => void;
    ['可破坏物-复活']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u590D\u6D3B"]>) => void;
    ['可破坏物-资源变化']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u8D44\u6E90\u53D8\u5316"]>) => void;
    ['可破坏物-采集']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u91C7\u96C6"]>) => void;
    ['可破坏物-受到伤害']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u53D7\u5230\u4F24\u5BB3"]>) => void;
    ['选中-可破坏物']: (act: Action1<Trigger, GameEventDeclarations["\u9009\u4E2D-\u53EF\u7834\u574F\u7269"]>) => void;
    ['可破坏物-移除']: (act: Action1<Trigger, GameEventDeclarations["\u53EF\u7834\u574F\u7269-\u79FB\u9664"]>) => void;
    ['投射物-创建']: (act: Action1<Trigger, GameEventDeclarations["\u6295\u5C04\u7269-\u521B\u5EFA"]>) => void;
    ['投射物-死亡']: (act: Action1<Trigger, GameEventDeclarations["\u6295\u5C04\u7269-\u6B7B\u4EA1"]>) => void;
    ['界面-消息']: (/*自定义事件名称*/
    event_name: string, act: Action1<Trigger, GameEventDeclarations["\u754C\u9762-\u6D88\u606F"]>) => void;
    ['键盘-按下']: (/*按下的键*/
    key: y3.Const.KeyboardKey, act: Action1<Trigger, GameEventDeclarations["\u952E\u76D8-\u6309\u4E0B"]>) => void;
    ['键盘-抬起']: (/*抬起的键*/
    key: y3.Const.KeyboardKey, act: Action1<Trigger, GameEventDeclarations["\u952E\u76D8-\u62AC\u8D77"]>) => void;
    ['鼠标-按下']: (/*按下的键*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u6309\u4E0B"]>) => void;
    ['鼠标-抬起']: (/*抬起的键*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u62AC\u8D77"]>) => void;
    ['鼠标-双击']: (/*双击的键*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u53CC\u51FB"]>) => void;
    ['鼠标-按下单位']: (/*按下的键*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u6309\u4E0B\u5355\u4F4D"]>) => void;
    ['鼠标-抬起单位']: (/*抬起的键*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u62AC\u8D77\u5355\u4F4D"]>) => void;
    ['鼠标-双击单位']: (/*双击的键*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u53CC\u51FB\u5355\u4F4D"]>) => void;
    ['鼠标-移动']: (act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u79FB\u52A8"]>) => void;
    ['鼠标-滚轮']: (/*滚动方向*/
    key: y3.Const.MouseKey, act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u6EDA\u8F6E"]>) => void;
    ['选中-单位']: (act: Action1<Trigger, GameEventDeclarations["\u9009\u4E2D-\u5355\u4F4D"]>) => void;
    ['选中-物品']: (act: Action1<Trigger, GameEventDeclarations["\u9009\u4E2D-\u7269\u54C1"]>) => void;
    ['鼠标-双击物品']: (act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u53CC\u51FB\u7269\u54C1"]>) => void;
    ['鼠标-双击可破坏物']: (act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u53CC\u51FB\u53EF\u7834\u574F\u7269"]>) => void;
    ['选中-单位组']: (act: Action1<Trigger, GameEventDeclarations["\u9009\u4E2D-\u5355\u4F4D\u7EC4"]>) => void;
    ['技能-打开指示器']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u6253\u5F00\u6307\u793A\u5668"]>) => void;
    ['技能-关闭指示器']: (act: Action1<Trigger, GameEventDeclarations["\u6280\u80FD-\u5173\u95ED\u6307\u793A\u5668"]>) => void;
    ['物品-获得']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u83B7\u5F97"]>) => void;
    ['物品-进入物品栏']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u8FDB\u5165\u7269\u54C1\u680F"]>) => void;
    ['物品-进入背包']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u8FDB\u5165\u80CC\u5305"]>) => void;
    ['物品-失去']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u5931\u53BB"]>) => void;
    ['物品-离开物品栏']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u79BB\u5F00\u7269\u54C1\u680F"]>) => void;
    ['物品-离开背包']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u79BB\u5F00\u80CC\u5305"]>) => void;
    ['物品-使用']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u4F7F\u7528"]>) => void;
    ['单位-寻路开始']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5BFB\u8DEF\u5F00\u59CB"]>) => void;
    ['单位-寻路结束']: (act: Action1<Trigger, GameEventDeclarations["\u5355\u4F4D-\u5BFB\u8DEF\u7ED3\u675F"]>) => void;
    ['物品-堆叠变化']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u5806\u53E0\u53D8\u5316"]>) => void;
    ['物品-充能变化']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u5145\u80FD\u53D8\u5316"]>) => void;
    ['物品-创建']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u521B\u5EFA"]>) => void;
    ['物品-移除']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u79FB\u9664"]>) => void;
    ['物品-出售']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u51FA\u552E"]>) => void;
    ['物品-死亡']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u6B7B\u4EA1"]>) => void;
    ['物品-采集创建']: (act: Action1<Trigger, GameEventDeclarations["\u7269\u54C1-\u91C7\u96C6\u521B\u5EFA"]>) => void;
    ['鼠标-悬停']: (act: Action1<Trigger, GameEventDeclarations["\u9F20\u6807-\u60AC\u505C"]>) => void;
    ['玩家-发送消息']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u53D1\u9001\u6D88\u606F"]>) => void;
    ['游戏-消息']: (act: Action1<Trigger, GameEventDeclarations["\u6E38\u620F-\u6D88\u606F"]>) => void;
    ['玩家-语音发言']: (act: Action1<Trigger, GameEventDeclarations["\u73A9\u5BB6-\u8BED\u97F3\u53D1\u8A00"]>) => void;
    ['未知-ET_UNIT_3D_ACTIVE']: (act: Action1<Trigger, GameEventDeclarations["\u672A\u77E5-ET_UNIT_3D_ACTIVE"]>) => void;
}