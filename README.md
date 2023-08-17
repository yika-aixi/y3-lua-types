代码主要由工具生成, 目前我对`y3`还不熟悉,暂时不会手动维护,如果可以,你可以PR

目前因为工具那边注释生成还未解决完成,暂时不支持注解生成=-=,后续如果解决了,在更新

### TS的[开发模板](https://github.com/CabinIcarus/y3TsTemplate),模板中附带的[测试代码](https://github.com/CabinIcarus/y3TsTemplate/blob/Master/Scripts/Ts/Example/Test1.ts)

# 已知问题:
1. 因为工具在转换时一些信息丢失了,我无法知道方法是静态还是成员的,导致一些静态方法调用时转换为lua会出问题
- 如: y3.unit.create_unit


# v0.1.4 更新

1. 对`y3.game.event`进行了处理,现在会扫描[event.lua](https://github.com/y3-editor/y3-lualib/blob/main/meta/event.lua)和[eventconfig.lua](https://github.com/y3-editor/y3-lualib/blob/main/meta/eventconfig.lua) 生成ts的声明文件,获得更好的智能提示,效果如下, 感谢`@西索酱`的PR给我的提示

![Z{_NQD%@QP71}$7 YPW@33](https://github.com/yika-aixi/y3-lua-types/assets/22412994/76737769-7bb5-4349-9d32-ec5f394daa51)
![FK9Q NT)GB{H}BAVUVSMSGL](https://github.com/yika-aixi/y3-lua-types/assets/22412994/2eeaad8c-949e-44ae-9ddb-69f113c32c67)

手动扩展方式需要写2个必须定义和1个可选定义:
1. `GameEventDeclarations` 接口,写事件的定义
- - 结构为: 事件名 : 事件回调参数类型 | `GameEventCallbackParamsDeclarations["name]`
2. `GameEventParamsDeclarations` 接口, 写事件的参数定义
- - 结构的固定格式: 事件名 : (...事件参数列表, act:Action1<Trigger, `GameEventDeclarations['事件名']`>)->void;
3. [可选]`GameEventCallbackParamsDeclarations` 接口, 写事件的回调参数定义,就是事件触发后的action中的参数
- - 结构为: 名字 : 类型定义
