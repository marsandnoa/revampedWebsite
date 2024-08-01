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
 * @interface ApiUsersLoginPostRequest
 */
export interface ApiUsersLoginPostRequest  {
    /**
     * 
     * @type {string}
     * @memberof ApiUsersLoginPostRequest
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUsersLoginPostRequest
     */
    password?: string;
}

export function ApiUsersLoginPostRequestFromJSON(json: any): ApiUsersLoginPostRequest {
    return {
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function ApiUsersLoginPostRequestToJSON(value?: ApiUsersLoginPostRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'emailAddress': value.emailAddress,
        'password': value.password,
    };
}

