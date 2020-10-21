export default UserResponse;
/**
 * The UserResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserResponse
 * @version 9.0.1
 */
declare class UserResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserResponse} The populated <code>UserResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The user.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
         */
    getUser(): any;
    /**
     * Sets The user.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user.
     */
    setUser(user: any): void;
    user: any;
}
