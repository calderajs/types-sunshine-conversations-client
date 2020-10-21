export default ParticipantListResponse;
/**
 * The ParticipantListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse
 * @version 9.0.1
 */
declare class ParticipantListResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ParticipantListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantListResponse} The populated <code>ParticipantListResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Participant>}
         */
    getParticipants(): Array<any>;
    /**
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Participant>} participants
     */
    setParticipants(participants: any): void;
    participants: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta}
         */
    getMeta(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Meta} meta
     */
    setMeta(meta: any): void;
    meta: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Links}
         */
    getLinks(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Links} links
     */
    setLinks(links: any): void;
    links: any;
}
