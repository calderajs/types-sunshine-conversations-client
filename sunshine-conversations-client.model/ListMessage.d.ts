export default ListMessage;
/**
 * The ListMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ListMessage
 * @version 9.0.1
 */
declare class ListMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, items: any): void;
    /**
     * Constructs a <code>ListMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage} The populated <code>ListMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ListMessage</code>.
     * List messages are a vertically scrollable set of items that may each contain text, an image, and message actions. Not all messaging channels fully support list messages. * Facebook Messenger and WeChat have native support. * For LINE and our Android, iOS and Web SDK, Sunshine Conversations converts list messages to carousel. * On WhatsApp, Telegram and Twitter, Sunshine Conversations converts list messages to multiple rich messages. * On all other platforms, Sunshine Conversations converts list messages to raw text.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage
     * @param type {String} The type of message.
     * @param items {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    constructor(type: string, items: Array<any>);
    /**
         * Returns The type of message.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns An array of objects representing the items associated with the message. Only present in carousel and list type messages.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>}
         */
    getItems(): Array<any>;
    /**
     * Sets An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    setItems(items: any): void;
    items: any;
    /**
         * Returns An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>}
         */
    getActions(): Array<any>;
    /**
     * Sets An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions An array of objects representing the actions associated with the message. The array length is limited by the third party channel.
     */
    setActions(actions: any): void;
    actions: any;
}
