export default Profile;
/**
 * The Profile model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Profile
 * @version 9.0.1
 */
declare class Profile {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Profile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} The populated <code>Profile</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The user's given name (first name).
         * @return {String}
         */
    getGivenName(): string;
    /**
     * Sets The user's given name (first name).
     * @param {String} givenName The user's given name (first name).
     */
    setGivenName(givenName: string): void;
    givenName: string;
    /**
         * Returns The user's surname (last name).
         * @return {String}
         */
    getSurname(): string;
    /**
     * Sets The user's surname (last name).
     * @param {String} surname The user's surname (last name).
     */
    setSurname(surname: string): void;
    surname: string;
    /**
         * Returns The user's email address.
         * @return {String}
         */
    getEmail(): string;
    /**
     * Sets The user's email address.
     * @param {String} email The user's email address.
     */
    setEmail(email: string): void;
    email: string;
    /**
         * Returns The user's avatar.
         * @return {String}
         */
    getAvatarUrl(): string;
    /**
     * Sets The user's avatar.
     * @param {String} avatarUrl The user's avatar.
     */
    setAvatarUrl(avatarUrl: string): void;
    avatarUrl: string;
}
