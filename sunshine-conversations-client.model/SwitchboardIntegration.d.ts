export default SwitchboardIntegration;
/**
 * The SwitchboardIntegration model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration
 * @version 9.0.1
 */
declare class SwitchboardIntegration {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, integrationId: any, integrationType: any, deliverStandbyEvents: any): void;
    /**
     * Constructs a <code>SwitchboardIntegration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} The populated <code>SwitchboardIntegration</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SwitchboardIntegration</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration
     * @param id {String} The unique ID of the switchboard integration.
     * @param name {String} Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @param integrationId {String} Id of the integration that should deliver events routed by the switchboard.
     * @param integrationType {String} Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @param deliverStandbyEvents {Boolean} Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     */
    constructor(id: string, name: string, integrationId: string, integrationType: string, deliverStandbyEvents: boolean);
    /**
         * Returns The unique ID of the switchboard integration.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the switchboard integration.
     * @param {String} id The unique ID of the switchboard integration.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
         * @return {String}
         */
    getName(): string;
    /**
     * Sets Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @param {String} name Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     */
    setName(name: string): void;
    name: string;
    /**
         * Returns Id of the integration that should deliver events routed by the switchboard.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets Id of the integration that should deliver events routed by the switchboard.
     * @param {String} integrationId Id of the integration that should deliver events routed by the switchboard.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
         * @return {String}
         */
    getIntegrationType(): string;
    /**
     * Sets Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @param {String} integrationType Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     */
    setIntegrationType(integrationType: string): void;
    integrationType: string;
    /**
         * Returns Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
         * @return {Boolean}
         */
    getDeliverStandbyEvents(): boolean;
    /**
     * Sets Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     * @param {Boolean} deliverStandbyEvents Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     */
    setDeliverStandbyEvents(deliverStandbyEvents: boolean): void;
    deliverStandbyEvents: boolean;
    /**
         * Returns The switchboard integration id to which control of a conversation is passed / offered by default.
         * @return {String}
         */
    getNextSwitchboardIntegrationId(): string;
    /**
     * Sets The switchboard integration id to which control of a conversation is passed / offered by default.
     * @param {String} nextSwitchboardIntegrationId The switchboard integration id to which control of a conversation is passed / offered by default.
     */
    setNextSwitchboardIntegrationId(nextSwitchboardIntegrationId: string): void;
    nextSwitchboardIntegrationId: string;
    /**
         * Returns Number of messages to include in the message history context.
         * minimum: 1
         * maximum: 10
         * @return {Number}
         */
    getMessageHistoryCount(): number;
    /**
     * Sets Number of messages to include in the message history context.
     * @param {Number} messageHistoryCount Number of messages to include in the message history context.
     */
    setMessageHistoryCount(messageHistoryCount: number): void;
    messageHistoryCount: number;
}
