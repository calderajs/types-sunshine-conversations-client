export default UserMergeEventAllOfPayload;
/**
 * The UserMergeEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload
 * @version 9.0.1
 */
declare class UserMergeEventAllOfPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UserMergeEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload} The populated <code>UserMergeEventAllOfPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers}
         */
    getMergedUsers(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} mergedUsers
     */
    setMergedUsers(mergedUsers: any): void;
    mergedUsers: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations}
         */
    getMergedConversations(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} mergedConversations
     */
    setMergedConversations(mergedConversations: any): void;
    mergedConversations: any;
    /**
         * Returns A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
         * @return {Object}
         */
    getDiscardedMetadata(): any;
    /**
     * Sets A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
     * @param {Object} discardedMetadata A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
     */
    setDiscardedMetadata(discardedMetadata: any): void;
    discardedMetadata: any;
}
