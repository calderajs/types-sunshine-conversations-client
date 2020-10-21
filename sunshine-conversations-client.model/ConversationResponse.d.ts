export default ConversationResponse;
/**
 * The ConversationResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse
 * @version 9.0.1
 */
declare class ConversationResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationResponse} The populated <code>ConversationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The conversation.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation}
         */
    getConversation(): any;
    /**
     * Sets The conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} conversation The conversation.
     */
    setConversation(conversation: any): void;
    conversation: any;
}
