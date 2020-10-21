export default ParticipantLeaveBodyUserExternalId;
/**
 * The ParticipantLeaveBodyUserExternalId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId
 * @version 9.0.1
 */
declare class ParticipantLeaveBodyUserExternalId {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ParticipantLeaveBodyUserExternalId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId} The populated <code>ParticipantLeaveBodyUserExternalId</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
}
