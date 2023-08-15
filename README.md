代码主要由工具生成, 目前我对`y3`还不熟悉,暂时不会手动维护,如果可以,你可以PR

目前因为工具那边注释生成还未解决完成,暂时不支持注解生成=-=,后续如果解决了,在更新

已知问题:
1. 因为工具在转换时一些信息丢失了,我无法知道方法是静态还是成员的,导致一些静态方法调用时转换为lua会出问题
- 如: y3.unit.create_unit


# v0.1.1 更新

1. 对`y3.game.event`进行了处理,现在会扫描[event.lua](https://github.com/y3-editor/y3-lualib/blob/main/meta/event.lua) 生成ts的约束文件,获得更耗的智能提示,效果如下
![RQFR871BBT8K$ES 7VQRY{H](https://github.com/yika-aixi/y3-lua-types/assets/22412994/d49e28b9-676c-456b-9719-213956825008)
![5YXKOW9WPWB`((F{T0G66RJ](https://github.com/yika-aixi/y3-lua-types/assets/22412994/3735c129-21ce-4257-a50a-4a1a8a32dcbd)
这个约束也支持手动扩展,TS的接口合并规则, 扩展例子可以看这个文件[UI](https://github.com/yika-aixi/y3-lua-types/blob/Master/types/manully/Y3EventDeclarations/UI.d.ts)

2. 热重载的`include`方法声明
