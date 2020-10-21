export default ActivityAllOf;
/**
 * The ActivityAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf
 * @version 9.0.1
 */
declare class ActivityAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ActivityAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityAllOf} The populated <code>ActivityAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The source of the activity.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
         */
    getSource(): any;
    /**
     * Sets The source of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source of the activity.
     */
    setSource(source: any): void;
    source: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook}
         */
    getAuthor(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AuthorWebhook} author
     */
    setAuthor(author: any): void;
    author: any;
}
