"use strict";

export default interface IResponseController {

    Content: Array<Object> | Object;
    Message: String;
    StatusCode: Int32Array;
    
    Response(): void;
    Response<T>(): void;

}
