/**
* Users service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/UsersApi
* @version 9.0.1
*/
export default class UsersApi {
    /**
    * Constructs a new UsersApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/UsersApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create User
     * Creates a new user.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} userCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    createUserWithHttpInfo(appId: string, userCreateBody: any): Promise<any>;
    /**
     * Create User
     * Creates a new user.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} userCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    createUser(appId: string, userCreateBody: any): Promise<any>;
    /**
     * Delete User
     * Delete a user, its clients and its conversation history. The user is considered completely deleted once the `user:delete` webhook is fired. To only delete a user’s personal information, see [Delete User Personal Information](#operation/deleteUserPersonalInformation).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteUserWithHttpInfo(appId: string, userIdOrExternalId: string): Promise<any>;
    /**
     * Delete User
     * Delete a user, its clients and its conversation history. The user is considered completely deleted once the `user:delete` webhook is fired. To only delete a user’s personal information, see [Delete User Personal Information](#operation/deleteUserPersonalInformation).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteUser(appId: string, userIdOrExternalId: string): Promise<any>;
    /**
     * Delete User Personal Information
     * Delete a user’s personal information. Calling this API will clear `givenName`, `surname`, `email` and `avatarUrl` and every custom property for the specified user. For every client owned by the user, it will also clear `displayName`, `avatarUrl` and any channel specific information stored in the info and raw fields. Calling this API doesn’t delete the user’s conversation history. To fully delete the user, see [Delete User](#operation/deleteUser).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    deleteUserPersonalInformationWithHttpInfo(appId: string, userIdOrExternalId: string): Promise<any>;
    /**
     * Delete User Personal Information
     * Delete a user’s personal information. Calling this API will clear `givenName`, `surname`, `email` and `avatarUrl` and every custom property for the specified user. For every client owned by the user, it will also clear `displayName`, `avatarUrl` and any channel specific information stored in the info and raw fields. Calling this API doesn’t delete the user’s conversation history. To fully delete the user, see [Delete User](#operation/deleteUser).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    deleteUserPersonalInformation(appId: string, userIdOrExternalId: string): Promise<any>;
    /**
     * Get User
     * Fetches an individual user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    getUserWithHttpInfo(appId: string, userIdOrExternalId: string): Promise<any>;
    /**
     * Get User
     * Fetches an individual user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    getUser(appId: string, userIdOrExternalId: string): Promise<any>;
    /**
     * Update User
     * Updates a user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} userUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} and HTTP response
     */
    updateUserWithHttpInfo(appId: string, userIdOrExternalId: string, userUpdateBody: any): Promise<any>;
    /**
     * Update User
     * Updates a user.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} userUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse}
     */
    updateUser(appId: string, userIdOrExternalId: string, userUpdateBody: any): Promise<any>;
}
