export default IntegrationListResponse;
/**
 * The IntegrationListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse
 * @version 9.0.1
 */
declare class IntegrationListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListResponse} The populated <code>IntegrationListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns List of returned integrations.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Integration>}
         */
    getIntegrations(): Array<any>;
    /**
     * Sets List of returned integrations.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Integration>} integrations List of returned integrations.
     */
    setIntegrations(integrations: any): void;
    integrations: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
         */
    getMeta(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta: any): void;
    meta: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
         */
    getLinks(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links: any): void;
    links: any;
}
