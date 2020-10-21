export default UserCreateBody;
/**
 * The UserCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody
 * @version 9.0.1
 */
declare class UserCreateBody {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalId: any): void;
    /**
     * Constructs a <code>UserCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody} The populated <code>UserCreateBody</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UserCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserCreateBody
     * @param externalId {String} A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/).
     */
    constructor(externalId: string);
    /**
         * Returns A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/).
         * @return {String}
         */
    getExternalId(): string;
    /**
     * Sets A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/).
     * @param {String} externalId A unique identifier for the user. The `externalId` can be used to link a user to the same conversation [across multiple devices](https://docs.smooch.io/guide/authenticating-users/).
     */
    setExternalId(externalId: string): void;
    externalId: string;
    /**
         * Returns The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
         * @return {String}
         */
    getSignedUpAt(): string;
    /**
     * Sets The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
     * @param {String} signedUpAt The date at which the user signed up. Must be ISO 8601 time format `YYYY-MM-DDThh:mm:ss.sssZ`.
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
