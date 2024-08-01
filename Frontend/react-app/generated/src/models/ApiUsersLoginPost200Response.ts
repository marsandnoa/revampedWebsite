// tslint:disable
/**
 * A swagger API
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiUsersLoginPost200Response
 */
export interface ApiUsersLoginPost200Response  {
    /**
     * 
     * @type {string}
     * @memberof ApiUsersLoginPost200Response
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUsersLoginPost200Response
     */
    message?: string;
}

export function ApiUsersLoginPost200ResponseFromJSON(json: any): ApiUsersLoginPost200Response {
    return {
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ApiUsersLoginPost200ResponseToJSON(value?: ApiUsersLoginPost200Response): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'access_token': value.accessToken,
        'message': value.message,
    };
}

