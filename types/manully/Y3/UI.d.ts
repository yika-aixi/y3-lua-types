declare module y3.ui
{
    function create_ui(this:void,player: Player, parent_ui: UI, comp_type: y3.Const.UIComponentType): UI;
    function get_ui(this:void,player: Player, ui_path: string): UI;   
}