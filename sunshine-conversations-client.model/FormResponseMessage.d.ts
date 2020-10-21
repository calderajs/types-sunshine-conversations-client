export default FormResponseMessage;
/**
 * The FormResponseMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage
 * @version 9.0.1
 */
declare class FormResponseMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, fields: any): void;
    /**
     * Constructs a <code>FormResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage} The populated <code>FormResponseMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FormResponseMessage</code>.
     * A formResponse type message is a response to a form type message. formResponse type messages are only supported as responses to form messages on Web Messenger and cannot be sent via the API.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage
     * @param type {String} The type of message.
     * @param fields {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} Array of field objects that contain the submitted fields.
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
         * Returns Array of field objects that contain the submitted fields.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>}
         */
    getFields(): Array<any>;
    /**
     * Sets Array of field objects that contain the submitted fields.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields Array of field objects that contain the submitted fields.
     */
    setFields(fields: any): void;
    fields: any;
    /**
         * Returns A string containing the `label: value` of all fields, each separated by a newline character.
         * @return {String}
         */
    getTextFallback(): string;
    /**
     * Sets A string containing the `label: value` of all fields, each separated by a newline character.
     * @param {String} textFallback A string containing the `label: value` of all fields, each separated by a newline character.
     */
    setTextFallback(textFallback: string): void;
    textFallback: string;
}
