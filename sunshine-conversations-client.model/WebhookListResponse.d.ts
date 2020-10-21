export default WebhookListResponse;
/**
 * The WebhookListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse
 * @version 9.0.1
 */
declare class WebhookListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WebhookListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookListResponse} The populated <code>WebhookListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns List of webhooks associated with the integration.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>}
         */
    getWebhooks(): Array<any>;
    /**
     * Sets List of webhooks associated with the integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks List of webhooks associated with the integration.
     */
    setWebhooks(webhooks: any): void;
    webhooks: any;
}
