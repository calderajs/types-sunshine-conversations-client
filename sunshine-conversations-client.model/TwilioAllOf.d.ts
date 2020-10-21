export default TwilioAllOf;
/**
 * The TwilioAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf
 * @version 9.0.1
 */
declare class TwilioAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, accountSid: any, authToken: any, phoneNumberSid: any): void;
    /**
     * Constructs a <code>TwilioAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf} The populated <code>TwilioAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>TwilioAllOf</code>.
     * To configure a Twilio integration, acquire the required information from the user and call the Create Integration endpoint.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TwilioAllOf
     * @param accountSid {String} Twilio Account SID.
     * @param authToken {String} Twilio Auth Token.
     * @param phoneNumberSid {String} SID for specific phone number.
     */
    constructor(accountSid: string, authToken: string, phoneNumberSid: string);
    /**
         * Returns The type of integration.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns Twilio Account SID.
         * @return {String}
         */
    getAccountSid(): string;
    /**
     * Sets Twilio Account SID.
     * @param {String} accountSid Twilio Account SID.
     */
    setAccountSid(accountSid: string): void;
    accountSid: string;
    /**
         * Returns Twilio Auth Token.
         * @return {String}
         */
    getAuthToken(): string;
    /**
     * Sets Twilio Auth Token.
     * @param {String} authToken Twilio Auth Token.
     */
    setAuthToken(authToken: string): void;
    authToken: string;
    /**
         * Returns SID for specific phone number.
         * @return {String}
         */
    getPhoneNumberSid(): string;
    /**
     * Sets SID for specific phone number.
     * @param {String} phoneNumberSid SID for specific phone number.
     */
    setPhoneNumberSid(phoneNumberSid: string): void;
    phoneNumberSid: string;
}
