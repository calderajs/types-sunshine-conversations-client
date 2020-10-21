export default WebhookCreateBody;
/**
 * The WebhookCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody
 * @version 9.0.1
 */
declare class WebhookCreateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, target: any, triggers: any): void;
    /**
     * Constructs a <code>WebhookCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody} The populated <code>WebhookCreateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>WebhookCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookCreateBody
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
     * @param target {String} URL to be called when the webhook is triggered.
     * @param triggers {Array.<String>} An array of triggers the integration is subscribed to. This property is case sensitive. Current supported triggers in v2 are `conversation:create`, `conversation:message:delivery:channel`, `conversation:message:delivery:failure`, `conversation:message:delivery:user`, `conversation:message`, `conversation:read`, `conversation:typing`, `conversation:postback`, and `user:merge`
     */
    constructor(target: string, triggers: Array<string>);
}
