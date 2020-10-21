export default UserTruncated;
/**
 * The UserTruncated model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated
 * @version 9.0.1
 */
declare class UserTruncated {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UserTruncated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated} The populated <code>UserTruncated</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the user.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the user.
     * @param {String} id The unique ID of the user.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns An optional ID that if specified can also be used to retrieve the user.
         * @return {String}
         */
    getExternalId(): string;
    /**
     * Sets An optional ID that if specified can also be used to retrieve the user.
     * @param {String} externalId An optional ID that if specified can also be used to retrieve the user.
     */
    setExternalId(externalId: string): void;
    externalId: string;
}
