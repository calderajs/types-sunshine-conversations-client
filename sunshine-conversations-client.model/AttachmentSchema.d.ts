export default AttachmentSchema;
/**
 * The AttachmentSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema
 * @version 9.0.1
 */
declare class AttachmentSchema {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AttachmentSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} The populated <code>AttachmentSchema</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Uploaded attachment’s url
         * @return {String}
         */
    getMediaUrl(): string;
    /**
     * Sets Uploaded attachment’s url
     * @param {String} mediaUrl Uploaded attachment’s url
     */
    setMediaUrl(mediaUrl: string): void;
    mediaUrl: string;
    /**
         * Returns Uploaded attachment's media type
         * @return {String}
         */
    getMediaType(): string;
    /**
     * Sets Uploaded attachment's media type
     * @param {String} mediaType Uploaded attachment's media type
     */
    setMediaType(mediaType: string): void;
    mediaType: string;
}
