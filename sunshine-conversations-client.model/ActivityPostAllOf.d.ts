export default ActivityPostAllOf;
/**
 * The ActivityPostAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf
 * @version 9.0.1
 */
declare class ActivityPostAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ActivityPostAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf} The populated <code>ActivityPostAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The author of the activity.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
         */
    getAuthor(): any;
    /**
     * Sets The author of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author The author of the activity.
     */
    setAuthor(author: any): void;
    author: any;
}
