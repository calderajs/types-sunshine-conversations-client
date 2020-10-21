export default WhatsAppUpdate;
/**
 * The WhatsAppUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdate
 * @version 9.0.1
 */
declare class WhatsAppUpdate {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WhatsAppUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdate} The populated <code>WhatsAppUpdate</code> instance.
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
         * Returns Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
         * @return {String}
         */
    getHsmFallbackLanguage(): string;
    /**
     * Sets Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @param {String} hsmFallbackLanguage Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     */
    setHsmFallbackLanguage(hsmFallbackLanguage: string): void;
    hsmFallbackLanguage: string;
    /**
         * Returns The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
         * @return {String}
         */
    getAccountId(): string;
    /**
     * Sets The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @param {String} accountId The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     */
    setAccountId(accountId: string): void;
    accountId: string;
    /**
         * Returns An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
         * @return {String}
         */
    getAccountManagementAccessToken(): string;
    /**
     * Sets An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @param {String} accountManagementAccessToken An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     */
    setAccountManagementAccessToken(accountManagementAccessToken: string): void;
    accountManagementAccessToken: string;
}
