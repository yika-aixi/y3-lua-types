//@ts-nocheck
declare interface PYConverter {
    /**
    * @param py_type string
    * @param py_value any
    * @return any
    */
    py_to_lua(py_type: string, py_value: any): any;
    /**
    * @param py_type string
    * @param lua_value any
    * @return any
    */
    lua_to_py(py_type: string, lua_value: any): any;
    /**
    * @param py_type string
    * @return fun(py_value:any):any
    */
    lua_to_py_factory(py_type: string): fun(py_value:any):any;
    /**
    * @param py_type string
    * @return fun(lua_value:any):any
    */
    py_to_lua_factory(py_type: string): fun(lua_value:any):any;
    /**
    * @param py_type string
    * @param converter fun(py_value:any):any
    */
    register_py_to_lua(py_type: string, converter: fun(py_value:any):any): void;
    /**
    * @param py_type string
    * @param converter fun(lua_value:any):any
    */
    register_lua_to_py(py_type: string, converter: fun(lua_value:any):any): void;
    /**
    * @param type_name string
    * @return string
    */
    get_py_type(type_name: string): string;
    /**
    * @param py_type_name string
    * @param lua_type_name string
    */
    register_type_alias(py_type_name: string, lua_type_name: string): void;
}
