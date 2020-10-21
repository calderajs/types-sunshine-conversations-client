export default WebhookSubSchema;
/**
 * The WebhookSubSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema
 * @version 9.0.1
 */
declare class WebhookSubSchema {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WebhookSubSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookSubSchema} The populated <code>WebhookSubSchema</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the webhook.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the webhook.
     * @param {String} id The unique ID of the webhook.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns Schema version of the payload delivered to this webhook (v2).
         * @return {String}
         */
    getVersion(): string;
    /**
     * Sets Schema version of the payload delivered to this webhook (v2).
     * @param {String} version Schema version of the payload delivered to this webhook (v2).
     */
    setVersion(version: string): void;
    version: string;
}
