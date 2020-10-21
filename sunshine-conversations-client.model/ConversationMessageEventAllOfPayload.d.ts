export default ConversationMessageEventAllOfPayload;
/**
 * The ConversationMessageEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload
 * @version 9.0.1
 */
declare class ConversationMessageEventAllOfPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationMessageEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload} The populated <code>ConversationMessageEventAllOfPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
         * Returns The message that was sent.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Message}
         */
    getMessage(): any;
    /**
     * Sets The message that was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message The message that was sent.
     */
    setMessage(message: any): void;
    message: any;
    /**
         * Returns Messages sent with the Notification API since the last user message.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>}
         */
    getRecentNotifications(): Array<any>;
    /**
     * Sets Messages sent with the Notification API since the last user message.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} recentNotifications Messages sent with the Notification API since the last user message.
     */
    setRecentNotifications(recentNotifications: any): void;
    recentNotifications: any;
}
