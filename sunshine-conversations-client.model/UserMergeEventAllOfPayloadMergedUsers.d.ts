export default UserMergeEventAllOfPayloadMergedUsers;
/**
 * The UserMergeEventAllOfPayloadMergedUsers model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers
 * @version 9.0.1
 */
declare class UserMergeEventAllOfPayloadMergedUsers {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UserMergeEventAllOfPayloadMergedUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} The populated <code>UserMergeEventAllOfPayloadMergedUsers</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The user that now represents the merged user object.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getSurviving(): any;
    /**
     * Sets The user that now represents the merged user object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} surviving The user that now represents the merged user object.
     */
    setSurviving(surviving: any): void;
    surviving: any;
    /**
         * Returns The user that was unified into the surviving user object.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getDiscarded(): any;
    /**
     * Sets The user that was unified into the surviving user object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} discarded The user that was unified into the surviving user object.
     */
    setDiscarded(discarded: any): void;
    discarded: any;
}
