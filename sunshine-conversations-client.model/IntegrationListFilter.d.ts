export default IntegrationListFilter;
/**
 * The IntegrationListFilter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter
 * @version 9.0.1
 */
declare class IntegrationListFilter {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationListFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} The populated <code>IntegrationListFilter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Comma-separated list of types to return. If omitted, all types are returned.
         * @return {String}
         */
    getTypes(): string;
    /**
     * Sets Comma-separated list of types to return. If omitted, all types are returned.
     * @param {String} types Comma-separated list of types to return. If omitted, all types are returned.
     */
    setTypes(types: string): void;
    types: string;
}
