export default AcceptControlBody;
/**
 * The AcceptControlBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody
 * @version 9.0.1
 */
declare class AcceptControlBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AcceptControlBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AcceptControlBody} The populated <code>AcceptControlBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:acceptControl` and `switchboard:acceptControl:failure` webhooks.
     */
    setMetadata(metadata: any): void;
    metadata: any;
}
