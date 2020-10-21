export default TwitterAllOf;
/**
 * The TwitterAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf
 * @version 9.0.1
 */
declare class TwitterAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, tier: any, consumerKey: any, consumerSecret: any, accessTokenSecret: any): void;
    /**
     * Constructs a <code>TwitterAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf} The populated <code>TwitterAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>TwitterAllOf</code>.
     * To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup).
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf
     * @param tier {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum} Your Twitter app’s tier, sandbox, premium or enterprise.
     * @param consumerKey {String} The consumer key for your Twitter app.
     * @param consumerSecret {String} The consumer key secret for your Twitter app.
     * @param accessTokenSecret {String} The access token secret obtained from your user via oauth.
     */
    constructor(tier: any, consumerKey: string, consumerSecret: string, accessTokenSecret: string);
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
         * Returns Your Twitter app’s tier, sandbox, premium or enterprise.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum}
         */
    getTier(): any;
    /**
     * Sets Your Twitter app’s tier, sandbox, premium or enterprise.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum} tier Your Twitter app’s tier, sandbox, premium or enterprise.
     */
    setTier(tier: any): void;
    tier: any;
    /**
         * Returns The Twitter dev environments label (required for sandbox and premium tiers).
         * @return {String}
         */
    getEnvName(): string;
    /**
     * Sets The Twitter dev environments label (required for sandbox and premium tiers).
     * @param {String} envName The Twitter dev environments label (required for sandbox and premium tiers).
     */
    setEnvName(envName: string): void;
    envName: string;
    /**
         * Returns The consumer key for your Twitter app.
         * @return {String}
         */
    getConsumerKey(): string;
    /**
     * Sets The consumer key for your Twitter app.
     * @param {String} consumerKey The consumer key for your Twitter app.
     */
    setConsumerKey(consumerKey: string): void;
    consumerKey: string;
    /**
         * Returns The consumer key secret for your Twitter app.
         * @return {String}
         */
    getConsumerSecret(): string;
    /**
     * Sets The consumer key secret for your Twitter app.
     * @param {String} consumerSecret The consumer key secret for your Twitter app.
     */
    setConsumerSecret(consumerSecret: string): void;
    consumerSecret: string;
    /**
         * Returns The access token key obtained from your user via oauth.
         * @return {String}
         */
    getAccessTokenKey(): string;
    /**
     * Sets The access token key obtained from your user via oauth.
     * @param {String} accessTokenKey The access token key obtained from your user via oauth.
     */
    setAccessTokenKey(accessTokenKey: string): void;
    accessTokenKey: string;
    /**
         * Returns The access token secret obtained from your user via oauth.
         * @return {String}
         */
    getAccessTokenSecret(): string;
    /**
     * Sets The access token secret obtained from your user via oauth.
     * @param {String} accessTokenSecret The access token secret obtained from your user via oauth.
     */
    setAccessTokenSecret(accessTokenSecret: string): void;
    accessTokenSecret: string;
}
declare namespace TwitterAllOf {
    namespace TierEnum {
        const sandbox: string;
        const premium: string;
        const enterprise: string;
    }
}
