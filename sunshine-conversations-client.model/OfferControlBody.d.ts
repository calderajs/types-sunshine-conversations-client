export default OfferControlBody;
/**
 * The OfferControlBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody
 * @version 9.0.1
 */
declare class OfferControlBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, switchboardIntegration: any): void;
    /**
     * Constructs a <code>OfferControlBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} The populated <code>OfferControlBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>OfferControlBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody
     * @param switchboardIntegration {String} The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     */
    constructor(switchboardIntegration: string);
    /**
         * Returns The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
         * @return {String}
         */
    getSwitchboardIntegration(): string;
    /**
     * Sets The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     * @param {String} switchboardIntegration The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     */
    setSwitchboardIntegration(switchboardIntegration: string): void;
    switchboardIntegration: string;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
     */
    setMetadata(metadata: any): void;
    metadata: any;
}
