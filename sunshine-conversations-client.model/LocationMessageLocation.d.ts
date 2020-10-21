export default LocationMessageLocation;
/**
 * The LocationMessageLocation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation
 * @version 9.0.1
 */
declare class LocationMessageLocation {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>LocationMessageLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} The populated <code>LocationMessageLocation</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A string representing the address of the location.
         * @return {String}
         */
    getAddress(): string;
    /**
     * Sets A string representing the address of the location.
     * @param {String} address A string representing the address of the location.
     */
    setAddress(address: string): void;
    address: string;
    /**
         * Returns A string representing the name of the location.
         * @return {String}
         */
    getName(): string;
    /**
     * Sets A string representing the name of the location.
     * @param {String} name A string representing the name of the location.
     */
    setName(name: string): void;
    name: string;
}
