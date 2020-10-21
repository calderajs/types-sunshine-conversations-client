export default Target;
/**
 * The Target model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Target
 * @version 9.0.1
 */
declare class Target {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, conversationId: any): void;
    /**
     * Constructs a <code>Target</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} The populated <code>Target</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Target</code>.
     * The target conversation to attach the client to.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Target
     * @param conversationId {String} The conversation ID of the target conversation.
     */
    constructor(conversationId: string);
    /**
         * Returns The conversation ID of the target conversation.
         * @return {String}
         */
    getConversationId(): string;
    /**
     * Sets The conversation ID of the target conversation.
     * @param {String} conversationId The conversation ID of the target conversation.
     */
    setConversationId(conversationId: string): void;
    conversationId: string;
}
