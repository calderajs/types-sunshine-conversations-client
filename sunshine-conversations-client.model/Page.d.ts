export default Page;
/**
 * The Page model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Page
 * @version 9.0.1
 */
declare class Page {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both.
         * @return {String}
         */
    getAfter(): string;
    /**
     * Sets A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both.
     * @param {String} after A record id. Results will only contain the records that come after the specified record.  Only one of `after` or `before` can be provided, not both.
     */
    setAfter(after: string): void;
    after: string;
    /**
         * Returns A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both.
         * @return {String}
         */
    getBefore(): string;
    /**
     * Sets A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both.
     * @param {String} before A record id. Results will only contain the records that come before the specified record. Only one of `after` or `before` can be provided, not both.
     */
    setBefore(before: string): void;
    before: string;
    /**
         * Returns The number of records to return.
         * minimum: 0
         * maximum: 100
         * @return {Number}
         */
    getSize(): number;
    /**
     * Sets The number of records to return.
     * @param {Number} size The number of records to return.
     */
    setSize(size: number): void;
    size: number;
}
