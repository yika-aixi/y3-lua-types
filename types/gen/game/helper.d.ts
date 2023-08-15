// @ts-nocheck
declare interface Helper {
    wrap_list(py_list: py.List, wrapper: fun(py_object:): any[];
    unwrap_list(lua_list: any[], unwrapper: fun(lua_object:): py.DynamicTypeMeta[];
}
