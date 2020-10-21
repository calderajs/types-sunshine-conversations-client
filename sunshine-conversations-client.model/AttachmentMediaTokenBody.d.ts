export default AttachmentMediaTokenBody;
/**
 * The AttachmentMediaTokenBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody
 * @version 9.0.1
 */
declare class AttachmentMediaTokenBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, paths: any): void;
    /**
     * Constructs a <code>AttachmentMediaTokenBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} The populated <code>AttachmentMediaTokenBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AttachmentMediaTokenBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody
     * @param paths {Array.<String>} An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     */
    constructor(paths: Array<string>);
    /**
         * Returns An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
         * @return {Array.<String>}
         */
    getPaths(): Array<string>;
    /**
     * Sets An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     * @param {Array.<String>} paths An array of strings representing the list of attachment paths used to generate the media JWT. One token will be generated for each path. Each token will be valid for 2 hours by default. This value can be modified, see [App Settings](#operation/createApp) for more information.
     */
    setPaths(paths: Array<string>): void;
    paths: string[];
}
