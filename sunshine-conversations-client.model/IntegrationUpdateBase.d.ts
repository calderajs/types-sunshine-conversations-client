export default IntegrationUpdateBase;
/**
 * The IntegrationUpdateBase model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
 * @version 9.0.1
 */
declare class IntegrationUpdateBase {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationUpdateBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase} The populated <code>IntegrationUpdateBase</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     * @param {String} displayName A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
}
