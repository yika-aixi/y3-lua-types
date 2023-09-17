//@ts-nocheck
declare interface Helper {
    /**
    * @param py_list py.List
    * @param wrapper? fun(py_object: any): any
    * @return any[]
    */
    unpack_list(py_list: py.List, wrapper): any[];
    /**
    * @param lua_list any[]
    * @param unwrapper? fun(lua_object: any): any
    * @return py.DynamicTypeMeta[]
    */
    pack_list(lua_list: any[], unwrapper): py.DynamicTypeMeta[];
}
