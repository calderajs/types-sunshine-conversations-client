export default ParticipantWithUserId;
/**
 * The ParticipantWithUserId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId
 * @version 9.0.1
 */
declare class ParticipantWithUserId {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ParticipantWithUserId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantWithUserId} The populated <code>ParticipantWithUserId</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
         * @return {String}
         */
    getUserId(): string;
    /**
     * Sets The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     * @param {String} userId The id of the user that will be participating in the conversation. It will return `404` if the user can’t be found. One of `userId` or `userExternalId` is required, but not both.
     */
    setUserId(userId: string): void;
    userId: string;
    /**
         * Returns When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
         * @return {Boolean}
         */
    getSubscribeSDKClient(): boolean;
    /**
     * Sets When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     * @param {Boolean} subscribeSDKClient When passed as true, the SDK client of the concerned participant will be subscribed to the conversation. The user will start receiving push notifications for this conversation right away, without having to view the conversation on the SDK beforehand. An SDK client will be created for users that don’t already have one. This field is required if the conversation is of type `sdkGroup`.
     */
    setSubscribeSDKClient(subscribeSDKClient: boolean): void;
    subscribeSDKClient: boolean;
}
