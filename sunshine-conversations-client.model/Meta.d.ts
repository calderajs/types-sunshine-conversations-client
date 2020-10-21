export default Meta;
/**
 * The Meta model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Meta
 * @version 9.0.1
 */
declare class Meta {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} The populated <code>Meta</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A flag that indicates if there are more records that can be fetched.
         * @return {Boolean}
         */
    getHasMore(): boolean;
    /**
     * Sets A flag that indicates if there are more records that can be fetched.
     * @param {Boolean} hasMore A flag that indicates if there are more records that can be fetched.
     */
    setHasMore(hasMore: boolean): void;
    hasMore: boolean;
    /**
         * Returns A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages.
         * @return {String}
         */
    getAfterCursor(): string;
    /**
     * Sets A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages.
     * @param {String} afterCursor A record id that can be used as a `page[after]` parameter in a new request to get the next page.  Not specified if there are no subsequent pages.
     */
    setAfterCursor(afterCursor: string): void;
    afterCursor: string;
    /**
         * Returns A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages.
         * @return {String}
         */
    getBeforeCursor(): string;
    /**
     * Sets A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages.
     * @param {String} beforeCursor A record id that can be used as a `page[before]` parameter in a new request to get the previous page.  Not specified if there are no previous pages.
     */
    setBeforeCursor(beforeCursor: string): void;
    beforeCursor: string;
}
