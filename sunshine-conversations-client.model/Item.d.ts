export default Item;
/**
 * The Item model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Item
 * @version 9.0.1
 */
declare class Item {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, actions: any): void;
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Item} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Item</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Item
     * @param title {String} The title of the item.
     * @param actions {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} An array of objects representing the actions associated with the item.
     */
    constructor(title: string, actions: Array<any>);
    /**
         * Returns The title of the item.
         * @return {String}
         */
    getTitle(): string;
    /**
     * Sets The title of the item.
     * @param {String} title The title of the item.
     */
    setTitle(title: string): void;
    title: string;
    /**
         * Returns The description of the item.
         * @return {String}
         */
    getDescription(): string;
    /**
     * Sets The description of the item.
     * @param {String} description The description of the item.
     */
    setDescription(description: string): void;
    description: string;
    /**
         * Returns The image url attached to the item.
         * @return {String}
         */
    getMediaUrl(): string;
    /**
     * Sets The image url attached to the item.
     * @param {String} mediaUrl The image url attached to the item.
     */
    setMediaUrl(mediaUrl: string): void;
    mediaUrl: string;
    /**
         * Returns The MIME type for any image attached in the mediaUrl.
         * @return {String}
         */
    getMediaType(): string;
    /**
     * Sets The MIME type for any image attached in the mediaUrl.
     * @param {String} mediaType The MIME type for any image attached in the mediaUrl.
     */
    setMediaType(mediaType: string): void;
    mediaType: string;
    /**
         * Returns The size of the image.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Item.SizeEnum}
         */
    getSize(): any;
    /**
     * Sets The size of the image.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Item.SizeEnum} size The size of the image.
     */
    setSize(size: any): void;
    size: any;
    /**
         * Returns An array of objects representing the actions associated with the item.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>}
         */
    getActions(): Array<any>;
    /**
     * Sets An array of objects representing the actions associated with the item.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ActionSubset>} actions An array of objects representing the actions associated with the item.
     */
    setActions(actions: any): void;
    actions: any;
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
declare namespace Item {
    namespace SizeEnum {
        const compact: string;
        const large: string;
    }
}
