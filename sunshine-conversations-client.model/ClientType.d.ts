/**
* Enum class ClientType.
* @enum {}
* @readonly
*/
export default class ClientType {
    /**
    * Returns a <code>ClientType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} The enum <code>ClientType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "line"
     * @const
     */
    line: string;
    /**
     * value: "mailgun"
     * @const
     */
    mailgun: string;
    /**
     * value: "messagebird"
     * @const
     */
    messagebird: string;
    /**
     * value: "messenger"
     * @const
     */
    messenger: string;
    /**
     * value: "sdk"
     * @const
     */
    sdk: string;
    /**
     * value: "telegram"
     * @const
     */
    telegram: string;
    /**
     * value: "twilio"
     * @const
     */
    twilio: string;
    /**
     * value: "twitter"
     * @const
     */
    twitter: string;
    /**
     * value: "viber"
     * @const
     */
    viber: string;
    /**
     * value: "wechat"
     * @const
     */
    wechat: string;
    /**
     * value: "whatsapp"
     * @const
     */
    whatsapp: string;
}
/**
 * *
 */
export type ClientType = any;
