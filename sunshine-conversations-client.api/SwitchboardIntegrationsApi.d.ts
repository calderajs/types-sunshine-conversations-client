/**
* SwitchboardIntegrations service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardIntegrationsApi
* @version 9.0.1
*/
export default class SwitchboardIntegrationsApi {
    /**
    * Constructs a new SwitchboardIntegrationsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardIntegrationsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Switchboard Integration
     * Create a switchboard integration.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} switchboardIntegrationCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} and HTTP response
     */
    createSwitchboardIntegrationWithHttpInfo(appId: string, switchboardId: string, switchboardIntegrationCreateBody: any): Promise<any>;
    /**
     * Create Switchboard Integration
     * Create a switchboard integration.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} switchboardIntegrationCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse}
     */
    createSwitchboardIntegration(appId: string, switchboardId: string, switchboardIntegrationCreateBody: any): Promise<any>;
    /**
     * Delete Switchboard Integration
     * Deletes the switchboard integration. If the deleted switchboard integration had an active status for some conversations, the default switchboard integration will replace it. Note that it is forbidden to delete a switchboard integration if it's the default one (a new one must be chosen first) or if another switchboard integration's `nextSwitchboardIntegrationId` refers to it. The integration that was linked to the deleted switchboard integration will start receiving all conversation events, regardless of the switchboard status.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteSwitchboardIntegrationWithHttpInfo(appId: string, switchboardId: string, switchboardIntegrationId: string): Promise<any>;
    /**
     * Delete Switchboard Integration
     * Deletes the switchboard integration. If the deleted switchboard integration had an active status for some conversations, the default switchboard integration will replace it. Note that it is forbidden to delete a switchboard integration if it's the default one (a new one must be chosen first) or if another switchboard integration's `nextSwitchboardIntegrationId` refers to it. The integration that was linked to the deleted switchboard integration will start receiving all conversation events, regardless of the switchboard status.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteSwitchboardIntegration(appId: string, switchboardId: string, switchboardIntegrationId: string): Promise<any>;
    /**
     * List Switchboard Integrations
     * Lists all switchboard integrations linked to the switchboard.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse} and HTTP response
     */
    listSwitchboardIntegrationsWithHttpInfo(appId: string, switchboardId: string): Promise<any>;
    /**
     * List Switchboard Integrations
     * Lists all switchboard integrations linked to the switchboard.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse}
     */
    listSwitchboardIntegrations(appId: string, switchboardId: string): Promise<any>;
    /**
     * Update Switchboard Integration
     * Updates a switchboard integration record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody} switchboardIntegrationUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} and HTTP response
     */
    updateSwitchboardIntegrationWithHttpInfo(appId: string, switchboardId: string, switchboardIntegrationId: string, switchboardIntegrationUpdateBody: any): Promise<any>;
    /**
     * Update Switchboard Integration
     * Updates a switchboard integration record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {String} switchboardIntegrationId Identifies the switchboard integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationUpdateBody} switchboardIntegrationUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse}
     */
    updateSwitchboardIntegration(appId: string, switchboardId: string, switchboardIntegrationId: string, switchboardIntegrationUpdateBody: any): Promise<any>;
}
