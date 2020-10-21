export default UserMergeEventAllOfPayloadMergedConversations;
/**
 * The UserMergeEventAllOfPayloadMergedConversations model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations
 * @version 9.0.1
 */
declare class UserMergeEventAllOfPayloadMergedConversations {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UserMergeEventAllOfPayloadMergedConversations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} The populated <code>UserMergeEventAllOfPayloadMergedConversations</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The conversation that now represents the merged conversation object.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getSurviving(): any;
    /**
     * Sets The conversation that now represents the merged conversation object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} surviving The conversation that now represents the merged conversation object.
     */
    setSurviving(surviving: any): void;
    surviving: any;
    /**
         * Returns The conversation that was unified into the surviving conversation object.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getDiscarded(): any;
    /**
     * Sets The conversation that was unified into the surviving conversation object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} discarded The conversation that was unified into the surviving conversation object.
     */
    setDiscarded(discarded: any): void;
    discarded: any;
}
