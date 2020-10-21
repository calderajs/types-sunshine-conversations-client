export default Author;
/**
 * The Author model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Author
 * @version 9.0.1
 */
declare class Author {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} The populated <code>Author</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Author</code>.
     * The author of the message.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Author
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum} The type of the author.
     */
    constructor(type: any);
    /**
         * Returns The type of the author.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum}
         */
    getType(): any;
    /**
     * Sets The type of the author.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum} type The type of the author.
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns The id of the user. Only supported when `type` is user.
         * @return {String}
         */
    getUserId(): string;
    /**
     * Sets The id of the user. Only supported when `type` is user.
     * @param {String} userId The id of the user. Only supported when `type` is user.
     */
    setUserId(userId: string): void;
    userId: string;
    /**
         * Returns The externalId of the user. Only supported when `type` is user.
         * @return {String}
         */
    getUserExternalId(): string;
    /**
     * Sets The externalId of the user. Only supported when `type` is user.
     * @param {String} userExternalId The externalId of the user. Only supported when `type` is user.
     */
    setUserExternalId(userExternalId: string): void;
    userExternalId: string;
    /**
         * Returns The display name of the message author.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets The display name of the message author.
     * @param {String} displayName The display name of the message author.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
    /**
         * Returns A custom message icon url. The image must be in either JPG, PNG, or GIF format
         * @return {String}
         */
    getAvatarUrl(): string;
    /**
     * Sets A custom message icon url. The image must be in either JPG, PNG, or GIF format
     * @param {String} avatarUrl A custom message icon url. The image must be in either JPG, PNG, or GIF format
     */
    setAvatarUrl(avatarUrl: string): void;
    avatarUrl: string;
}
declare namespace Author {
    namespace TypeEnum {
        const business: string;
        const user: string;
    }
}
