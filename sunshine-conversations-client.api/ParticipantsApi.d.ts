/**
* Participants service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ParticipantsApi
* @version 9.0.1
*/
export default class ParticipantsApi {
    /**
    * Constructs a new ParticipantsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ParticipantsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Join Conversation
     * Adds a user to a conversation using either their userId or userExternalId. The endpoint only supports adding a participant to a sdkGroup conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody} participantJoinBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse} and HTTP response
     */
    joinConversationWithHttpInfo(appId: string, conversationId: string, participantJoinBody: any): Promise<any>;
    /**
     * Join Conversation
     * Adds a user to a conversation using either their userId or userExternalId. The endpoint only supports adding a participant to a sdkGroup conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantJoinBody} participantJoinBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse}
     */
    joinConversation(appId: string, conversationId: string, participantJoinBody: any): Promise<any>;
    /**
     * Leave Conversation
     * Removes a user from a conversation using either their userId, userExternalId, or participantId.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} participantLeaveBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    leaveConversationWithHttpInfo(appId: string, conversationId: string, participantLeaveBody: any): Promise<any>;
    /**
     * Leave Conversation
     * Removes a user from a conversation using either their userId, userExternalId, or participantId.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} participantLeaveBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    leaveConversation(appId: string, conversationId: string, participantLeaveBody: any): Promise<any>;
    /**
     * List Participants
     * Lists all the participants of a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/conversations/:conversationId/participants?page[before]=26508c10541a4b0ff472e5e2 ```
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse} and HTTP response
     */
    listParticipantsWithHttpInfo(appId: string, conversationId: string, opts: {
        page: any;
    }): Promise<any>;
    /**
     * List Participants
     * Lists all the participants of a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/conversations/:conversationId/participants?page[before]=26508c10541a4b0ff472e5e2 ```
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse}
     */
    listParticipants(appId: string, conversationId: string, opts: {
        page: any;
    }): Promise<any>;
}
