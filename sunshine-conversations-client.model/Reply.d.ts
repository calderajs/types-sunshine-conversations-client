export default Reply;
/**
 * The Reply model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Reply
 * @version 9.0.1
 */
declare class Reply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, text: any, payload: any): void;
    /**
     * Constructs a <code>Reply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Reply} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Reply} The populated <code>Reply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Reply</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Reply
     * @param type {String} The type of action.
     * @param text {String} The button text. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     * @param payload {String} A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
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
         * Returns The button text. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The button text. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     * @param {String} text The button text. Text longer than 20 characters will be truncated on Facebook Messenger, and longer than 40 characters will be truncated on Web Messenger, iOS, and Android.
     */
    setText(text: string): void;
    text: string;
    /**
         * Returns A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
         * @return {String}
         */
    getPayload(): string;
    /**
     * Sets A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
     * @param {String} payload A string payload to help you identify the action context. Used when posting the reply. You can also use metadata for more complex needs.
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
    /**
         * Returns An icon to render next to the reply option.
         * @return {String}
         */
    getIconUrl(): string;
    /**
     * Sets An icon to render next to the reply option.
     * @param {String} iconUrl An icon to render next to the reply option.
     */
    setIconUrl(iconUrl: string): void;
    iconUrl: string;
}
