export default ConversationUpdateBody;
/**
 * The ConversationUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody
 * @version 9.0.1
 */
declare class ConversationUpdateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationUpdateBody} The populated <code>ConversationUpdateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
}
