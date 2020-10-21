export default IntegrationApiKey;
/**
 * The IntegrationApiKey model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey
 * @version 9.0.1
 */
declare class IntegrationApiKey {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, displayName: any): void;
    /**
     * Constructs a <code>IntegrationApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} The populated <code>IntegrationApiKey</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>IntegrationApiKey</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey
     * @param displayName {String} The name of the API key.
     */
    constructor(displayName: string);
    /**
         * Returns The name of the API key.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets The name of the API key.
     * @param {String} displayName The name of the API key.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
}
