/* tslint:disable */
/* eslint-disable */
/**
 * Test API
 * Test API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: test@yassun.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateUser,
    CreateUserFromJSON,
    CreateUserToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
} from '../models';

export interface CreateUserRequest {
    createUser?: CreateUser;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * ユーザ作成
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserToJSON(requestParameters.createUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * ユーザ作成
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}