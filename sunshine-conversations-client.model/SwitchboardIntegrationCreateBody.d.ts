export default SwitchboardIntegrationCreateBody;
/**
 * The SwitchboardIntegrationCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody
 * @version 9.0.1
 */
declare class SwitchboardIntegrationCreateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>SwitchboardIntegrationCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} The populated <code>SwitchboardIntegrationCreateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SwitchboardIntegrationCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody
     * @param name {String} Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     */
    constructor(name: string);
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
         * Returns The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
     * @param {String} integrationId The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
         * @return {String}
         */
    getIntegrationType(): string;
    /**
     * Sets The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
     * @param {String} integrationType The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
     */
    setIntegrationType(integrationType: string): void;
    integrationType: string;
    /**
         * @return {Boolean}
         */
    getDeliverStandbyEvents(): boolean;
    /**
     * @param {Boolean} deliverStandbyEvents
     */
    setDeliverStandbyEvents(deliverStandbyEvents: boolean): void;
    deliverStandbyEvents: boolean;
    /**
         * @return {String}
         */
    getNextSwitchboardIntegrationId(): string;
    /**
     * @param {String} nextSwitchboardIntegrationId
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
