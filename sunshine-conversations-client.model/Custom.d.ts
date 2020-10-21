export default Custom;
/**
 * The Custom model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Custom
 * @version 9.0.1
 */
declare class Custom {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, webhooks: any): void;
    /**
     * Constructs a <code>Custom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Custom} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Custom} The populated <code>Custom</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Custom</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Custom
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf
     * @param type {String} The type of integration.
     * @param webhooks {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} An array of webhooks associated with the custom integration.
     */
    constructor(type: string, webhooks: Array<any>);
    /**
         * Returns The type of integration.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns An array of webhooks associated with the custom integration.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>}
         */
    getWebhooks(): Array<any>;
    /**
     * Sets An array of webhooks associated with the custom integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} webhooks An array of webhooks associated with the custom integration.
     */
    setWebhooks(webhooks: any): void;
    webhooks: any;
}
