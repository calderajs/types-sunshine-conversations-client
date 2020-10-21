export default Message;
/**
 * The Message model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Message
 * @version 9.0.1
 */
declare class Message {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the message.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the message.
     * @param {String} id The unique ID of the message.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
         * @return {String}
         */
    getReceived(): string;
    /**
     * Sets A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
     * @param {String} received A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing when Sunshine Conversations received the message.
     */
    setReceived(received: string): void;
    received: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
         */
    getAuthor(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author
     */
    setAuthor(author: any): void;
    author: any;
    /**
         * Returns The content of the message.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Content}
         */
    getContent(): any;
    /**
     * Sets The content of the message.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} content The content of the message.
     */
    setContent(content: any): void;
    content: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Source}
         */
    getSource(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Source} source
     */
    setSource(source: any): void;
    source: any;
    /**
         * Returns The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage}
         */
    getQuotedMessage(): any;
    /**
     * Sets The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessage} quotedMessage The quoted message is currently only available for WhatsApp and Web Messenger `formResponse` messages.
     */
    setQuotedMessage(quotedMessage: any): void;
    quotedMessage: any;
    /**
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * @param {Object} metadata
     */
    setMetadata(metadata: any): void;
    metadata: any;
    /**
         * Returns true if the message serves as a placeholder for one that has been deleted.
         * @return {Boolean}
         */
    getDeleted(): boolean;
    /**
     * Sets true if the message serves as a placeholder for one that has been deleted.
     * @param {Boolean} deleted true if the message serves as a placeholder for one that has been deleted.
     */
    setDeleted(deleted: boolean): void;
    deleted: boolean;
}
