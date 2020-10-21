export default MailgunAllOf;
/**
 * The MailgunAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MailgunAllOf
 * @version 9.0.1
 */
declare class MailgunAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, apiKey: any, domain: any, incomingAddress: any): void;
    /**
     * Constructs a <code>MailgunAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunAllOf} The populated <code>MailgunAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MailgunAllOf</code>.
     * To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunAllOf
     * @param apiKey {String} The public API key of your Mailgun account.
     * @param domain {String} The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     * @param incomingAddress {String} Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     */
    constructor(apiKey: string, domain: string, incomingAddress: string);
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
         * Returns The public API key of your Mailgun account.
         * @return {String}
         */
    getApiKey(): string;
    /**
     * Sets The public API key of your Mailgun account.
     * @param {String} apiKey The public API key of your Mailgun account.
     */
    setApiKey(apiKey: string): void;
    apiKey: string;
    /**
         * Returns The domain used to relay email. This domain must be configured and verified in your Mailgun account.
         * @return {String}
         */
    getDomain(): string;
    /**
     * Sets The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     * @param {String} domain The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     */
    setDomain(domain: string): void;
    domain: string;
    /**
         * Returns Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
         * @return {String}
         */
    getIncomingAddress(): string;
    /**
     * Sets Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     * @param {String} incomingAddress Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     */
    setIncomingAddress(incomingAddress: string): void;
    incomingAddress: string;
    /**
         * Returns A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
         * @return {Boolean}
         */
    getHideUnsubscribeLink(): boolean;
    /**
     * Sets A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     * @param {Boolean} hideUnsubscribeLink A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     */
    setHideUnsubscribeLink(hideUnsubscribeLink: boolean): void;
    hideUnsubscribeLink: boolean;
    /**
         * Returns Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
         * @return {String}
         */
    getFromAddress(): string;
    /**
     * Sets Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     * @param {String} fromAddress Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     */
    setFromAddress(fromAddress: string): void;
    fromAddress: string;
}
