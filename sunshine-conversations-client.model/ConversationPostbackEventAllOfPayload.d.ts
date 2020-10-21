export default ConversationPostbackEventAllOfPayload;
/**
 * The ConversationPostbackEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload
 * @version 9.0.1
 */
declare class ConversationPostbackEventAllOfPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationPostbackEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} The populated <code>ConversationPostbackEventAllOfPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The postback associated with the event.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PostbackWebhook}
         */
    getPostback(): any;
    /**
     * Sets The postback associated with the event.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PostbackWebhook} postback The postback associated with the event.
     */
    setPostback(postback: any): void;
    postback: any;
    /**
         * Returns The conversation linked to the postback.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getConversation(): any;
    /**
     * Sets The conversation linked to the postback.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation linked to the postback.
     */
    setConversation(conversation: any): void;
    conversation: any;
    /**
         * Returns The user that triggered the postback.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getUser(): any;
    /**
     * Sets The user that triggered the postback.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user that triggered the postback.
     */
    setUser(user: any): void;
    user: any;
    /**
         * Returns The source of the postback.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
         */
    getSource(): any;
    /**
     * Sets The source of the postback.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source of the postback.
     */
    setSource(source: any): void;
    source: any;
}
