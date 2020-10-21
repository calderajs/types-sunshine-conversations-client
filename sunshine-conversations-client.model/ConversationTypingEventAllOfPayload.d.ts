export default ConversationTypingEventAllOfPayload;
/**
 * The ConversationTypingEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload
 * @version 9.0.1
 */
declare class ConversationTypingEventAllOfPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationTypingEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTypingEventAllOfPayload} The populated <code>ConversationTypingEventAllOfPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The conversation in which the activity was sent.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getConversation(): any;
    /**
     * Sets The conversation in which the activity was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the activity was sent.
     */
    setConversation(conversation: any): void;
    conversation: any;
    /**
         * Returns The activity that was sent.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity}
         */
    getActivity(): any;
    /**
     * Sets The activity that was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Activity} activity The activity that was sent.
     */
    setActivity(activity: any): void;
    activity: any;
}
