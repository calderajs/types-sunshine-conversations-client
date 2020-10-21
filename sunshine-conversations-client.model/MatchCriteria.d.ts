export default MatchCriteria;
/**
 * The MatchCriteria model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria
 * @version 9.0.1
 */
declare class MatchCriteria {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, integrationId: any, address: any, phoneNumber: any): void;
    /**
     * Constructs a <code>MatchCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} The populated <code>MatchCriteria</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MatchCriteria</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsapp
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param address {String} The user’s email address.
     * @param phoneNumber {String} The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     */
    constructor(type: string, integrationId: string, address: string, phoneNumber: string);
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
    /**
         * Returns The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
         * @return {String}
         */
    getPhoneNumber(): string;
    /**
     * Sets The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     * @param {String} phoneNumber The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     */
    setPhoneNumber(phoneNumber: string): void;
    phoneNumber: string;
}
