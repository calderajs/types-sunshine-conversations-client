export default Field;
/**
 * The Field model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Field
 * @version 9.0.1
 */
declare class Field {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, name: any, label: any): void;
    /**
     * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Field} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Field} The populated <code>Field</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Field</code>.
     * Properties that can be expected to receive inside a form or formResponse message field.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Field
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} The field type.
     * @param name {String} The name of the field. Must be unique per form or formResponse.
     * @param label {String} The label of the field. What the field is displayed as on Web Messenger.
     */
    constructor(type: any, name: string, label: string);
    /**
         * Returns The field type.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum}
         */
    getType(): any;
    /**
     * Sets The field type.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} type The field type.
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns The name of the field. Must be unique per form or formResponse.
         * @return {String}
         */
    getName(): string;
    /**
     * Sets The name of the field. Must be unique per form or formResponse.
     * @param {String} name The name of the field. Must be unique per form or formResponse.
     */
    setName(name: string): void;
    name: string;
    /**
         * Returns The label of the field. What the field is displayed as on Web Messenger.
         * @return {String}
         */
    getLabel(): string;
    /**
     * Sets The label of the field. What the field is displayed as on Web Messenger.
     * @param {String} label The label of the field. What the field is displayed as on Web Messenger.
     */
    setLabel(label: string): void;
    label: string;
    /**
         * Returns Placeholder text for the field. form message only.
         * @return {String}
         */
    getPlaceholder(): string;
    /**
     * Sets Placeholder text for the field. form message only.
     * @param {String} placeholder Placeholder text for the field. form message only.
     */
    setPlaceholder(placeholder: string): void;
    placeholder: string;
    /**
         * Returns The minimum allowed length for the response for a field of type text. form message only.
         * minimum: 1
         * maximum: 128
         * @return {Number}
         */
    getMinSize(): number;
    /**
     * Sets The minimum allowed length for the response for a field of type text. form message only.
     * @param {Number} minSize The minimum allowed length for the response for a field of type text. form message only.
     */
    setMinSize(minSize: number): void;
    minSize: number;
    /**
         * Returns The maximum allowed length for the response for a field of type text. form message only.
         * minimum: 1
         * maximum: 128
         * @return {Number}
         */
    getMaxSize(): number;
    /**
     * Sets The maximum allowed length for the response for a field of type text. form message only.
     * @param {Number} maxSize The maximum allowed length for the response for a field of type text. form message only.
     */
    setMaxSize(maxSize: number): void;
    maxSize: number;
    /**
         * Returns Specifies the response for a text field.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets Specifies the response for a text field.
     * @param {String} text Specifies the response for a text field.
     */
    setText(text: string): void;
    text: string;
    /**
         * Returns Specifies the response for a email field.
         * @return {String}
         */
    getEmail(): string;
    /**
     * Sets Specifies the response for a email field.
     * @param {String} email Specifies the response for a email field.
     */
    setEmail(email: string): void;
    email: string;
    /**
         * Returns Array of objects representing the response for a field of type select. form and formResponse messages only.
         * @return {Array.<Object>}
         */
    getSelect(): Array<any>;
    /**
     * Sets Array of objects representing the response for a field of type select. form and formResponse messages only.
     * @param {Array.<Object>} select Array of objects representing the response for a field of type select. form and formResponse messages only.
     */
    setSelect(select: Array<any>): void;
    select: any[];
    /**
         * Returns Array of objects representing options for a field of type select.
         * @return {Array.<Object>}
         */
    getOptions(): Array<any>;
    /**
     * Sets Array of objects representing options for a field of type select.
     * @param {Array.<Object>} options Array of objects representing options for a field of type select.
     */
    setOptions(options: Array<any>): void;
    options: any[];
}
declare namespace Field {
    namespace TypeEnum {
        const email: string;
        const select: string;
        const text: string;
    }
}
