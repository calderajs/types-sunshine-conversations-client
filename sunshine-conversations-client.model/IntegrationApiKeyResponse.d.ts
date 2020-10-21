export default IntegrationApiKeyResponse;
/**
 * The IntegrationApiKeyResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse
 * @version 9.0.1
 */
declare class IntegrationApiKeyResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationApiKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} The populated <code>IntegrationApiKeyResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey}
         */
    getKey(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey} key
     */
    setKey(key: any): void;
    key: any;
}
