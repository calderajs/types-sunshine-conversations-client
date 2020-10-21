export default MatchCriteriaMailgun;
/**
 * The MatchCriteriaMailgun model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
 * @version 9.0.1
 */
declare class MatchCriteriaMailgun {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, integrationId: any, address: any): void;
    /**
     * Constructs a <code>MatchCriteriaMailgun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun} The populated <code>MatchCriteriaMailgun</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MatchCriteriaMailgun</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgunAllOf
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param address {String} The user’s email address.
     */
    constructor(type: string, integrationId: string, address: string);
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
         * Returns The ID of the integration to link. Must match the provided type.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets The ID of the integration to link. Must match the provided type.
     * @param {String} integrationId The ID of the integration to link. Must match the provided type.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns Flag indicating whether the client will become the primary for the target conversation once linking is complete.
         * @return {Boolean}
         */
    getPrimary(): boolean;
    /**
     * Sets Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @param {Boolean} primary Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     */
    setPrimary(primary: boolean): void;
    primary: boolean;
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
