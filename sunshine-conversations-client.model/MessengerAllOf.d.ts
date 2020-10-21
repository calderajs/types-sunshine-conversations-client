export default MessengerAllOf;
/**
 * The MessengerAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf
 * @version 9.0.1
 */
declare class MessengerAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, pageAccessToken: any, appId: any, appSecret: any): void;
    /**
     * Constructs a <code>MessengerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf} The populated <code>MessengerAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MessengerAllOf</code>.
     * Facebook Messenger Setup steps: Take note of your Facebook app ID and secret (apps can be created at developer.facebook.com); The Facebook app must have been submitted to Facebook for approval with the “manage_pages” (to receive messages through webhook) and “pages_messaging” (to send messages) permissions. In order to integrate a Facebook Messenger app you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerAllOf
     * @param pageAccessToken {String} A Facebook Page Access Token.
     * @param appId {String} A Facebook App ID.
     * @param appSecret {String} A Facebook App Secret.
     */
    constructor(pageAccessToken: string, appId: string, appSecret: string);
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
