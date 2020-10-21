export default MessagePost;
/**
 * The MessagePost model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessagePost
 * @version 9.0.1
 */
declare class MessagePost {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, author: any, content: any): void;
    /**
     * Constructs a <code>MessagePost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} The populated <code>MessagePost</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MessagePost</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost
     * @param author {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} The author of the message.
     * @param content {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} The content of the message.
     */
    constructor(author: any, content: any);
    /**
         * Returns The author of the message.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
         */
    getAuthor(): any;
    /**
     * Sets The author of the message.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author The author of the message.
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
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination}
         */
    getDestination(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} destination
     */
    setDestination(destination: any): void;
    destination: any;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     */
    setMetadata(metadata: any): void;
    metadata: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride}
         */
    getOverride(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} override
     */
    setOverride(override: any): void;
    override: any;
    /**
         * Returns Send WhatsApp Message Templates using \"whatsapp\", while populating the message key using the native [WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates). When the `messageSchema` is specified, the message is automatically converted to the Sunshine Conversations schema to be stored in the conversation record. The Sunshine Conversations message schema is also used in the API response. Go to [Post Message API](https://docs.smooch.io/guide/whatsapp/#post-message-api) to view an example.
         * @return {String}
         */
    getMessageSchema(): string;
    /**
     * Sets Send WhatsApp Message Templates using \"whatsapp\", while populating the message key using the native [WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates). When the `messageSchema` is specified, the message is automatically converted to the Sunshine Conversations schema to be stored in the conversation record. The Sunshine Conversations message schema is also used in the API response. Go to [Post Message API](https://docs.smooch.io/guide/whatsapp/#post-message-api) to view an example.
     * @param {String} messageSchema Send WhatsApp Message Templates using \"whatsapp\", while populating the message key using the native [WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates). When the `messageSchema` is specified, the message is automatically converted to the Sunshine Conversations schema to be stored in the conversation record. The Sunshine Conversations message schema is also used in the API response. Go to [Post Message API](https://docs.smooch.io/guide/whatsapp/#post-message-api) to view an example.
     */
    setMessageSchema(messageSchema: string): void;
    messageSchema: string;
}
