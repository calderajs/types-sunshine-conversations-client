export default Telegram;
/**
 * The Telegram model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Telegram
 * @version 9.0.1
 */
declare class Telegram {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, token: any): void;
    /**
     * Constructs a <code>Telegram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram} The populated <code>Telegram</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Telegram</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf
     * @param type {String} The type of integration.
     * @param token {String} Telegram Bot Token.
     */
    constructor(type: string, token: string);
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
         * Returns Telegram Bot Token.
         * @return {String}
         */
    getToken(): string;
    /**
     * Sets Telegram Bot Token.
     * @param {String} token Telegram Bot Token.
     */
    setToken(token: string): void;
    token: string;
    /**
         * Returns Username of the botId
         * @return {String}
         */
    getUsername(): string;
    /**
     * Sets Username of the botId
     * @param {String} username Username of the botId
     */
    setUsername(username: string): void;
    username: string;
    /**
         * Returns A human-friendly name used to identify the integration.
         * @return {String}
         */
    getBotId(): string;
    /**
     * Sets A human-friendly name used to identify the integration.
     * @param {String} botId A human-friendly name used to identify the integration.
     */
    setBotId(botId: string): void;
    botId: string;
}
