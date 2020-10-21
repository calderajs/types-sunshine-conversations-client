export default MatchCriteriaMailgunAllOf;
/**
 * The MatchCriteriaMailgunAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf
 * @version 9.0.1
 */
declare class MatchCriteriaMailgunAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, address: any): void;
    /**
     * Constructs a <code>MatchCriteriaMailgunAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf} The populated <code>MatchCriteriaMailgunAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MatchCriteriaMailgunAllOf</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf
     * @param address {String} The user’s email address.
     */
    constructor(address: string);
    /**
         * Returns The channel type.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The channel type.
     * @param {String} type The channel type.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns The user’s email address.
         * @return {String}
         */
    getAddress(): string;
    /**
     * Sets The user’s email address.
     * @param {String} address The user’s email address.
     */
    setAddress(address: string): void;
    address: string;
    /**
         * Returns May be specified to set the subject for the outgoing email.
         * @return {String}
         */
    getSubject(): string;
    /**
     * Sets May be specified to set the subject for the outgoing email.
     * @param {String} subject May be specified to set the subject for the outgoing email.
     */
    setSubject(subject: string): void;
    subject: string;
}
