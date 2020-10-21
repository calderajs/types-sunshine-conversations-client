export default CarouselMessage;
/**
 * The CarouselMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage
 * @version 9.0.1
 */
declare class CarouselMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, items: any): void;
    /**
     * Constructs a <code>CarouselMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage} The populated <code>CarouselMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CarouselMessage</code>.
     * Carousel messages are a horizontally scrollable set of items that may each contain text, an image, and message actions. Not all messaging channels fully support carousel messages; currently only Facebook Messenger, LINE, Telegram, Viber, the Web Messenger, the Android SDK and the iOS SDK cover the full functionality. For all other platforms a carousel message is rendered as raw text. The raw text fallback does not include any images or postback message actions.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage
     * @param type {String} The type of message.
     * @param items {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    constructor(type: string, items: Array<any>);
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
         * Returns The fallback text message used when carousel messages are not supported by the channel.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The fallback text message used when carousel messages are not supported by the channel.
     * @param {String} text The fallback text message used when carousel messages are not supported by the channel.
     */
    setText(text: string): void;
    text: string;
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
}
