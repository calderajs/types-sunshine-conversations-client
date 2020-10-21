export default Link;
/**
 * The Link model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Link
 * @version 9.0.1
 */
declare class Link {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, uri: any, text: any): void;
    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Link} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Link</code>.
     * A link action will open the provided URI when tapped.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Link
     * @param type {String} The type of action.
     * @param uri {String} The action URI. This is the link that will be used in the clients when clicking the button.
     * @param text {String} The button text.
     */
    constructor(type: string, uri: string, text: string);
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
         * Returns The action URI. This is the link that will be used in the clients when clicking the button.
         * @return {String}
         */
    getUri(): string;
    /**
     * Sets The action URI. This is the link that will be used in the clients when clicking the button.
     * @param {String} uri The action URI. This is the link that will be used in the clients when clicking the button.
     */
    setUri(uri: string): void;
    uri: string;
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
         * Returns Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
         * @return {Boolean}
         */
    getDefault(): boolean;
    /**
     * Sets Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     * @param {Boolean} _default Boolean value indicating whether the action is the default action for a message item in Facebook Messenger.
     */
    setDefault(_default: boolean): void;
    default: boolean;
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
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions}
         */
    getExtraChannelOptions(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptions} extraChannelOptions
     */
    setExtraChannelOptions(extraChannelOptions: any): void;
    extraChannelOptions: any;
}
