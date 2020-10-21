export default ParticipantLeaveBody;
/**
 * The ParticipantLeaveBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody
 * @version 9.0.1
 */
declare class ParticipantLeaveBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ParticipantLeaveBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBody} The populated <code>ParticipantLeaveBody</code> instance.
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
    /**
         * Returns The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
         * @return {String}
         */
    getUserExternalId(): string;
    /**
     * Sets The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
     * @param {String} userExternalId The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
     */
    setUserExternalId(userExternalId: string): void;
    userExternalId: string;
    /**
         * Returns The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
         * @return {String}
         */
    getParticipantId(): string;
    /**
     * Sets The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
     * @param {String} participantId The participantId of the user that will be removed from the conversation. It will return 404 if the user can’t be found.
     */
    setParticipantId(participantId: string): void;
    participantId: string;
}
