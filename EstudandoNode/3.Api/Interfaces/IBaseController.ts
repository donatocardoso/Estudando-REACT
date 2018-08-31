/* ================================== USAGE =================================

    import IBaseController from "./Interfaces/IBaseController";

============================================================================= */

import IResponseController from "./IResponseController";
import BaseController      from "../Controllers/BaseController";

export default interface IBaseController {

    Get<T>(route, params, func): IResponseController;
    Post(route, params, func): IResponseController;
    Put(route, params, func): IResponseController;
    Delete(route, params, func): IResponseController;

}
