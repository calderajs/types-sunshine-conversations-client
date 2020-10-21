export default ConversationMessageDeliveryPayload;
/**
 * The ConversationMessageDeliveryPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload
 * @version 9.0.1
 */
declare class ConversationMessageDeliveryPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationMessageDeliveryPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} The populated <code>ConversationMessageDeliveryPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The user associated with the conversation.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getUser(): any;
    /**
     * Sets The user associated with the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user associated with the conversation.
     */
    setUser(user: any): void;
    user: any;
    /**
         * Returns The conversation in which the message was sent.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getConversation(): any;
    /**
     * Sets The conversation in which the message was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the message was sent.
     */
    setConversation(conversation: any): void;
    conversation: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage}
         */
    getMessage(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage} message
     */
    setMessage(message: any): void;
    message: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination}
         */
    getDestination(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadDestination} destination
     */
    setDestination(destination: any): void;
    destination: any;
    /**
         * Returns An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages>}
         */
    getExternalMessages(): Array<any>;
    /**
     * Sets An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadExternalMessages>} externalMessages An array of objects representing the third-party messages associated with the event. The order of the external messages is not guaranteed to be the same across the different triggers. Note that some channels don’t expose message IDs, in which case this field will be unset.
     */
    setExternalMessages(externalMessages: any): void;
    externalMessages: any;
    /**
         * Returns A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
         * @return {Boolean}
         */
    getIsFinalEvent(): boolean;
    /**
     * Sets A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
     * @param {Boolean} isFinalEvent A boolean indicating whether the webhook is the final one for the `message.id` and `destination.type` pair.
     */
    setIsFinalEvent(isFinalEvent: boolean): void;
    isFinalEvent: boolean;
}
