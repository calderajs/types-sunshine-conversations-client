/**
* SwitchboardActions service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardActionsApi
* @version 9.0.1
*/
export default class SwitchboardActionsApi {
    /**
    * Constructs a new SwitchboardActionsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardActionsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Accept Control
     * The acceptControl action transfers the control of the conversation to the pending switchboard integration. When using integration auth scope, a 403 is returned if the pending switchboard integration is not the authenticated integration.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} acceptControlBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    acceptControlWithHttpInfo(appId: string, conversationId: string, acceptControlBody: any): Promise<any>;
    /**
     * Accept Control
     * The acceptControl action transfers the control of the conversation to the pending switchboard integration. When using integration auth scope, a 403 is returned if the pending switchboard integration is not the authenticated integration.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} acceptControlBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    acceptControl(appId: string, conversationId: string, acceptControlBody: any): Promise<any>;
    /**
     * Offer Control
     * The offerControl action will invite a switchboard integration to accept control of the conversation (changing its status to pending), and trigger a webhook signal to that integration indicating that they have been offered control of the conversation. Invalidates previous offerControl actions.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} offerControlBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    offerControlWithHttpInfo(appId: string, conversationId: string, offerControlBody: any): Promise<any>;
    /**
     * Offer Control
     * The offerControl action will invite a switchboard integration to accept control of the conversation (changing its status to pending), and trigger a webhook signal to that integration indicating that they have been offered control of the conversation. Invalidates previous offerControl actions.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} offerControlBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    offerControl(appId: string, conversationId: string, offerControlBody: any): Promise<any>;
    /**
     * Pass Control
     * Mark the named switchboard integration as active and transition all the other switchboard integrations to standby status.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody} passControlBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    passControlWithHttpInfo(appId: string, conversationId: string, passControlBody: any): Promise<any>;
    /**
     * Pass Control
     * Mark the named switchboard integration as active and transition all the other switchboard integrations to standby status.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody} passControlBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    passControl(appId: string, conversationId: string, passControlBody: any): Promise<any>;
}
