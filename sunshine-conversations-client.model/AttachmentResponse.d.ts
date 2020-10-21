export default AttachmentResponse;
/**
 * The AttachmentResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse
 * @version 9.0.1
 */
declare class AttachmentResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AttachmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse} The populated <code>AttachmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The uploaded attachment object.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema}
         */
    getAttachment(): any;
    /**
     * Sets The uploaded attachment object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentSchema} attachment The uploaded attachment object.
     */
    setAttachment(attachment: any): void;
    attachment: any;
}
