export default Client;
/**
 * The Client model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Client
 * @version 9.0.1
 */
declare class Client {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} The populated <code>Client</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the client.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the client.
     * @param {String} id The unique ID of the client.
     */
    setId(id: string): void;
    id: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType}
         */
    getType(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} type
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client.StatusEnum}
         */
    getStatus(): any;
    /**
     * Sets The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client.StatusEnum} status The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
     */
    setStatus(status: any): void;
    status: any;
    /**
         * Returns The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
     * @param {String} integrationId The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
         * @return {String}
         */
    getExternalId(): string;
    /**
     * Sets The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
     * @param {String} externalId The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
     */
    setExternalId(externalId: string): void;
    externalId: string;
    /**
         * Returns A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
         * @return {String}
         */
    getLastSeen(): string;
    /**
     * Sets A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
     * @param {String} lastSeen A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
     */
    setLastSeen(lastSeen: string): void;
    lastSeen: string;
    /**
         * Returns A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
         * @return {String}
         */
    getLinkedAt(): string;
    /**
     * Sets A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     * @param {String} linkedAt A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     */
    setLinkedAt(linkedAt: string): void;
    linkedAt: string;
    /**
         * Returns The user's display name on the channel.
         * @return {String}
         */
    getDisplayName(): string;
    /**
     * Sets The user's display name on the channel.
     * @param {String} displayName The user's display name on the channel.
     */
    setDisplayName(displayName: string): void;
    displayName: string;
    /**
         * Returns The URL for the user's avatar on the channel.
         * @return {String}
         */
    getAvatarUrl(): string;
    /**
     * Sets The URL for the user's avatar on the channel.
     * @param {String} avatarUrl The URL for the user's avatar on the channel.
     */
    setAvatarUrl(avatarUrl: string): void;
    avatarUrl: string;
    /**
         * Returns A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
         * @return {Object}
         */
    getInfo(): any;
    /**
     * Sets A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     * @param {Object} info A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     */
    setInfo(info: any): void;
    info: any;
    /**
         * Returns An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
         * @return {Object}
         */
    getRaw(): any;
    /**
     * Sets An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     * @param {Object} raw An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     */
    setRaw(raw: any): void;
    raw: any;
}
declare namespace Client {
    namespace StatusEnum {
        const active: string;
        const blocked: string;
        const inactive: string;
        const pending: string;
    }
}
