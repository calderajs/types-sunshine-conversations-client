/**
* Enum class ConversationType.
* @enum {}
* @readonly
*/
export default class ConversationType {
    /**
    * Returns a <code>ConversationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationType} The enum <code>ConversationType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "personal"
     * @const
     */
    personal: string;
    /**
     * value: "sdkGroup"
     * @const
     */
    sdkGroup: string;
}
/**
 * *
 */
export type ConversationType = any;
