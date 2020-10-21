export default AttachmentMediaTokenResponse;
/**
 * The AttachmentMediaTokenResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse
 * @version 9.0.1
 */
declare class AttachmentMediaTokenResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AttachmentMediaTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse} The populated <code>AttachmentMediaTokenResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Object with key value pair where the key is the path and the value is the media JWT.
         * @return {Object.<String, String>}
         */
    getTokens(): any;
    /**
     * Sets Object with key value pair where the key is the path and the value is the media JWT.
     * @param {Object.<String, String>} tokens Object with key value pair where the key is the path and the value is the media JWT.
     */
    setTokens(tokens: any): void;
    tokens: any;
}
