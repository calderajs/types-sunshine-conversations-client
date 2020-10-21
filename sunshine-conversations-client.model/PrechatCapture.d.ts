export default PrechatCapture;
/**
 * The PrechatCapture model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture
 * @version 9.0.1
 */
declare class PrechatCapture {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>PrechatCapture</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} The populated <code>PrechatCapture</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
         * @return {String}
         */
    getAvatarUrl(): string;
    /**
     * Sets Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
     * @param {String} avatarUrl Sets the URL of the avatar to use for the automatic reply to the prechat capture messages.
     */
    setAvatarUrl(avatarUrl: string): void;
    avatarUrl: string;
    /**
         * Returns If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
         * @return {Boolean}
         */
    getEnabled(): boolean;
    /**
     * Sets If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
     * @param {Boolean} enabled If true, enables the Prechat Capture add-on when the Web Messenger is initialized.
     */
    setEnabled(enabled: boolean): void;
    enabled: boolean;
    /**
         * Returns f true and Mailgun is integrated, will automatically link submitted emails.
         * @return {Boolean}
         */
    getEnableEmailLinking(): boolean;
    /**
     * Sets f true and Mailgun is integrated, will automatically link submitted emails.
     * @param {Boolean} enableEmailLinking f true and Mailgun is integrated, will automatically link submitted emails.
     */
    setEnableEmailLinking(enableEmailLinking: boolean): void;
    enableEmailLinking: boolean;
    /**
         * Returns Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>}
         */
    getFields(): Array<any>;
    /**
     * Sets Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Field>} fields Array of Fields. Overrides the default Prechat Capture fields to define a custom form.
     */
    setFields(fields: any): void;
    fields: any;
}
