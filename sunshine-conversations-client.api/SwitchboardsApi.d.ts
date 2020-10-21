/**
* Switchboards service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardsApi
* @version 9.0.1
*/
export default class SwitchboardsApi {
    /**
    * Constructs a new SwitchboardsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Switchboard
     * Create a switchboard.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} and HTTP response
     */
    createSwitchboardWithHttpInfo(appId: string): Promise<any>;
    /**
     * Create Switchboard
     * Create a switchboard.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse}
     */
    createSwitchboard(appId: string): Promise<any>;
    /**
     * Delete Switchboard
     * Deletes the switchboard and all its switchboard integrations. The integrations linked to these switchboard integrations are not deleted and will start receiving all conversation events.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteSwitchboardWithHttpInfo(appId: string, switchboardId: string): Promise<any>;
    /**
     * Delete Switchboard
     * Deletes the switchboard and all its switchboard integrations. The integrations linked to these switchboard integrations are not deleted and will start receiving all conversation events.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteSwitchboard(appId: string, switchboardId: string): Promise<any>;
    /**
     * List Switchboards
     * Lists all switchboards belonging to the app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse} and HTTP response
     */
    listSwitchboardsWithHttpInfo(appId: string): Promise<any>;
    /**
     * List Switchboards
     * Lists all switchboards belonging to the app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse}
     */
    listSwitchboards(appId: string): Promise<any>;
    /**
     * Update Switchboard
     * Updates a switchboard record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} switchboardUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} and HTTP response
     */
    updateSwitchboardWithHttpInfo(appId: string, switchboardId: string, switchboardUpdateBody: any): Promise<any>;
    /**
     * Update Switchboard
     * Updates a switchboard record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} switchboardUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse}
     */
    updateSwitchboard(appId: string, switchboardId: string, switchboardUpdateBody: any): Promise<any>;
}
