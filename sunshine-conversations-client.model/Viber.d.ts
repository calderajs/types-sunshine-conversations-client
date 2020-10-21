export default Viber;
/**
 * The Viber model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Viber
 * @version 9.0.1
 */
declare class Viber {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, token: any): void;
    /**
     * Constructs a <code>Viber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Viber} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Viber} The populated <code>Viber</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Viber</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Viber
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ViberAllOf
     * @param type {String} The type of integration.
     * @param token {String} Viber Public Account token.
     */
    constructor(type: string, token: string);
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
