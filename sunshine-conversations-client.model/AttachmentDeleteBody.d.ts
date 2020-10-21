export default AttachmentDeleteBody;
/**
 * The AttachmentDeleteBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody
 * @version 9.0.1
 */
declare class AttachmentDeleteBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, mediaUrl: any): void;
    /**
     * Constructs a <code>AttachmentDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} The populated <code>AttachmentDeleteBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AttachmentDeleteBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody
     * @param mediaUrl {String} The media URL used for a file or image message.
     */
    constructor(mediaUrl: string);
    /**
         * Returns The media URL used for a file or image message.
         * @return {String}
         */
    getMediaUrl(): string;
    /**
     * Sets The media URL used for a file or image message.
     * @param {String} mediaUrl The media URL used for a file or image message.
     */
    setMediaUrl(mediaUrl: string): void;
    mediaUrl: string;
}
