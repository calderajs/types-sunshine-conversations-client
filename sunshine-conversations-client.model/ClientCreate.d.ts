export default ClientCreate;
/**
 * The ClientCreate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate
 * @version 9.0.1
 */
declare class ClientCreate {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, matchCriteria: any, confirmation: any, target: any): void;
    /**
     * Constructs a <code>ClientCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} The populated <code>ClientCreate</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ClientCreate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate
     * @param matchCriteria {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria}
     * @param confirmation {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation}
     * @param target {module:sunshine-conversations-client/sunshine-conversations-client.model/Target}
     */
    constructor(matchCriteria: any, confirmation: any, target: any);
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria}
         */
    getMatchCriteria(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} matchCriteria
     */
    setMatchCriteria(matchCriteria: any): void;
    matchCriteria: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation}
         */
    getConfirmation(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} confirmation
     */
    setConfirmation(confirmation: any): void;
    confirmation: any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Target}
         */
    getTarget(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Target} target
     */
    setTarget(target: any): void;
    target: any;
}
