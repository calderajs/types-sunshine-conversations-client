export default SourceWebhook;
/**
 * The SourceWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook
 * @version 9.0.1
 */
declare class SourceWebhook {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SourceWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} The populated <code>SourceWebhook</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     * @param {String} type An identifier for the channel from which a message originated. May include one of api, sdk, messenger, or any number of other channels.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns Identifier indicating which integration the message was sent from. For user messages only.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets Identifier indicating which integration the message was sent from. For user messages only.
     * @param {String} integrationId Identifier indicating which integration the message was sent from. For user messages only.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns Message identifier assigned by the originating channel.
         * @return {String}
         */
    getOriginalMessageId(): string;
    /**
     * Sets Message identifier assigned by the originating channel.
     * @param {String} originalMessageId Message identifier assigned by the originating channel.
     */
    setOriginalMessageId(originalMessageId: string): void;
    originalMessageId: string;
    /**
         * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
         * @return {String}
         */
    getOriginalMessageTimestamp(): string;
    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
     * @param {String} originalMessageTimestamp A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing when the third-party channel received the message.
     */
    setOriginalMessageTimestamp(originalMessageTimestamp: string): void;
    originalMessageTimestamp: string;
    /**
         * Returns The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
         */
    getClient(): any;
    /**
     * Sets The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client The client from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook.
     */
    setClient(client: any): void;
    client: any;
    /**
         * Returns The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device}
         */
    getDevice(): any;
    /**
     * Sets The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} device The device from which the user authored the message or activity, if applicable. This field will only be present if the `includeFullSource` option is enabled for the webhook
     */
    setDevice(device: any): void;
    device: any;
}
