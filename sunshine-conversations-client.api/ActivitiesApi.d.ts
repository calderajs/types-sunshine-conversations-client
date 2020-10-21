/**
* Activities service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ActivitiesApi
* @version 9.0.1
*/
export default class ActivitiesApi {
    /**
    * Constructs a new ActivitiesApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ActivitiesApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Post Activity
     * Notify Sunshine Conversations of different conversation activities. Supported activity types are: * Typing activity * Conversation read event
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} activityPost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    postActivityWithHttpInfo(appId: string, conversationId: string, activityPost: any): Promise<any>;
    /**
     * Post Activity
     * Notify Sunshine Conversations of different conversation activities. Supported activity types are: * Typing activity * Conversation read event
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} activityPost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    postActivity(appId: string, conversationId: string, activityPost: any): Promise<any>;
}
