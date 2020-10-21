export default Switchboard;
/**
 * The Switchboard model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Switchboard
 * @version 9.0.1
 */
declare class Switchboard {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, enabled: any): void;
    /**
     * Constructs a <code>Switchboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard} The populated <code>Switchboard</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Switchboard</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard
     * @param id {String} The unique ID of the switchboard.
     * @param enabled {Boolean} Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     */
    constructor(id: string, enabled: boolean);
    /**
         * Returns The unique ID of the switchboard.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the switchboard.
     * @param {String} id The unique ID of the switchboard.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
         * @return {Boolean}
         */
    getEnabled(): boolean;
    /**
     * Sets Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     * @param {Boolean} enabled Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     */
    setEnabled(enabled: boolean): void;
    enabled: boolean;
    /**
         * Returns The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
         * @return {String}
         */
    getDefaultSwitchboardIntegrationId(): string;
    /**
     * Sets The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     * @param {String} defaultSwitchboardIntegrationId The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     */
    setDefaultSwitchboardIntegrationId(defaultSwitchboardIntegrationId: string): void;
    defaultSwitchboardIntegrationId: string;
}
