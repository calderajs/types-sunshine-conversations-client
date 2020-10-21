export default MailgunUpdate;
/**
 * The MailgunUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MailgunUpdate
 * @version 9.0.1
 */
declare class MailgunUpdate {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MailgunUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunUpdate} The populated <code>MailgunUpdate</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     * @param {String} displayName A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
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
