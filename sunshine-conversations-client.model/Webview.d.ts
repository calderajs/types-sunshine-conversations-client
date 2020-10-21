export default Webview;
/**
 * The Webview model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Webview
 * @version 9.0.1
 */
declare class Webview {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, uri: any, text: any, fallback: any): void;
    /**
     * Constructs a <code>Webview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview} The populated <code>Webview</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Webview</code>.
     * When a webview actions is clicked/tapped, the provided URI will be loaded in a webview. Channels that do not support webviews will open the fallback URI instead.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Webview
     * @param type {String} The type of action.
     * @param uri {String} The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param text {String} The button text.
     * @param fallback {String} The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    constructor(type: string, uri: string, text: string, fallback: string);
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
         * Returns The webview URI. This is the URI that will open in the webview when clicking the button.
         * @return {String}
         */
    getUri(): string;
    /**
     * Sets The webview URI. This is the URI that will open in the webview when clicking the button.
     * @param {String} uri The webview URI. This is the URI that will open in the webview when clicking the button.
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
    /**
         * Returns The size to display a webview. Used for actions of type webview.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum}
         */
    getSize(): any;
    /**
     * Sets The size to display a webview. Used for actions of type webview.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webview.SizeEnum} size The size to display a webview. Used for actions of type webview.
     */
    setSize(size: any): void;
    size: any;
    /**
         * Returns The fallback uri for channels that don’t support webviews. Used for actions of type webview.
         * @return {String}
         */
    getFallback(): string;
    /**
     * Sets The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     * @param {String} fallback The fallback uri for channels that don’t support webviews. Used for actions of type webview.
     */
    setFallback(fallback: string): void;
    fallback: string;
    /**
         * Returns Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
         * @return {Boolean}
         */
    getOpenOnReceive(): boolean;
    /**
     * Sets Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     * @param {Boolean} openOnReceive Boolean value indicating if the webview should open automatically. Only one action per message can be set to true. Currently only supported on the Web Messenger.
     */
    setOpenOnReceive(openOnReceive: boolean): void;
    openOnReceive: boolean;
}
declare namespace Webview {
    namespace SizeEnum {
        const compact: string;
        const tall: string;
        const full: string;
    }
}
