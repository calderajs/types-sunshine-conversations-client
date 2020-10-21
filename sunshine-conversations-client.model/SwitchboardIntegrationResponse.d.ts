export default SwitchboardIntegrationResponse;
/**
 * The SwitchboardIntegrationResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse
 * @version 9.0.1
 */
declare class SwitchboardIntegrationResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardIntegrationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} The populated <code>SwitchboardIntegrationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The switchboard integration.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration}
         */
    getSwitchboardIntegration(): any;
    /**
     * Sets The switchboard integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} switchboardIntegration The switchboard integration.
     */
    setSwitchboardIntegration(switchboardIntegration: any): void;
    switchboardIntegration: any;
}
