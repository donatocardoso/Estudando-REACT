"use strict";

export default interface IBaseController {

    Get(route, params, func): void;
    Post(route, params, func): void;
    Put(route, params, func): void;
    Delete(route, params, func): void;

}
