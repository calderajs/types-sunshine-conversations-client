export default IntegrationResponse;
/**
 * The IntegrationResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse
 * @version 9.0.1
 */
declare class IntegrationResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} The populated <code>IntegrationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration}
         */
    getIntegration(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration
     */
    setIntegration(integration: any): void;
    integration: any;
}
