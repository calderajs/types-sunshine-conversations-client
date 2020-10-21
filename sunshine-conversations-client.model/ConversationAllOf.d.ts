export default ConversationAllOf;
/**
 * The ConversationAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf
 * @version 9.0.1
 */
declare class ConversationAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf} The populated <code>ConversationAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases.
         * @return {Boolean}
         */
    getIsDefault(): boolean;
    /**
     * Sets Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases.
     * @param {Boolean} isDefault Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases.
     */
    setIsDefault(isDefault: boolean): void;
    isDefault: boolean;
    /**
         * Returns A friendly name for the conversation, may be displayed to the business or the user.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets A friendly name for the conversation, may be displayed to the business or the user.
     * @param {String} displayName A friendly name for the conversation, may be displayed to the business or the user.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
    /**
         * Returns A short text describing the conversation.
         * @return {String}
         */
    getDescription(): string;
    /**
     * Sets A short text describing the conversation.
     * @param {String} description A short text describing the conversation.
     */
    setDescription(description: string): void;
    description: string;
    /**
         * Returns A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
         * @return {String}
         */
    getIconUrl(): string;
    /**
     * Sets A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @param {String} iconUrl A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     */
    setIconUrl(iconUrl: string): void;
    iconUrl: string;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     */
    setMetadata(metadata: any): void;
    metadata: any;
    /**
         * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business.
         * @return {String}
         */
    getBusinessLastRead(): string;
    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business.
     * @param {String} businessLastRead A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business.
     */
    setBusinessLastRead(businessLastRead: string): void;
    businessLastRead: string;
    /**
         * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet.
         * @return {String}
         */
    getLastUpdatedAt(): string;
    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet.
     * @param {String} lastUpdatedAt A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet.
     */
    setLastUpdatedAt(lastUpdatedAt: string): void;
    lastUpdatedAt: string;
}
