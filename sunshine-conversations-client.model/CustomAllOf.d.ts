export default CustomAllOf;
/**
 * The CustomAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf
 * @version 9.0.1
 */
declare class CustomAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, webhooks: any): void;
    /**
     * Constructs a <code>CustomAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf} The populated <code>CustomAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CustomAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/CustomAllOf
     * @param webhooks {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook>} An array of webhooks associated with the custom integration.
     */
    constructor(webhooks: Array<any>);
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
