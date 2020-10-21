/**
* Integrations service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/IntegrationsApi
* @version 9.0.1
*/
export default class IntegrationsApi {
    /**
    * Constructs a new IntegrationsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/IntegrationsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Integration
     * The Create Integration endpoint allows you to provision apps with front-end messaging channels. Selecting a `custom` integration allows the creation of webhooks.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} and HTTP response
     */
    createIntegrationWithHttpInfo(appId: string, integration: any): Promise<any>;
    /**
     * Create Integration
     * The Create Integration endpoint allows you to provision apps with front-end messaging channels. Selecting a `custom` integration allows the creation of webhooks.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    createIntegration(appId: string, integration: any): Promise<any>;
    /**
     * Delete Integration
     * Delete the specified integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteIntegrationWithHttpInfo(appId: string, integrationId: string): Promise<any>;
    /**
     * Delete Integration
     * Delete the specified integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteIntegration(appId: string, integrationId: string): Promise<any>;
    /**
     * Get Integration
     * Get integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} and HTTP response
     */
    getIntegrationWithHttpInfo(appId: string, integrationId: string): Promise<any>;
    /**
     * Get Integration
     * Get integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    getIntegration(appId: string, integrationId: string): Promise<any>;
    /**
     * List Integrations
     * List available integrations. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/integrations?page[after]=5e1606762556d93e9c176f69&page[size]=10&filter[types]=custom,web ```
     * @param {String} appId Identifies the app.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse} and HTTP response
     */
    listIntegrationsWithHttpInfo(appId: string, opts: {
        page: any;
        filter: any;
    }): Promise<any>;
    /**
     * List Integrations
     * List available integrations. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/integrations?page[after]=5e1606762556d93e9c176f69&page[size]=10&filter[types]=custom,web ```
     * @param {String} appId Identifies the app.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse}
     */
    listIntegrations(appId: string, opts: {
        page: any;
        filter: any;
    }): Promise<any>;
    /**
     * Update Integration
     * Allows you to update certain fields of existing integrations. If updating a specific property is not supported, you must delete the integration and re-create it with the new data.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} integrationUpdate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} and HTTP response
     */
    updateIntegrationWithHttpInfo(appId: string, integrationId: string, integrationUpdate: any): Promise<any>;
    /**
     * Update Integration
     * Allows you to update certain fields of existing integrations. If updating a specific property is not supported, you must delete the integration and re-create it with the new data.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} integrationUpdate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse}
     */
    updateIntegration(appId: string, integrationId: string, integrationUpdate: any): Promise<any>;
}
