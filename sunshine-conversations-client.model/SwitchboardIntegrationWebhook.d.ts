export default SwitchboardIntegrationWebhook;
/**
 * The SwitchboardIntegrationWebhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook
 * @version 9.0.1
 */
declare class SwitchboardIntegrationWebhook {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardIntegrationWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationWebhook} The populated <code>SwitchboardIntegrationWebhook</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
}
