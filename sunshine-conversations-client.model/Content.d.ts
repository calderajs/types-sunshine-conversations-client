export default Content;
/**
 * The Content model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Content
 * @version 9.0.1
 */
declare class Content {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, items: any, fields: any): void;
    /**
     * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} The populated <code>Content</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Content</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Content
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TextMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/FormResponseMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/ListMessage
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage
     * @param type {String} The type of message.
     * @param items {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @param fields {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} Array of field objects that contain the submitted fields.
     */
    constructor(type: string, items: Array<any>, fields: Array<any>);
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
         * Returns The fallback text message used when location messages are not supported by the channel.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The fallback text message used when location messages are not supported by the channel.
     * @param {String} text The fallback text message used when location messages are not supported by the channel.
     */
    setText(text: string): void;
    text: string;
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
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings}
         */
    getDisplaySettings(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} displaySettings
     */
    setDisplaySettings(displaySettings: any): void;
    displaySettings: any;
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
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates}
         */
    getCoordinates(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
     */
    setCoordinates(coordinates: any): void;
    coordinates: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation}
         */
    getLocation(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
     */
    setLocation(location: any): void;
    location: any;
}
