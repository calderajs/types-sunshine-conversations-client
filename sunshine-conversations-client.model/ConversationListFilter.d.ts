export default ConversationListFilter;
/**
 * The ConversationListFilter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter
 * @version 9.0.1
 */
declare class ConversationListFilter {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationListFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationListFilter} The populated <code>ConversationListFilter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The user's id. One of `userId` or `userExternalId` is required, but not both.
         * @return {String}
         */
    getUserId(): string;
    /**
     * Sets The user's id. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userId The user's id. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserId(userId: string): void;
    userId: string;
    /**
         * Returns The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
         * @return {String}
         */
    getUserExternalId(): string;
    /**
     * Sets The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userExternalId The external Id of the user. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserExternalId(userExternalId: string): void;
    userExternalId: string;
}
