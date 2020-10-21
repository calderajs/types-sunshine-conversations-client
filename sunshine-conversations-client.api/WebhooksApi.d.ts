/**
* Webhooks service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/WebhooksApi
* @version 9.0.1
*/
export default class WebhooksApi {
    /**
    * Constructs a new WebhooksApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/WebhooksApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create Webhook
     * Creates a new webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} webhookCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} and HTTP response
     */
    createWebhookWithHttpInfo(appId: string, integrationId: string, webhookCreateBody: any): Promise<any>;
    /**
     * Create Webhook
     * Creates a new webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} webhookCreateBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    createWebhook(appId: string, integrationId: string, webhookCreateBody: any): Promise<any>;
    /**
     * Delete Webhook
     * Deletes the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteWebhookWithHttpInfo(appId: string, integrationId: string, webhookId: string): Promise<any>;
    /**
     * Delete Webhook
     * Deletes the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteWebhook(appId: string, integrationId: string, webhookId: string): Promise<any>;
    /**
     * Get Webhook
     * Gets the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} and HTTP response
     */
    getWebhookWithHttpInfo(appId: string, integrationId: string, webhookId: string): Promise<any>;
    /**
     * Get Webhook
     * Gets the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    getWebhook(appId: string, integrationId: string, webhookId: string): Promise<any>;
    /**
     * List Webhooks
     * Lists all webhooks for a given Sunshine Conversations Connect integration or custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse} and HTTP response
     */
    listWebhooksWithHttpInfo(appId: string, integrationId: string): Promise<any>;
    /**
     * List Webhooks
     * Lists all webhooks for a given Sunshine Conversations Connect integration or custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse}
     */
    listWebhooks(appId: string, integrationId: string): Promise<any>;
    /**
     * Update Webhook
     * Updates the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} webhookBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} and HTTP response
     */
    updateWebhookWithHttpInfo(appId: string, integrationId: string, webhookId: string, webhookBody: any): Promise<any>;
    /**
     * Update Webhook
     * Updates the specified webhook associated with a Sunshine Conversations Connect integration or a custom integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} webhookId The id of the webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} webhookBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse}
     */
    updateWebhook(appId: string, integrationId: string, webhookId: string, webhookBody: any): Promise<any>;
}
