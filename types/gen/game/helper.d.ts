//@ts-nocheck
declare interface Helper {
    /**
    * @param py_list py.List
    * @param wrapper fun(py_object: any): any
    * @return any[]
    */
    wrap_list(py_list: py.List, wrapper: fun(py_object:): any[];
    /**
    * @param lua_list any[]
    * @param unwrapper fun(lua_object: any): any
    * @return py.DynamicTypeMeta[]
    */
    unwrap_list(lua_list: any[], unwrapper: fun(lua_object:): py.DynamicTypeMeta[];
}
