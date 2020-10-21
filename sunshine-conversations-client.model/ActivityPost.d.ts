export default ActivityPost;
/**
 * The ActivityPost model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost
 * @version 9.0.1
 */
declare class ActivityPost {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, author: any, type: any): void;
    /**
     * Constructs a <code>ActivityPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost} The populated <code>ActivityPost</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ActivityPost</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityTypes
     * @param author {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} The author of the activity.
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum} If the author type is `user`, only `conversation:read` is supported.
     */
    constructor(author: any, type: any);
    /**
         * Returns The author of the activity.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
         */
    getAuthor(): any;
    /**
     * Sets The author of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author The author of the activity.
     */
    setAuthor(author: any): void;
    author: any;
    /**
         * Returns If the author type is `user`, only `conversation:read` is supported.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum}
         */
    getType(): any;
    /**
     * Sets If the author type is `user`, only `conversation:read` is supported.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPost.TypeEnum} type If the author type is `user`, only `conversation:read` is supported.
     */
    setType(type: any): void;
    type: any;
}
declare namespace ActivityPost {
    const TypeEnum: {
        /**
         * value: "conversation:read"
         * @const
         */
        "conversation:read": string;
        /**
         * value: "typing:start"
         * @const
         */
        "typing:start": string;
        /**
         * value: "typing:stop"
         * @const
         */
        "typing:stop": string;
    };
}
