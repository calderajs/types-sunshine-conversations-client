/**
* Attachments service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/AttachmentsApi
* @version 9.0.1
*/
export default class AttachmentsApi {
    /**
    * Constructs a new AttachmentsApi.
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/AttachmentsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete Attachment
     * Remove an attachment uploaded to Sunshine Conversations through the Upload attachment API. See [Attachments for Messages](#section/Attachments-for-Messages) to have attachments automatically deleted when deleting messages, conversations or users. <aside class=\"notice\">Note that deleted attachments can remain available on our CDN’s cache up to 15 minutes after the delete call.</aside>
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} attachmentDeleteBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAttachmentWithHttpInfo(appId: string, attachmentDeleteBody: any): Promise<any>;
    /**
     * Delete Attachment
     * Remove an attachment uploaded to Sunshine Conversations through the Upload attachment API. See [Attachments for Messages](#section/Attachments-for-Messages) to have attachments automatically deleted when deleting messages, conversations or users. <aside class=\"notice\">Note that deleted attachments can remain available on our CDN’s cache up to 15 minutes after the delete call.</aside>
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} attachmentDeleteBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAttachment(appId: string, attachmentDeleteBody: any): Promise<any>;
    /**
     * Generate Media Token
     * Generates a media JWT for a list of attachment paths. This media token is a prerequisite for setting the cookie needed to visualize a private attachment. <aside class=\"notice\">Note you have the ability to allow files using different rules, see <a href=\"https://docs.smooch.io/guide/private-attachments\">Private Attachments</a> for more details.</aside>
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} attachmentMediaTokenBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse} and HTTP response
     */
    generateMediaJsonWebTokenWithHttpInfo(appId: string, attachmentMediaTokenBody: any): Promise<any>;
    /**
     * Generate Media Token
     * Generates a media JWT for a list of attachment paths. This media token is a prerequisite for setting the cookie needed to visualize a private attachment. <aside class=\"notice\">Note you have the ability to allow files using different rules, see <a href=\"https://docs.smooch.io/guide/private-attachments\">Private Attachments</a> for more details.</aside>
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenBody} attachmentMediaTokenBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentMediaTokenResponse}
     */
    generateMediaJsonWebToken(appId: string, attachmentMediaTokenBody: any): Promise<any>;
    /**
     * Set Cookie
     * With the media JWT retrieved, pass it in the header of the below request as it’s authorization in order to set a cookie in the user’s browser corresponding to the path within the media JWT. The expiration date of this cookie will match the expiration date of the media JWT. This cookie will be needed to visualize a private attachment.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    setCookieWithHttpInfo(appId: string): Promise<any>;
    /**
     * Set Cookie
     * With the media JWT retrieved, pass it in the header of the below request as it’s authorization in order to set a cookie in the user’s browser corresponding to the path within the media JWT. The expiration date of this cookie will match the expiration date of the media JWT. This cookie will be needed to visualize a private attachment.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    setCookie(appId: string): Promise<any>;
    /**
     * Upload Attachment
     * Upload an attachment to Sunshine Conversations to use in future messages. Files are uploaded using the multipart/form-data content type. Use the returned mediaUrl to send a file, image or carousel message. <aside class=\"notice\">Note that Sunshine Conversations limits the size and type of file you can upload to the platform. See the <a href=\"https://docs.smooch.io/guide/validating-files\">file validation</a> guide for more details.</aside>
     * @param {String} appId Identifies the app.
     * @param {String} access The access level for the attachment. Currently the available access levels are public and private.
     * @param {File} source
     * @param {Object} opts Optional parameters
     * @param {String} opts._for Specifies the intended container for the attachment, to enable automatic attachment deletion (on deletion of associated message, conversation or user). For now, only message is supported. See [Attachments for Messages](#section/Attachments-for-Messages) for details.
     * @param {String} opts.conversationId Links the attachment getting uploaded to the conversation ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse} and HTTP response
     */
    uploadAttachmentWithHttpInfo(appId: string, access: string, source: File, opts: {
        _for: string;
        conversationId: string;
    }): Promise<any>;
    /**
     * Upload Attachment
     * Upload an attachment to Sunshine Conversations to use in future messages. Files are uploaded using the multipart/form-data content type. Use the returned mediaUrl to send a file, image or carousel message. <aside class=\"notice\">Note that Sunshine Conversations limits the size and type of file you can upload to the platform. See the <a href=\"https://docs.smooch.io/guide/validating-files\">file validation</a> guide for more details.</aside>
     * @param {String} appId Identifies the app.
     * @param {String} access The access level for the attachment. Currently the available access levels are public and private.
     * @param {File} source
     * @param {Object} opts Optional parameters
     * @param {String} opts._for Specifies the intended container for the attachment, to enable automatic attachment deletion (on deletion of associated message, conversation or user). For now, only message is supported. See [Attachments for Messages](#section/Attachments-for-Messages) for details.
     * @param {String} opts.conversationId Links the attachment getting uploaded to the conversation ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentResponse}
     */
    uploadAttachment(appId: string, access: string, source: File, opts: {
        _for: string;
        conversationId: string;
    }): Promise<any>;
}
