export default ConversationTruncated;
/**
 * The ConversationTruncated model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated
 * @version 9.0.1
 */
declare class ConversationTruncated {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationTruncated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} The populated <code>ConversationTruncated</code> instance.
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
}
