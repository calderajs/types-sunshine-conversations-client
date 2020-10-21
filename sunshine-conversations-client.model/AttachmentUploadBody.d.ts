export default AttachmentUploadBody;
/**
 * The AttachmentUploadBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody
 * @version 9.0.1
 */
declare class AttachmentUploadBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, source: any): void;
    /**
     * Constructs a <code>AttachmentUploadBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody} The populated <code>AttachmentUploadBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AttachmentUploadBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentUploadBody
     * @param source {File}
     */
    constructor(source: File);
    /**
         * @return {File}
         */
    getSource(): File;
    /**
     * @param {File} source
     */
    setSource(source: File): void;
    source: File;
}
