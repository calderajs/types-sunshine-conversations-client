export default QuotedMessage;
/**
 * The QuotedMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage
 * @version 9.0.1
 */
declare class QuotedMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>QuotedMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} The populated <code>QuotedMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
     * @param {String} type The type of quotedMessage - `externalMessageId` if no Sunshine Conversations message matched the quoted message.
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
    /**
         * Returns The external message Id of the quoted message.
         * @return {String}
         */
    getExternalMessageId(): string;
    /**
     * Sets The external message Id of the quoted message.
     * @param {String} externalMessageId The external message Id of the quoted message.
     */
    setExternalMessageId(externalMessageId: string): void;
    externalMessageId: string;
}
