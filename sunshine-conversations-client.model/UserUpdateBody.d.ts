export default UserUpdateBody;
/**
 * The UserUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody
 * @version 9.0.1
 */
declare class UserUpdateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UserUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} The populated <code>UserUpdateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {String}
         */
    getSignedUpAt(): string;
    /**
     * @param {String} signedUpAt
     */
    setSignedUpAt(signedUpAt: string): void;
    signedUpAt: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile}
         */
    getProfile(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
     */
    setProfile(profile: any): void;
    profile: any;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     */
    setMetadata(metadata: any): void;
    metadata: any;
}
