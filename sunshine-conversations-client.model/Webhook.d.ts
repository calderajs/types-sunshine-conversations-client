export default Webhook;
/**
 * The Webhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Webhook
 * @version 9.0.1
 */
declare class Webhook {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, target: any, triggers: any): void;
    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook
     * @param target {String} URL to be called when the webhook is triggered.
     * @param triggers {Array.<String>} An array of triggers the integration is subscribed to. This property is case sensitive. Current supported triggers in v2 are `conversation:create`, `conversation:message:delivery:channel`, `conversation:message:delivery:failure`, `conversation:message:delivery:user`, `conversation:message`, `conversation:read`, `conversation:typing`, `conversation:postback`, and `user:merge`
     */
    constructor(target: string, triggers: Array<string>);
    /**
         * Returns A unique identifier for the webhook.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets A unique identifier for the webhook.
     * @param {String} id A unique identifier for the webhook.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
         * @return {String}
         */
    getVersion(): string;
    /**
     * Sets Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
     * @param {String} version Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
     */
    setVersion(version: string): void;
    version: string;
    /**
         * Returns URL to be called when the webhook is triggered.
         * @return {String}
         */
    getTarget(): string;
    /**
     * Sets URL to be called when the webhook is triggered.
     * @param {String} target URL to be called when the webhook is triggered.
     */
    setTarget(target: string): void;
    target: string;
    /**
         * Returns An array of triggers the integration is subscribed to. This property is case sensitive. Current supported triggers in v2 are `conversation:create`, `conversation:message:delivery:channel`, `conversation:message:delivery:failure`, `conversation:message:delivery:user`, `conversation:message`, `conversation:read`, `conversation:typing`, `conversation:postback`, and `user:merge`
         * @return {Array.<String>}
         */
    getTriggers(): Array<string>;
    /**
     * Sets An array of triggers the integration is subscribed to. This property is case sensitive. Current supported triggers in v2 are `conversation:create`, `conversation:message:delivery:channel`, `conversation:message:delivery:failure`, `conversation:message:delivery:user`, `conversation:message`, `conversation:read`, `conversation:typing`, `conversation:postback`, and `user:merge`
     * @param {Array.<String>} triggers An array of triggers the integration is subscribed to. This property is case sensitive. Current supported triggers in v2 are `conversation:create`, `conversation:message:delivery:channel`, `conversation:message:delivery:failure`, `conversation:message:delivery:user`, `conversation:message`, `conversation:read`, `conversation:typing`, `conversation:postback`, and `user:merge`
     */
    setTriggers(triggers: Array<string>): void;
    triggers: string[];
    /**
         * Returns Webhook secret, used to verify the origin of incoming requests.
         * @return {String}
         */
    getSecret(): string;
    /**
     * Sets Webhook secret, used to verify the origin of incoming requests.
     * @param {String} secret Webhook secret, used to verify the origin of incoming requests.
     */
    setSecret(secret: string): void;
    secret: string;
    /**
         * Returns A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
         * @return {Boolean}
         */
    getIncludeFullUser(): boolean;
    /**
     * Sets A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
     * @param {Boolean} includeFullUser A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
     */
    setIncludeFullUser(includeFullUser: boolean): void;
    includeFullUser: boolean;
    /**
         * Returns A boolean specifying whether webhook payloads should include the client and device object (when applicable).
         * @return {Boolean}
         */
    getIncludeFullSource(): boolean;
    /**
     * Sets A boolean specifying whether webhook payloads should include the client and device object (when applicable).
     * @param {Boolean} includeFullSource A boolean specifying whether webhook payloads should include the client and device object (when applicable).
     */
    setIncludeFullSource(includeFullSource: boolean): void;
    includeFullSource: boolean;
}
