export default Participant;
/**
 * The Participant model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Participant
 * @version 9.0.1
 */
declare class Participant {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant} The populated <code>Participant</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the participant.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the participant.
     * @param {String} id The unique ID of the participant.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns The id of the associated user.
         * @return {String}
         */
    getUserId(): string;
    /**
     * Sets The id of the associated user.
     * @param {String} userId The id of the associated user.
     */
    setUserId(userId: string): void;
    userId: string;
    /**
         * Returns Number of messages the user has not yet read.
         * @return {Number}
         */
    getUnreadCount(): number;
    /**
     * Sets Number of messages the user has not yet read.
     * @param {Number} unreadCount Number of messages the user has not yet read.
     */
    setUnreadCount(unreadCount: number): void;
    unreadCount: number;
    /**
         * Returns Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery.
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation>}
         */
    getClientAssociations(): Array<any>;
    /**
     * Sets Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation>} clientAssociations Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery.
     */
    setClientAssociations(clientAssociations: any): void;
    clientAssociations: any;
    /**
         * Returns The externalId of the associated user.
         * @return {String}
         */
    getUserExternalId(): string;
    /**
     * Sets The externalId of the associated user.
     * @param {String} userExternalId The externalId of the associated user.
     */
    setUserExternalId(userExternalId: string): void;
    userExternalId: string;
    /**
         * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
         * @return {String}
         */
    getLastRead(): string;
    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
     * @param {String} lastRead A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
     */
    setLastRead(lastRead: string): void;
    lastRead: string;
}
