export default Confirmation;
/**
 * The Confirmation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Confirmation
 * @version 9.0.1
 */
declare class Confirmation {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>Confirmation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} The populated <code>Confirmation</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Confirmation</code>.
     * The confirmation options of the link request.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum} The type of confirmation.
     */
    constructor(type: any);
    /**
         * Returns The type of confirmation.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum}
         */
    getType(): any;
    /**
     * Sets The type of confirmation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum} type The type of confirmation.
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost}
         */
    getMessage(): any;
    /**
     * Sets The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} message The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
     */
    setMessage(message: any): void;
    message: any;
}
declare namespace Confirmation {
    namespace TypeEnum {
        const immediate: string;
        const userActivity: string;
        const prompt: string;
    }
}
