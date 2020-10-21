export default ConversationMessageDeliveryPayloadExternalMessages;
/**
 * The ConversationMessageDeliveryPayloadExternalMessages model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages
 * @version 9.0.1
 */
declare class ConversationMessageDeliveryPayloadExternalMessages {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationMessageDeliveryPayloadExternalMessages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages} The populated <code>ConversationMessageDeliveryPayloadExternalMessages</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A string representing the ID of the external message.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets A string representing the ID of the external message.
     * @param {String} id A string representing the ID of the external message.
     */
    setId(id: string): void;
    id: string;
}
