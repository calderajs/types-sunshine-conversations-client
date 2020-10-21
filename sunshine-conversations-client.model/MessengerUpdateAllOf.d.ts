export default MessengerUpdateAllOf;
/**
 * The MessengerUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdateAllOf
 * @version 9.0.1
 */
declare class MessengerUpdateAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MessengerUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessengerUpdateAllOf} The populated <code>MessengerUpdateAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A Facebook Page Access Token.
         * @return {String}
         */
    getPageAccessToken(): string;
    /**
     * Sets A Facebook Page Access Token.
     * @param {String} pageAccessToken A Facebook Page Access Token.
     */
    setPageAccessToken(pageAccessToken: string): void;
    pageAccessToken: string;
}
