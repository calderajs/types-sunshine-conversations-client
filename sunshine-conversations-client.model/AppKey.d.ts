export default AppKey;
/**
 * The AppKey model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKey
 * @version 9.0.1
 */
declare class AppKey {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey} The populated <code>AppKey</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
     * @param {String} id The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
     */
    setId(id: string): void;
    id: string;
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
    /**
         * Returns The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
         * @return {String}
         */
    getSecret(): string;
    /**
     * Sets The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
     * @param {String} secret The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
     */
    setSecret(secret: string): void;
    secret: string;
}
