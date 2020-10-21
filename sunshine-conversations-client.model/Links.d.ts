export default Links;
/**
 * The Links model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Links
 * @version 9.0.1
 */
declare class Links {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Links</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} The populated <code>Links</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A link to the previous page. Not specified if there are no previous pages.
         * @return {String}
         */
    getPrev(): string;
    /**
     * Sets A link to the previous page. Not specified if there are no previous pages.
     * @param {String} prev A link to the previous page. Not specified if there are no previous pages.
     */
    setPrev(prev: string): void;
    prev: string;
    /**
         * Returns A link to the next page. Not specified if there are no subsequent pages.
         * @return {String}
         */
    getNext(): string;
    /**
     * Sets A link to the next page. Not specified if there are no subsequent pages.
     * @param {String} next A link to the next page. Not specified if there are no subsequent pages.
     */
    setNext(next: string): void;
    next: string;
}
