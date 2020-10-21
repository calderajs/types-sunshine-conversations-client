export default AppSubSchema;
/**
 * The AppSubSchema model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema
 * @version 9.0.1
 */
declare class AppSubSchema {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppSubSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSubSchema} The populated <code>AppSubSchema</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the app.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the app.
     * @param {String} id The unique ID of the app.
     */
    setId(id: string): void;
    id: string;
}
