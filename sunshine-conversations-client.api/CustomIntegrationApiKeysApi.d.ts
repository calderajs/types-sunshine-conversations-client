/**
* CustomIntegrationApiKeys service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi
* @version 9.0.1
*/
export default class CustomIntegrationApiKeysApi {
    /**
    * Constructs a new CustomIntegrationApiKeysApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Integration Key
     * Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} integrationApiKey
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} and HTTP response
     */
    createCustomIntegrationKeyWithHttpInfo(appId: string, integrationId: string, integrationApiKey: any): Promise<any>;
    /**
     * Create Integration Key
     * Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} integrationApiKey
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    createCustomIntegrationKey(appId: string, integrationId: string, integrationApiKey: any): Promise<any>;
    /**
     * Delete Integration Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteCustomIntegrationKeyWithHttpInfo(appId: string, integrationId: string, keyId: string): Promise<any>;
    /**
     * Delete Integration Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteCustomIntegrationKey(appId: string, integrationId: string, keyId: string): Promise<any>;
    /**
     * Get Integration Key
     * Get the specified API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} and HTTP response
     */
    getCustomIntegrationKeyWithHttpInfo(appId: string, integrationId: string, keyId: string): Promise<any>;
    /**
     * Get Integration Key
     * Get the specified API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    getCustomIntegrationKey(appId: string, integrationId: string, keyId: string): Promise<any>;
    /**
     * List Integration Keys
     * Lists all API keys for a given integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} and HTTP response
     */
    listCustomIntegrationKeysWithHttpInfo(appId: string, integrationId: string): Promise<any>;
    /**
     * List Integration Keys
     * Lists all API keys for a given integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse}
     */
    listCustomIntegrationKeys(appId: string, integrationId: string): Promise<any>;
}
