export default Integration;
/**
 * The Integration model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Integration
 * @version 9.0.1
 */
declare class Integration {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>Integration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} The populated <code>Integration</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Integration</code>.
     * The integration.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @param type {String} The type of integration.
     */
    constructor(type: string);
    /**
         * Returns The unique ID of the integration.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the integration.
     * @param {String} id The unique ID of the integration.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns The type of integration.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type: string): void;
    type: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Status}
         */
    getStatus(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
     */
    setStatus(status: any): void;
    status: any;
    /**
         * Returns A human-friendly name used to identify the integration.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets A human-friendly name used to identify the integration.
     * @param {String} displayName A human-friendly name used to identify the integration.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
}
