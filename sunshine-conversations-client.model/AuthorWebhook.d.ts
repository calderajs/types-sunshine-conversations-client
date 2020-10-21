export default AuthorWebhook;
/**
 * The AuthorWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook
 * @version 9.0.1
 */
declare class AuthorWebhook {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>AuthorWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} The populated <code>AuthorWebhook</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AuthorWebhook</code>.
     * The author of the activity.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum} The role of the message or activity.
     */
    constructor(type: any);
    /**
         * Returns The role of the message or activity.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum}
         */
    getType(): any;
    /**
     * Sets The role of the message or activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook.TypeEnum} type The role of the message or activity.
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns The id of the user. Only supported when role is `user`.
         * @return {String}
         */
    getUserId(): string;
    /**
     * Sets The id of the user. Only supported when role is `user`.
     * @param {String} userId The id of the user. Only supported when role is `user`.
     */
    setUserId(userId: string): void;
    userId: string;
    /**
         * Returns Full profile of the user that authored the message or activity. It is used only in webhook payloads if the `includeFullUser` option is enabled.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getUser(): any;
    /**
     * Sets Full profile of the user that authored the message or activity. It is used only in webhook payloads if the `includeFullUser` option is enabled.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user Full profile of the user that authored the message or activity. It is used only in webhook payloads if the `includeFullUser` option is enabled.
     */
    setUser(user: any): void;
    user: any;
}
declare namespace AuthorWebhook {
    namespace TypeEnum {
        const business: string;
        const user: string;
    }
}
