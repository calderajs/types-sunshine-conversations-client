export default LocationMessageCoordinates;
/**
 * The LocationMessageCoordinates model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates
 * @version 9.0.1
 */
declare class LocationMessageCoordinates {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>LocationMessageCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} The populated <code>LocationMessageCoordinates</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Global latitude.
         * @return {Number}
         */
    getLat(): number;
    /**
     * Sets Global latitude.
     * @param {Number} lat Global latitude.
     */
    setLat(lat: number): void;
    lat: number;
    /**
         * Returns Global longitude.
         * @return {Number}
         */
    getLong(): number;
    /**
     * Sets Global longitude.
     * @param {Number} _long Global longitude.
     */
    setLong(_long: number): void;
    long: number;
}
