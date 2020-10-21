/**
* Conversations service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ConversationsApi
* @version 9.0.1
*/
export default class ConversationsApi {
    /**
    * Constructs a new ConversationsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ConversationsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Conversation
     * Create a conversation for the specified user(s).
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody} conversationCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} and HTTP response
     */
    createConversationWithHttpInfo(appId: string, conversationCreateBody: any): Promise<any>;
    /**
     * Create Conversation
     * Create a conversation for the specified user(s).
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateBody} conversationCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    createConversation(appId: string, conversationCreateBody: any): Promise<any>;
    /**
     * Delete Conversation
     * Delete an entire conversation record, along with its messages and attachments. Note that the default conversation cannot be deleted, but the messages contained [can be](#deleteAllMessages).
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteConversationWithHttpInfo(appId: string, conversationId: string): Promise<any>;
    /**
     * Delete Conversation
     * Delete an entire conversation record, along with its messages and attachments. Note that the default conversation cannot be deleted, but the messages contained [can be](#deleteAllMessages).
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteConversation(appId: string, conversationId: string): Promise<any>;
    /**
     * Get Conversation
     * Fetches an individual conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} and HTTP response
     */
    getConversationWithHttpInfo(appId: string, conversationId: string): Promise<any>;
    /**
     * Get Conversation
     * Fetches an individual conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    getConversation(appId: string, conversationId: string): Promise<any>;
    /**
     * List Conversations
     * Lists all conversations that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/conversations?filter[userId]=42589ad070d43be9b00ff7e5 ```
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} filter Contains parameters for filtering the results.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse} and HTTP response
     */
    listConversationsWithHttpInfo(appId: string, filter: any, opts: {
        page: any;
    }): Promise<any>;
    /**
     * List Conversations
     * Lists all conversations that a user is part of. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits). ```shell /v2/apps/:appId/conversations?filter[userId]=42589ad070d43be9b00ff7e5 ```
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} filter Contains parameters for filtering the results.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListResponse}
     */
    listConversations(appId: string, filter: any, opts: {
        page: any;
    }): Promise<any>;
    /**
     * Update Conversation
     * Updates a conversation record.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} conversationUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} and HTTP response
     */
    updateConversationWithHttpInfo(appId: string, conversationId: string, conversationUpdateBody: any): Promise<any>;
    /**
     * Update Conversation
     * Updates a conversation record.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} conversationUpdateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse}
     */
    updateConversation(appId: string, conversationId: string, conversationUpdateBody: any): Promise<any>;
}
