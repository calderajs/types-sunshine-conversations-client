export default MessagePostResponse;
/**
 * The MessagePostResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse
 * @version 9.0.1
 */
declare class MessagePostResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MessagePostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse} The populated <code>MessagePostResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>}
         */
    getMessages(): Array<any>;
    /**
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Message>} messages
     */
    setMessages(messages: any): void;
    messages: any;
}
