export default SwitchboardListResponse;
/**
 * The SwitchboardListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse
 * @version 9.0.1
 */
declare class SwitchboardListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse} The populated <code>SwitchboardListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns List of returned switchboards.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard>}
         */
    getSwitchboards(): Array<any>;
    /**
     * Sets List of returned switchboards.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard>} switchboards List of returned switchboards.
     */
    setSwitchboards(switchboards: any): void;
    switchboards: any;
}
