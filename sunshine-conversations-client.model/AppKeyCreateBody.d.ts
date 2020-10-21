export default AppKeyCreateBody;
/**
 * The AppKeyCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody
 * @version 9.0.1
 */
declare class AppKeyCreateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, displayName: any): void;
    /**
     * Constructs a <code>AppKeyCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} The populated <code>AppKeyCreateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AppKeyCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody
     * @param displayName {String}
     */
    constructor(displayName: string);
    /**
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * @param {String} displayName
     */
    setDisplayName(displayName: string): void;
    displayName: string;
}
