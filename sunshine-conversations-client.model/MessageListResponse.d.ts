export default MessageListResponse;
/**
 * The MessageListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse
 * @version 9.0.1
 */
declare class MessageListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MessageListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse} The populated <code>MessageListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns List of returned messages.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>}
         */
    getMessages(): Array<any>;
    /**
     * Sets List of returned messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} messages List of returned messages.
     */
    setMessages(messages: any): void;
    messages: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
         */
    getMeta(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta: any): void;
    meta: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
         */
    getLinks(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links: any): void;
    links: any;
}
