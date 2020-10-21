export default ImageMessage;
/**
 * The ImageMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage
 * @version 9.0.1
 */
declare class ImageMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>ImageMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage} The populated <code>ImageMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ImageMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage
     * @param type {String} The type of message.
     */
    constructor(type: string);
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
         * Returns The text content of the message. Optional only if actions are provided.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The text content of the message. Optional only if actions are provided.
     * @param {String} text The text content of the message. Optional only if actions are provided.
     */
    setText(text: string): void;
    text: string;
    /**
         * Returns Array of message actions.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>}
         */
    getActions(): Array<any>;
    /**
     * Sets Array of message actions.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions Array of message actions.
     */
    setActions(actions: any): void;
    actions: any;
    /**
         * Returns The URL for media, such as an image, attached to the message.
         * @return {String}
         */
    getMediaUrl(): string;
    /**
     * Sets The URL for media, such as an image, attached to the message.
     * @param {String} mediaUrl The URL for media, such as an image, attached to the message.
     */
    setMediaUrl(mediaUrl: string): void;
    mediaUrl: string;
}
