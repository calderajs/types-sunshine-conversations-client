export default WebAllOf;
/**
 * The WebAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebAllOf
 * @version 9.0.1
 */
declare class WebAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WebAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebAllOf} The populated <code>WebAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
}
