export default AppCreateBody;
/**
 * The AppCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody
 * @version 9.0.1
 */
declare class AppCreateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, displayName: any): void;
    /**
     * Constructs a <code>AppCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody} The populated <code>AppCreateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AppCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppCreateBody
     * @param displayName {String} The friendly name of the app.
     */
    constructor(displayName: string);
    /**
         * Returns The friendly name of the app.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets The friendly name of the app.
     * @param {String} displayName The friendly name of the app.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings}
         */
    getSettings(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} settings
     */
    setSettings(settings: any): void;
    settings: any;
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
