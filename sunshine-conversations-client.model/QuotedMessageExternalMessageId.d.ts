export default QuotedMessageExternalMessageId;
/**
 * The QuotedMessageExternalMessageId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId
 * @version 9.0.1
 */
declare class QuotedMessageExternalMessageId {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>QuotedMessageExternalMessageId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageExternalMessageId} The populated <code>QuotedMessageExternalMessageId</code> instance.
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
