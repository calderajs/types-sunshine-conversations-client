export default PassControlBody;
/**
 * The PassControlBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody
 * @version 9.0.1
 */
declare class PassControlBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, switchboardIntegration: any): void;
    /**
     * Constructs a <code>PassControlBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody} The populated <code>PassControlBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>PassControlBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/PassControlBody
     * @param switchboardIntegration {String} The id or the name of the switchboard integration that will become active. May also use the `next` keyword to transfer control to the next switchboard integration designated in the switchboard hierarchy configuration
     */
    constructor(switchboardIntegration: string);
    /**
         * Returns The id or the name of the switchboard integration that will become active. May also use the `next` keyword to transfer control to the next switchboard integration designated in the switchboard hierarchy configuration
         * @return {String}
         */
    getSwitchboardIntegration(): string;
    /**
     * Sets The id or the name of the switchboard integration that will become active. May also use the `next` keyword to transfer control to the next switchboard integration designated in the switchboard hierarchy configuration
     * @param {String} switchboardIntegration The id or the name of the switchboard integration that will become active. May also use the `next` keyword to transfer control to the next switchboard integration designated in the switchboard hierarchy configuration
     */
    setSwitchboardIntegration(switchboardIntegration: string): void;
    switchboardIntegration: string;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:passControl` webhook.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:passControl` webhook.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:passControl` webhook.
     */
    setMetadata(metadata: any): void;
    metadata: any;
}
