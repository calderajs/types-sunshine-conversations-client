export default Messenger;
/**
 * The Messenger model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Messenger
 * @version 9.0.1
 */
declare class Messenger {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, pageAccessToken: any, appId: any, appSecret: any): void;
    /**
     * Constructs a <code>Messenger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger} The populated <code>Messenger</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Messenger</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Messenger
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf
     * @param type {String} The type of integration.
     * @param pageAccessToken {String} A Facebook Page Access Token.
     * @param appId {String} A Facebook App ID.
     * @param appSecret {String} A Facebook App Secret.
     */
    constructor(type: string, pageAccessToken: string, appId: string, appSecret: string);
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
         * Returns A Facebook Page Access Token.
         * @return {String}
         */
    getPageAccessToken(): string;
    /**
     * Sets A Facebook Page Access Token.
     * @param {String} pageAccessToken A Facebook Page Access Token.
     */
    setPageAccessToken(pageAccessToken: string): void;
    pageAccessToken: string;
    /**
         * Returns A Facebook App ID.
         * @return {String}
         */
    getAppId(): string;
    /**
     * Sets A Facebook App ID.
     * @param {String} appId A Facebook App ID.
     */
    setAppId(appId: string): void;
    appId: string;
    /**
         * Returns A Facebook App Secret.
         * @return {String}
         */
    getAppSecret(): string;
    /**
     * Sets A Facebook App Secret.
     * @param {String} appSecret A Facebook App Secret.
     */
    setAppSecret(appSecret: string): void;
    appSecret: string;
}
