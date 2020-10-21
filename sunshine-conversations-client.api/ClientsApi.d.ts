/**
* Clients service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ClientsApi
* @version 9.0.1
*/
export default class ClientsApi {
    /**
    * Constructs a new ClientsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ClientsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Client
     * Create a client and link it to a channel specified by the matchCriteria.type.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} clientCreate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse} and HTTP response
     */
    createClientWithHttpInfo(appId: string, userIdOrExternalId: string, clientCreate: any): Promise<any>;
    /**
     * Create Client
     * Create a client and link it to a channel specified by the matchCriteria.type.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} clientCreate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse}
     */
    createClient(appId: string, userIdOrExternalId: string, clientCreate: any): Promise<any>;
    /**
     * List Clients
     * Get all the clients for a particular user, including both linked clients and pending clients. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/users/:userId/clients?page[after]=5ebee0975ac5304b664a12fa ```
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse} and HTTP response
     */
    listClientsWithHttpInfo(appId: string, userIdOrExternalId: string, opts: {
        page: any;
    }): Promise<any>;
    /**
     * List Clients
     * Get all the clients for a particular user, including both linked clients and pending clients. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/users/:userId/clients?page[after]=5ebee0975ac5304b664a12fa ```
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse}
     */
    listClients(appId: string, userIdOrExternalId: string, opts: {
        page: any;
    }): Promise<any>;
    /**
     * Remove Client
     * Remove a particular client and unsubscribe it from all connected conversations.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {String} clientId The client's id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    removeClientWithHttpInfo(appId: string, userIdOrExternalId: string, clientId: string): Promise<any>;
    /**
     * Remove Client
     * Remove a particular client and unsubscribe it from all connected conversations.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {String} clientId The client's id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    removeClient(appId: string, userIdOrExternalId: string, clientId: string): Promise<any>;
}
