export default IntegrationApiKeyListResponse;
/**
 * The IntegrationApiKeyListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse
 * @version 9.0.1
 */
declare class IntegrationApiKeyListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationApiKeyListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} The populated <code>IntegrationApiKeyListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Integration keys of the supplied integration.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey>}
         */
    getKeys(): Array<any>;
    /**
     * Sets Integration keys of the supplied integration.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey>} keys Integration keys of the supplied integration.
     */
    setKeys(keys: any): void;
    keys: any;
}
