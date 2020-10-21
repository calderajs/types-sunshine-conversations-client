export default SwitchboardResponse;
/**
 * The SwitchboardResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse
 * @version 9.0.1
 */
declare class SwitchboardResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SwitchboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} The populated <code>SwitchboardResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The switchboard.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard}
         */
    getSwitchboard(): any;
    /**
     * Sets The switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard} switchboard The switchboard.
     */
    setSwitchboard(switchboard: any): void;
    switchboard: any;
}
