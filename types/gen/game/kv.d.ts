//@ts-nocheck
declare interface KV {
    /**
    *  保存自定义键值对。可以与ECA互通。
    * @param key string
    * @param value KV.SupportType
    */
    kv_save(key: string, value: KV.SupportType): void;
    /**
    *  是否拥有指定键值对。可以与ECA互通。
    * @param key string
    * @return boolean
    */
    kv_has(key: string): boolean;
    /**
    * @param key string
    * @param lua_type 'boolean' | 'number' | 'integer' | 'string' | KV.SupportTypeEnum
    * @return any
    */
    kv_load(key: string, lua_type: 'boolean'): any;
}
