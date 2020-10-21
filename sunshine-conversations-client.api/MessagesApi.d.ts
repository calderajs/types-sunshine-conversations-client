/**
* Messages service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/MessagesApi
* @version 9.0.1
*/
export default class MessagesApi {
    /**
    * Constructs a new MessagesApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/MessagesApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete All Messages
     * Delete all messages of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAllMessagesWithHttpInfo(appId: string, conversationId: string): Promise<any>;
    /**
     * Delete All Messages
     * Delete all messages of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAllMessages(appId: string, conversationId: string): Promise<any>;
    /**
     * Delete Message
     * Delete a single message of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {String} messageId The id of the message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteMessageWithHttpInfo(appId: string, conversationId: string, messageId: string): Promise<any>;
    /**
     * Delete Message
     * Delete a single message of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {String} messageId The id of the message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteMessage(appId: string, conversationId: string, messageId: string): Promise<any>;
    /**
     * List Messages
     * List all messages for a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits), in the _backwards_ direction, with the most recent (i.e. last) page of messages being returned by default. The `hasMore` flag indicates whether more messages exist in the direction you are currently paginating through. To page backwards in the history, use the `beforeCursor` or follow the `prev` link. The page size limit is fixed at 100 messages per page.  ```shell /v2/apps/:appId/conversations/:conversationId/messages?page[before]=5f32b88acf6bf25073b2be56 ```
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse} and HTTP response
     */
    listMessagesWithHttpInfo(appId: string, conversationId: string, opts: {
        page: any;
    }): Promise<any>;
    /**
     * List Messages
     * List all messages for a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits), in the _backwards_ direction, with the most recent (i.e. last) page of messages being returned by default. The `hasMore` flag indicates whether more messages exist in the direction you are currently paginating through. To page backwards in the history, use the `beforeCursor` or follow the `prev` link. The page size limit is fixed at 100 messages per page.  ```shell /v2/apps/:appId/conversations/:conversationId/messages?page[before]=5f32b88acf6bf25073b2be56 ```
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse}
     */
    listMessages(appId: string, conversationId: string, opts: {
        page: any;
    }): Promise<any>;
    /**
     * Post Message
     * Send a message in a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} messagePost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse} and HTTP response
     */
    postMessageWithHttpInfo(appId: string, conversationId: string, messagePost: any): Promise<any>;
    /**
     * Post Message
     * Send a message in a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} messagePost
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse}
     */
    postMessage(appId: string, conversationId: string, messagePost: any): Promise<any>;
}
