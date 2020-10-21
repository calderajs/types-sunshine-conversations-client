export default Android;
/**
 * The Android model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Android
 * @version 9.0.1
 */
declare class Android {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>Android</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Android} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Android} The populated <code>Android</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Android</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Android
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
     * @param type {String} The type of integration.
     */
    constructor(type: string);
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
         * Returns Allows users to create more than one conversation on the android integration.
         * @return {Boolean}
         */
    getCanUserCreateMoreConversations(): boolean;
    /**
     * Sets Allows users to create more than one conversation on the android integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the android integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations: boolean): void;
    canUserCreateMoreConversations: boolean;
}
