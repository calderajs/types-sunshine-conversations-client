export default FormMessage;
/**
 * The FormMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormMessage
 * @version 9.0.1
 */
declare class FormMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, fields: any): void;
    /**
     * Constructs a <code>FormMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage} The populated <code>FormMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FormMessage</code>.
     * A form type message without text or actions.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage
     * @param type {String} The type of message.
     * @param fields {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     */
    constructor(type: string, fields: Array<any>);
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
         * Returns true if the message should block the chat input on Web Messenger. form message only.
         * @return {Boolean}
         */
    getBlockChatInput(): boolean;
    /**
     * Sets true if the message should block the chat input on Web Messenger. form message only.
     * @param {Boolean} blockChatInput true if the message should block the chat input on Web Messenger. form message only.
     */
    setBlockChatInput(blockChatInput: boolean): void;
    blockChatInput: boolean;
    /**
         * Returns An array of objects representing fields associated with the message. Only present in form and formResponse messages.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>}
         */
    getFields(): Array<any>;
    /**
     * Sets An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields An array of objects representing fields associated with the message. Only present in form and formResponse messages.
     */
    setFields(fields: any): void;
    fields: any;
}
