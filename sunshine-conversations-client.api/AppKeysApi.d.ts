/**
* AppKeys service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/AppKeysApi
* @version 9.0.1
*/
export default class AppKeysApi {
    /**
    * Constructs a new AppKeysApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/AppKeysApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create App Key
     * Creates an API key for the specified app. The response body will include a secret  as well as its corresponding id, which you can use to generate JSON Web Tokens to  securely make API calls on behalf of the app.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} appKeyCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} and HTTP response
     */
    createAppKeyWithHttpInfo(appId: string, appKeyCreateBody: any): Promise<any>;
    /**
     * Create App Key
     * Creates an API key for the specified app. The response body will include a secret  as well as its corresponding id, which you can use to generate JSON Web Tokens to  securely make API calls on behalf of the app.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} appKeyCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse}
     */
    createAppKey(appId: string, appKeyCreateBody: any): Promise<any>;
    /**
     * Delete App Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAppKeyWithHttpInfo(appId: string, keyId: string): Promise<any>;
    /**
     * Delete App Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAppKey(appId: string, keyId: string): Promise<any>;
    /**
     * Get App Key
     * Returns an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} and HTTP response
     */
    getAppKeyWithHttpInfo(appId: string, keyId: string): Promise<any>;
    /**
     * Get App Key
     * Returns an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse}
     */
    getAppKey(appId: string, keyId: string): Promise<any>;
    /**
     * List App Keys
     * Lists all API keys for a given app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse} and HTTP response
     */
    listAppKeysWithHttpInfo(appId: string): Promise<any>;
    /**
     * List App Keys
     * Lists all API keys for a given app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse}
     */
    listAppKeys(appId: string): Promise<any>;
}
