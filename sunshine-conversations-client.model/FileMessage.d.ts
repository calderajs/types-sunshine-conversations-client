export default FileMessage;
/**
 * The FileMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FileMessage
 * @version 9.0.1
 */
declare class FileMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>FileMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage} The populated <code>FileMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FileMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage
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
         * Returns The text content of the message.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The text content of the message.
     * @param {String} text The text content of the message.
     */
    setText(text: string): void;
    text: string;
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
    /**
         * Returns The size of the media.
         * @return {Number}
         */
    getMediaSize(): number;
    /**
     * Sets The size of the media.
     * @param {Number} mediaSize The size of the media.
     */
    setMediaSize(mediaSize: number): void;
    mediaSize: number;
    /**
         * Returns The media type of the file.
         * @return {String}
         */
    getMediaType(): string;
    /**
     * Sets The media type of the file.
     * @param {String} mediaType The media type of the file.
     */
    setMediaType(mediaType: string): void;
    mediaType: string;
}
