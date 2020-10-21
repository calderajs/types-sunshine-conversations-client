export default LocationMessage;
/**
 * The LocationMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage
 * @version 9.0.1
 */
declare class LocationMessage {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>LocationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage} The populated <code>LocationMessage</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LocationMessage</code>.
     * A location type message includes the coordinates (latitude and longitude) of a location and an optional location object which can include the name and address of the location. Typically sent in response to a Location Request.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessage
     * @param type {String} The type of message.
     */
    constructor(type: string);
    /**
         * Returns The type of message.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns The fallback text message used when location messages are not supported by the channel.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The fallback text message used when location messages are not supported by the channel.
     * @param {String} text The fallback text message used when location messages are not supported by the channel.
     */
    setText(text: string): void;
    text: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates}
         */
    getCoordinates(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageCoordinates} coordinates
     */
    setCoordinates(coordinates: any): void;
    coordinates: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation}
         */
    getLocation(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LocationMessageLocation} location
     */
    setLocation(location: any): void;
    location: any;
}
