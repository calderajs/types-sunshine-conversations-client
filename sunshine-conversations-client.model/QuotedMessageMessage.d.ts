export default QuotedMessageMessage;
/**
 * The QuotedMessageMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage
 * @version 9.0.1
 */
declare class QuotedMessageMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>QuotedMessageMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage} The populated <code>QuotedMessageMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The type of quotedMessage - a complete Sunshine Conversations message is provided.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of quotedMessage - a complete Sunshine Conversations message is provided.
     * @param {String} type The type of quotedMessage - a complete Sunshine Conversations message is provided.
     */
    setType(type: string): void;
    type: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Message}
         */
    getMessage(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message
     */
    setMessage(message: any): void;
    message: any;
}
