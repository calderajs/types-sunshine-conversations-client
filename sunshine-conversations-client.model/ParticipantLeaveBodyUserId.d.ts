export default ParticipantLeaveBodyUserId;
/**
 * The ParticipantLeaveBodyUserId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId
 * @version 9.0.1
 */
declare class ParticipantLeaveBodyUserId {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ParticipantLeaveBodyUserId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserId} The populated <code>ParticipantLeaveBodyUserId</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
         * @return {String}
         */
    getUserId(): string;
    /**
     * Sets The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
     * @param {String} userId The id of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
     */
    setUserId(userId: string): void;
    userId: string;
}
