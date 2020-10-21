export default AppSettings;
/**
 * The AppSettings model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppSettings
 * @version 9.0.1
 */
declare class AppSettings {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AppSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} The populated <code>AppSettings</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/rest/#conversation-retention-seconds) for more information.
         * minimum: 0
         * @return {Number}
         */
    getConversationRetentionSeconds(): number;
    /**
     * Sets Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/rest/#conversation-retention-seconds) for more information.
     * @param {Number} conversationRetentionSeconds Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/rest/#conversation-retention-seconds) for more information.
     */
    setConversationRetentionSeconds(conversationRetentionSeconds: number): void;
    conversationRetentionSeconds: number;
    /**
         * Returns A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations.
         * @return {Boolean}
         */
    getMaskCreditCardNumbers(): boolean;
    /**
     * Sets A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations.
     * @param {Boolean} maskCreditCardNumbers A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations.
     */
    setMaskCreditCardNumbers(maskCreditCardNumbers: boolean): void;
    maskCreditCardNumbers: boolean;
    /**
         * Returns A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details.
         * @return {Boolean}
         */
    getUseAnimalNames(): boolean;
    /**
     * Sets A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details.
     * @param {Boolean} useAnimalNames A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details.
     */
    setUseAnimalNames(useAnimalNames: boolean): void;
    useAnimalNames: boolean;
    /**
         * Returns A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/rest/#echo-postbacks) for more information.
         * @return {Boolean}
         */
    getEchoPostback(): boolean;
    /**
     * Sets A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/rest/#echo-postbacks) for more information.
     * @param {Boolean} echoPostback A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/rest/#echo-postbacks) for more information.
     */
    setEchoPostback(echoPostback: boolean): void;
    echoPostback: boolean;
    /**
         * Returns A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside>
         * @return {Boolean}
         */
    getIgnoreAutoConversationStart(): boolean;
    /**
     * Sets A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside>
     * @param {Boolean} ignoreAutoConversationStart A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside>
     */
    setIgnoreAutoConversationStart(ignoreAutoConversationStart: boolean): void;
    ignoreAutoConversationStart: boolean;
    /**
         * Returns A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**.
         * @return {Boolean}
         */
    getMultiConvoEnabled(): boolean;
    /**
     * Sets A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**.
     * @param {Boolean} multiConvoEnabled A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**.
     */
    setMultiConvoEnabled(multiConvoEnabled: boolean): void;
    multiConvoEnabled: boolean;
    /**
         * Returns A string specifying whether attachments should be stored in a publicly or privately accessible cloud storage. attachmentsAccess is set to public by default but can be modified to private. See <a href=\"https://docs.smooch.io/guide/private-attachments/\">Private Attachments</a> for more information.
         * @return {String}
         */
    getAttachmentsAccess(): string;
    /**
     * Sets A string specifying whether attachments should be stored in a publicly or privately accessible cloud storage. attachmentsAccess is set to public by default but can be modified to private. See <a href=\"https://docs.smooch.io/guide/private-attachments/\">Private Attachments</a> for more information.
     * @param {String} attachmentsAccess A string specifying whether attachments should be stored in a publicly or privately accessible cloud storage. attachmentsAccess is set to public by default but can be modified to private. See <a href=\"https://docs.smooch.io/guide/private-attachments/\">Private Attachments</a> for more information.
     */
    setAttachmentsAccess(attachmentsAccess: string): void;
    attachmentsAccess: string;
    /**
         * Returns Number of seconds representing the expiration time of the generated media tokens for private attachments. The JWT will be valid for 2 hours by default. See See <a href=\"https://docs.smooch.io/guide/private-attachments/\">Private Attachments</a> for more information.
         * @return {Number}
         */
    getAttachmentsTokenExpirationSeconds(): number;
    /**
     * Sets Number of seconds representing the expiration time of the generated media tokens for private attachments. The JWT will be valid for 2 hours by default. See See <a href=\"https://docs.smooch.io/guide/private-attachments/\">Private Attachments</a> for more information.
     * @param {Number} attachmentsTokenExpirationSeconds Number of seconds representing the expiration time of the generated media tokens for private attachments. The JWT will be valid for 2 hours by default. See See <a href=\"https://docs.smooch.io/guide/private-attachments/\">Private Attachments</a> for more information.
     */
    setAttachmentsTokenExpirationSeconds(attachmentsTokenExpirationSeconds: number): void;
    attachmentsTokenExpirationSeconds: number;
}
