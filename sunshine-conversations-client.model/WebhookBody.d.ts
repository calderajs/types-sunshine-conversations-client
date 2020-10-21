export default WebhookBody;
/**
 * The WebhookBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
 * @version 9.0.1
 */
declare class WebhookBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WebhookBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} The populated <code>WebhookBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
