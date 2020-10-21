export default IosAllOf;
/**
 * The IosAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IosAllOf
 * @version 9.0.1
 */
declare class IosAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IosAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IosAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IosAllOf} The populated <code>IosAllOf</code> instance.
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
         * Returns Allows users to create more than one conversation on the iOS integration.
         * @return {Boolean}
         */
    getCanUserCreateMoreConversations(): boolean;
    /**
     * Sets Allows users to create more than one conversation on the iOS integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the iOS integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations: boolean): void;
    canUserCreateMoreConversations: boolean;
}
