export default ConversationMessageDeliveryChannelEventAllOf;
/**
 * The ConversationMessageDeliveryChannelEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf
 * @version 9.0.1
 */
declare class ConversationMessageDeliveryChannelEventAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationMessageDeliveryChannelEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryChannelEventAllOf} The populated <code>ConversationMessageDeliveryChannelEventAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload}
         */
    getPayload(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} payload
     */
    setPayload(payload: any): void;
    payload: any;
}
