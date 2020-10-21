export default AppListFilter;
/**
 * The AppListFilter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter
 * @version 9.0.1
 */
declare class AppListFilter {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppListFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppListFilter} The populated <code>AppListFilter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns When specified, lists only the apps that the service account has access to.
         * @return {String}
         */
    getServiceAccountId(): string;
    /**
     * Sets When specified, lists only the apps that the service account has access to.
     * @param {String} serviceAccountId When specified, lists only the apps that the service account has access to.
     */
    setServiceAccountId(serviceAccountId: string): void;
    serviceAccountId: string;
}
