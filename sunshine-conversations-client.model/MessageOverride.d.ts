export default MessageOverride;
/**
 * The MessageOverride model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride
 * @version 9.0.1
 */
declare class MessageOverride {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MessageOverride</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} The populated <code>MessageOverride</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
         */
    getApple(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} apple
     */
    setApple(apple: any): void;
    apple: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
         */
    getLine(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} line
     */
    setLine(line: any): void;
    line: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
         */
    getMessenger(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} messenger
     */
    setMessenger(messenger: any): void;
    messenger: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
         */
    getWhatsapp(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} whatsapp
     */
    setWhatsapp(whatsapp: any): void;
    whatsapp: any;
}
