export default ConversationMessageDeliveryPayloadDestination;
/**
 * The ConversationMessageDeliveryPayloadDestination model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination
 * @version 9.0.1
 */
declare class ConversationMessageDeliveryPayloadDestination {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationMessageDeliveryPayloadDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} The populated <code>ConversationMessageDeliveryPayloadDestination</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
     * @param {String} type An identifier for the channel to which a message was sent to. May include one of \"web\", \"ios\", \"android\", \"messenger\", \"viber\", \"telegram\", \"wechat\", \"line\", \"twilio\", \"api\", \"notification\", or any other channel.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns Identifier indicating which integration the message was sent to.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets Identifier indicating which integration the message was sent to.
     * @param {String} integrationId Identifier indicating which integration the message was sent to.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
}
