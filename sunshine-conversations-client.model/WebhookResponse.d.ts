export default WebhookResponse;
/**
 * The WebhookResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse
 * @version 9.0.1
 */
declare class WebhookResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} The populated <code>WebhookResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The webhook.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook}
         */
    getWebhook(): any;
    /**
     * Sets The webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} webhook The webhook.
     */
    setWebhook(webhook: any): void;
    webhook: any;
}
