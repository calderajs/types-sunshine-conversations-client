export default MatchCriteriaTwilio;
/**
 * The MatchCriteriaTwilio model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio
 * @version 9.0.1
 */
declare class MatchCriteriaTwilio {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, integrationId: any, phoneNumber: any): void;
    /**
     * Constructs a <code>MatchCriteriaTwilio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio} The populated <code>MatchCriteriaTwilio</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MatchCriteriaTwilio</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilioAllOf
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param phoneNumber {String} The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368.
     */
    constructor(type: string, integrationId: string, phoneNumber: string);
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
