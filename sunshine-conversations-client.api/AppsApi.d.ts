/**
* Apps service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/AppsApi
* @version 9.0.1
*/
export default class AppsApi {
    /**
    * Constructs a new AppsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/AppsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create App
     * Creates a new app. When using [service account](#service-accounts) credentials, the service account is automatically granted access to the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody} appCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} and HTTP response
     */
    createAppWithHttpInfo(appCreateBody: any): Promise<any>;
    /**
     * Create App
     * Creates a new app. When using [service account](#service-accounts) credentials, the service account is automatically granted access to the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody} appCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    createApp(appCreateBody: any): Promise<any>;
    /**
     * Delete App
     * Removes the specified app, including all its enabled integrations.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAppWithHttpInfo(appId: string): Promise<any>;
    /**
     * Delete App
     * Removes the specified app, including all its enabled integrations.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteApp(appId: string): Promise<any>;
    /**
     * Get App
     * Fetches an individual app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} and HTTP response
     */
    getAppWithHttpInfo(appId: string): Promise<any>;
    /**
     * Get App
     * Fetches an individual app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    getApp(appId: string): Promise<any>;
    /**
     * List Apps
     * Lists all apps that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps?page[after]=5e1606762556d93e9c176f69&page[size]=10 ```
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse} and HTTP response
     */
    listAppsWithHttpInfo(opts: {
        page: any;
        filter: any;
    }): Promise<any>;
    /**
     * List Apps
     * Lists all apps that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps?page[after]=5e1606762556d93e9c176f69&page[size]=10 ```
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} opts.filter Contains parameters for filtering the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppListResponse}
     */
    listApps(opts: {
        page: any;
        filter: any;
    }): Promise<any>;
    /**
     * Update App
     * Updates an app.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody} appUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse} and HTTP response
     */
    updateAppWithHttpInfo(appId: string, appUpdateBody: any): Promise<any>;
    /**
     * Update App
     * Updates an app.
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppUpdateBody} appUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppResponse}
     */
    updateApp(appId: string, appUpdateBody: any): Promise<any>;
}
