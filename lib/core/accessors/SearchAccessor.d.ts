import { ValueState } from "../state";
import { Accessor } from "./Accessor";
export interface SearchOptions {
    queryFields?: Array<string>;
    prefixQueryFields?: Array<string>;
    queryOptions?: any;
}
export declare class SearchAccessor extends Accessor<ValueState> {
    state: ValueState;
    options: SearchOptions;
    constructor(key: any, options?: {});
    buildSharedQuery(query: any): any;
}
