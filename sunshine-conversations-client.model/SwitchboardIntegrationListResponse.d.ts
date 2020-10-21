export default SwitchboardIntegrationListResponse;
/**
 * The SwitchboardIntegrationListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse
 * @version 9.0.1
 */
declare class SwitchboardIntegrationListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardIntegrationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationListResponse} The populated <code>SwitchboardIntegrationListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns List of returned switchboard integrations.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration>}
         */
    getSwitchboardIntegrations(): Array<any>;
    /**
     * Sets List of returned switchboard integrations.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration>} switchboardIntegrations List of returned switchboard integrations.
     */
    setSwitchboardIntegrations(switchboardIntegrations: any): void;
    switchboardIntegrations: any;
}
