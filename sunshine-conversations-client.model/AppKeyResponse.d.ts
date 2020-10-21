export default AppKeyResponse;
/**
 * The AppKeyResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse
 * @version 9.0.1
 */
declare class AppKeyResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} The populated <code>AppKeyResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The created key object.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey}
         */
    getKey(): any;
    /**
     * Sets The created key object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey} key The created key object.
     */
    setKey(key: any): void;
    key: any;
}
