export default ConversationCreateEventAllOfPayload;
/**
 * The ConversationCreateEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload
 * @version 9.0.1
 */
declare class ConversationCreateEventAllOfPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationCreateEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload} The populated <code>ConversationCreateEventAllOfPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The conversation that was created.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getConversation(): any;
    /**
     * Sets The conversation that was created.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation that was created.
     */
    setConversation(conversation: any): void;
    conversation: any;
    /**
         * Returns The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload.CreationReasonEnum}
         */
    getCreationReason(): any;
    /**
     * Sets The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationCreateEventAllOfPayload.CreationReasonEnum} creationReason The reason why the conversation was created, if applicable. * `linkRequest` - The conversation was created in order to generate a link request to transfer the user to a different channel. * `message` - The conversation was created because a message was sent. * `none` - The conversation was not created for a specific purpose. Used primarily when a conversation is created via the Create Conversation API. * `notification` - The conversation was created by a call to the Notification API. * `prechatCapture` - The conversation was created because the user completed a prechat capture form in the Web Messenger. * `startConversation` - The conversation was created because of a call to the startConversation API on one of the SDK integrations, or a start conversation event was triggered from a messaging channel.
     */
    setCreationReason(creationReason: any): void;
    creationReason: any;
    /**
         * Returns The source of the creation.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
         */
    getSource(): any;
    /**
     * Sets The source of the creation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source of the creation.
     */
    setSource(source: any): void;
    source: any;
    /**
         * Returns The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getUser(): any;
    /**
     * Sets The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user associated with the conversation. Only present if the created conversation was of type personal. For sdkGroup conversations, the list of participants can be fetched using the List Participants API, if required.
     */
    setUser(user: any): void;
    user: any;
    /**
         * Returns Referral information, if applicable.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral}
         */
    getReferral(): any;
    /**
     * Sets Referral information, if applicable.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Referral} referral Referral information, if applicable.
     */
    setReferral(referral: any): void;
    referral: any;
}
declare namespace ConversationCreateEventAllOfPayload {
    namespace CreationReasonEnum {
        const linkRequest: string;
        const message: string;
        const none: string;
        const notification: string;
        const prechatCapture: string;
        const startConversation: string;
    }
}
