export default IntegrationUpdate;
/**
 * The IntegrationUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate
 * @version 9.0.1
 */
declare class IntegrationUpdate {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdate} The populated <code>IntegrationUpdate</code> instance.
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
         * Returns Your server key from the fcm console.
         * @return {String}
         */
    getServerKey(): string;
    /**
     * Sets Your server key from the fcm console.
     * @param {String} serverKey Your server key from the fcm console.
     */
    setServerKey(serverKey: string): void;
    serverKey: string;
    /**
         * Returns Your sender id from the fcm console.
         * @return {String}
         */
    getSenderId(): string;
    /**
     * Sets Your sender id from the fcm console.
     * @param {String} senderId Your sender id from the fcm console.
     */
    setSenderId(senderId: string): void;
    senderId: string;
    /**
         * Returns Allows users to create more than one conversation on the web messenger integration.
         * @return {Boolean}
         */
    getCanUserCreateMoreConversations(): boolean;
    /**
     * Sets Allows users to create more than one conversation on the web messenger integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the web messenger integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations: boolean): void;
    canUserCreateMoreConversations: boolean;
    /**
         * Returns The binary of your APN certificate base64 encoded.
         * @return {String}
         */
    getCertificate(): string;
    /**
     * Sets The binary of your APN certificate base64 encoded.
     * @param {String} certificate The binary of your APN certificate base64 encoded.
     */
    setCertificate(certificate: string): void;
    certificate: string;
    /**
         * Returns The password for your APN certificate.
         * @return {String}
         */
    getPassword(): string;
    /**
     * Sets The password for your APN certificate.
     * @param {String} password The password for your APN certificate.
     */
    setPassword(password: string): void;
    password: string;
    /**
         * Returns The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
         * @return {Boolean}
         */
    getProduction(): boolean;
    /**
     * Sets The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     * @param {Boolean} production The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     */
    setProduction(production: boolean): void;
    production: boolean;
    /**
         * Returns Use the unread count of the conversation as the application badge.
         * @return {Boolean}
         */
    getAutoUpdateBadge(): boolean;
    /**
     * Sets Use the unread count of the conversation as the application badge.
     * @param {Boolean} autoUpdateBadge Use the unread count of the conversation as the application badge.
     */
    setAutoUpdateBadge(autoUpdateBadge: boolean): void;
    autoUpdateBadge: boolean;
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
    /**
         * Returns This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
         * @return {String}
         */
    getBrandColor(): string;
    /**
     * Sets This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     * @param {String} brandColor This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     */
    setBrandColor(brandColor: string): void;
    brandColor: string;
    /**
         * Returns When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
         * @return {Boolean}
         */
    getFixedIntroPane(): boolean;
    /**
     * Sets When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     * @param {Boolean} fixedIntroPane When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     */
    setFixedIntroPane(fixedIntroPane: boolean): void;
    fixedIntroPane: boolean;
    /**
         * Returns This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
         * @return {String}
         */
    getConversationColor(): string;
    /**
     * Sets This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     * @param {String} conversationColor This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     */
    setConversationColor(conversationColor: string): void;
    conversationColor: string;
    /**
         * Returns This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
         * @return {String}
         */
    getActionColor(): string;
    /**
     * Sets This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     * @param {String} actionColor This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     */
    setActionColor(actionColor: string): void;
    actionColor: string;
    /**
         * Returns Choose how the messenger will appear on your website. Must be either button or tab.
         * @return {String}
         */
    getDisplayStyle(): string;
    /**
     * Sets Choose how the messenger will appear on your website. Must be either button or tab.
     * @param {String} displayStyle Choose how the messenger will appear on your website. Must be either button or tab.
     */
    setDisplayStyle(displayStyle: string): void;
    displayStyle: string;
    /**
         * Returns With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
         * @return {String}
         */
    getButtonIconUrl(): string;
    /**
     * Sets With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @param {String} buttonIconUrl With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    setButtonIconUrl(buttonIconUrl: string): void;
    buttonIconUrl: string;
    /**
         * Returns With the button style Web Messenger, you have the option of specifying the button width.
         * @return {String}
         */
    getButtonWidth(): string;
    /**
     * Sets With the button style Web Messenger, you have the option of specifying the button width.
     * @param {String} buttonWidth With the button style Web Messenger, you have the option of specifying the button width.
     */
    setButtonWidth(buttonWidth: string): void;
    buttonWidth: string;
    /**
         * Returns With the button style Web Messenger, you have the option of specifying the button height.
         * @return {String}
         */
    getButtonHeight(): string;
    /**
     * Sets With the button style Web Messenger, you have the option of specifying the button height.
     * @param {String} buttonHeight With the button style Web Messenger, you have the option of specifying the button height.
     */
    setButtonHeight(buttonHeight: string): void;
    buttonHeight: string;
    /**
         * Returns Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
         * @return {Array.<String>}
         */
    getIntegrationOrder(): Array<string>;
    /**
     * Sets Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     * @param {Array.<String>} integrationOrder Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     */
    setIntegrationOrder(integrationOrder: Array<string>): void;
    integrationOrder: string[];
    /**
         * Returns A custom business name for the Web Messenger.
         * @return {String}
         */
    getBusinessName(): string;
    /**
     * Sets A custom business name for the Web Messenger.
     * @param {String} businessName A custom business name for the Web Messenger.
     */
    setBusinessName(businessName: string): void;
    businessName: string;
    /**
         * Returns A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
         * @return {String}
         */
    getBusinessIconUrl(): string;
    /**
     * Sets A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @param {String} businessIconUrl A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    setBusinessIconUrl(businessIconUrl: string): void;
    businessIconUrl: string;
    /**
         * Returns A background image url for the conversation. Image will be tiled to fit the window.
         * @return {String}
         */
    getBackgroundImageUrl(): string;
    /**
     * Sets A background image url for the conversation. Image will be tiled to fit the window.
     * @param {String} backgroundImageUrl A background image url for the conversation. Image will be tiled to fit the window.
     */
    setBackgroundImageUrl(backgroundImageUrl: string): void;
    backgroundImageUrl: string;
    /**
         * Returns A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https.
         * @return {Array.<String>}
         */
    getOriginWhitelist(): Array<string>;
    /**
     * Sets A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https.
     * @param {Array.<String>} originWhitelist A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https.
     */
    setOriginWhitelist(originWhitelist: Array<string>): void;
    originWhitelist: string[];
    /**
         * Returns Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture}
         */
    getPrechatCapture(): any;
    /**
     * Sets Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     */
    setPrechatCapture(prechatCapture: any): void;
    prechatCapture: any;
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
