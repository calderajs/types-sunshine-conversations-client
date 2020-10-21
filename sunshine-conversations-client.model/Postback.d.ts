export default Postback;
/**
 * The Postback model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Postback
 * @version 9.0.1
 */
declare class Postback {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, text: any, payload: any): void;
    /**
     * Constructs a <code>Postback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Postback} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Postback} The populated <code>Postback</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Postback</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Postback
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param payload {String} The payload of a postback or reply button.
     */
    constructor(type: string, text: string, payload: string);
    /**
         * Returns The type of action.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns The button text.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text: string): void;
    text: string;
    /**
         * Returns The payload of a postback or reply button.
         * @return {String}
         */
    getPayload(): string;
    /**
     * Sets The payload of a postback or reply button.
     * @param {String} payload The payload of a postback or reply button.
     */
    setPayload(payload: string): void;
    payload: string;
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
}
