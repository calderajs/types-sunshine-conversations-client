export default App;
/**
 * The App model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/App
 * @version 9.0.1
 */
declare class App {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/App} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/App} The populated <code>App</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A canonical ID that can be used to retrieve the Sunshine Conversations app.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets A canonical ID that can be used to retrieve the Sunshine Conversations app.
     * @param {String} id A canonical ID that can be used to retrieve the Sunshine Conversations app.
     */
    setId(id: string): void;
    id: string;
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
