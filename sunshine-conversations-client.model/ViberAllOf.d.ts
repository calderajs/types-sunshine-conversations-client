export default ViberAllOf;
/**
 * The ViberAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf
 * @version 9.0.1
 */
declare class ViberAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, token: any): void;
    /**
     * Constructs a <code>ViberAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf} The populated <code>ViberAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ViberAllOf</code>.
     * To configure a Viber integration, acquire the Viber Public Account token from the user and call the Create Integration endpoint.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf
     * @param token {String} Viber Public Account token.
     */
    constructor(token: string);
    /**
         * Returns The type of integration.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns Viber Public Account token.
         * @return {String}
         */
    getToken(): string;
    /**
     * Sets Viber Public Account token.
     * @param {String} token Viber Public Account token.
     */
    setToken(token: string): void;
    token: string;
    /**
         * Returns Unique URI of the Viber account.
         * @return {String}
         */
    getUri(): string;
    /**
     * Sets Unique URI of the Viber account.
     * @param {String} uri Unique URI of the Viber account.
     */
    setUri(uri: string): void;
    uri: string;
    /**
         * Returns Unique ID of the Viber account.
         * @return {String}
         */
    getAccountId(): string;
    /**
     * Sets Unique ID of the Viber account.
     * @param {String} accountId Unique ID of the Viber account.
     */
    setAccountId(accountId: string): void;
    accountId: string;
}
