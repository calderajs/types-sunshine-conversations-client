export default Conversation;
/**
 * The Conversation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Conversation
 * @version 9.0.1
 */
declare class Conversation {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Conversation} The populated <code>Conversation</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the conversation.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the conversation.
     * @param {String} id The unique ID of the conversation.
     */
    setId(id: string): void;
    id: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType}
         */
    getType(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} type
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook}
         */
    getActiveSwitchboardIntegration(): any;
    /**
     * Sets The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} activeSwitchboardIntegration The current switchboard integration that is in control of the conversation. This field is omitted if no `activeSwitchboardIntegration` exists for the conversation.
     */
    setActiveSwitchboardIntegration(activeSwitchboardIntegration: any): void;
    activeSwitchboardIntegration: any;
    /**
         * Returns The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook}
         */
    getPendingSwitchboardIntegration(): any;
    /**
     * Sets The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} pendingSwitchboardIntegration The switchboard integration that is awaiting control. This field is omitted if no switchboard integration has been previously offered control.
     */
    setPendingSwitchboardIntegration(pendingSwitchboardIntegration: any): void;
    pendingSwitchboardIntegration: any;
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
