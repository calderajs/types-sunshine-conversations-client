/**
* Enum class Status.
* @enum {}
* @readonly
*/
export default class Status {
    /**
    * Returns a <code>Status</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} The enum <code>Status</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "inactive"
     * @const
     */
    inactive: string;
    /**
     * value: "active"
     * @const
     */
    active: string;
    /**
     * value: "error"
     * @const
     */
    error: string;
}
/**
 * *
 */
export type Status = any;
