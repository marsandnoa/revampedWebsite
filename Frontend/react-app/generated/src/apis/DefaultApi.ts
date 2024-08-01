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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    ApiUsersGetallGet200ResponseInner,
    ApiUsersGetallGet200ResponseInnerFromJSON,
    ApiUsersGetallGet200ResponseInnerToJSON,
    ApiUsersLoginPost200Response,
    ApiUsersLoginPost200ResponseFromJSON,
    ApiUsersLoginPost200ResponseToJSON,
    ApiUsersLoginPostRequest,
    ApiUsersLoginPostRequestFromJSON,
    ApiUsersLoginPostRequestToJSON,
    ApiUsersRegisterPostRequest,
    ApiUsersRegisterPostRequestFromJSON,
    ApiUsersRegisterPostRequestToJSON,
} from '../models';

export interface ApiUsersLoginPostRequest {
    body?: ApiUsersLoginPostRequest;
}

export interface ApiUsersRegisterPostRequest {
    body?: ApiUsersRegisterPostRequest;
}


/**
 */
function apiUsersGetallGetRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<ApiUsersGetallGet200ResponseInner>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/users/getall`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ApiUsersGetallGet200ResponseInnerFromJSON), text);
    }

    return config;
}

/**
*/
export function apiUsersGetallGet<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<ApiUsersGetallGet200ResponseInner>>): QueryConfig<T> {
    return apiUsersGetallGetRaw( requestConfig);
}

/**
 */
function apiUsersLoginPostRaw<T>(requestParameters: ApiUsersLoginPostRequest, requestConfig: runtime.TypedQueryConfig<T, ApiUsersLoginPost200Response> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/users/login`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || ApiUsersLoginPostRequestToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ApiUsersLoginPost200ResponseFromJSON(body), text);
    }

    return config;
}

/**
*/
export function apiUsersLoginPost<T>(requestParameters: ApiUsersLoginPostRequest, requestConfig?: runtime.TypedQueryConfig<T, ApiUsersLoginPost200Response>): QueryConfig<T> {
    return apiUsersLoginPostRaw(requestParameters, requestConfig);
}

/**
 */
function apiUsersRegisterPostRaw<T>(requestParameters: ApiUsersRegisterPostRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/users/register`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || ApiUsersRegisterPostRequestToJSON(requestParameters.body),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
*/
export function apiUsersRegisterPost<T>(requestParameters: ApiUsersRegisterPostRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return apiUsersRegisterPostRaw(requestParameters, requestConfig);
}

