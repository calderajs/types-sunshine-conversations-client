export default SwitchboardAcceptControlFailureAllOfPayload;
/**
 * The SwitchboardAcceptControlFailureAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload
 * @version 9.0.1
 */
declare class SwitchboardAcceptControlFailureAllOfPayload {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardAcceptControlFailureAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload} The populated <code>SwitchboardAcceptControlFailureAllOfPayload</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Object containing details of what went wrong.
         * @return {Object}
         */
    getError(): any;
    /**
     * Sets Object containing details of what went wrong.
     * @param {Object} error Object containing details of what went wrong.
     */
    setError(error: any): void;
    error: any;
    /**
         * Returns The conversation from which the switchboard event was fired.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
         */
    getConversation(): any;
    /**
     * Sets The conversation from which the switchboard event was fired.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation from which the switchboard event was fired.
     */
    setConversation(conversation: any): void;
    conversation: any;
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
