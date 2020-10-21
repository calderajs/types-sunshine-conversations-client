export default MessagebirdAllOf;
/**
 * The MessagebirdAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf
 * @version 9.0.1
 */
declare class MessagebirdAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, accessKey: any, signingKey: any, originator: any): void;
    /**
     * Constructs a <code>MessagebirdAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf} The populated <code>MessagebirdAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MessagebirdAllOf</code>.
     * To configure a MessageBird integration, acquire the accessKey, the signingKey and the MessageBird number you would like to use, then call the Create Integration endpoint. The response will include the integration’s _id and webhookSecret, which must be used to configure the webhook in MessageBird. In the Flow Builder for the MessageBird number you’ve used to integrate, add a new step with the following settings: * Create a new Call HTTP endpoint with SMS flow. * Select your desired SMS number for Incoming SMS. * Click on Forward to URL and set its method to POST. * Then, using the integration _id and webhookSecret returned from the create integration call, enter the following into the URL field:  &#x60;https://app.smooch.io/api/messagebird/webhooks/{appId}/{integrationId}/{webhookSecret}&#x60; * Select application/json for the Set Content-Type header field. * Save and publish your changes.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessagebirdAllOf
     * @param accessKey {String} The public API key of your MessageBird account.
     * @param signingKey {String} The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @param originator {String} Sunshine Conversations will receive all messages sent to this phone number.
     */
    constructor(accessKey: string, signingKey: string, originator: string);
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
         * Returns The public API key of your MessageBird account.
         * @return {String}
         */
    getAccessKey(): string;
    /**
     * Sets The public API key of your MessageBird account.
     * @param {String} accessKey The public API key of your MessageBird account.
     */
    setAccessKey(accessKey: string): void;
    accessKey: string;
    /**
         * Returns The signing key of your MessageBird account. Used to validate the webhooks' origin.
         * @return {String}
         */
    getSigningKey(): string;
    /**
     * Sets The signing key of your MessageBird account. Used to validate the webhooks' origin.
     * @param {String} signingKey The signing key of your MessageBird account. Used to validate the webhooks' origin.
     */
    setSigningKey(signingKey: string): void;
    signingKey: string;
    /**
         * Returns Sunshine Conversations will receive all messages sent to this phone number.
         * @return {String}
         */
    getOriginator(): string;
    /**
     * Sets Sunshine Conversations will receive all messages sent to this phone number.
     * @param {String} originator Sunshine Conversations will receive all messages sent to this phone number.
     */
    setOriginator(originator: string): void;
    originator: string;
    /**
         * Returns The secret that is used to configure webhooks in MessageBird.
         * @return {String}
         */
    getWebhookSecret(): string;
    /**
     * Sets The secret that is used to configure webhooks in MessageBird.
     * @param {String} webhookSecret The secret that is used to configure webhooks in MessageBird.
     */
    setWebhookSecret(webhookSecret: string): void;
    webhookSecret: string;
}
