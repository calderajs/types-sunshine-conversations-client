export default Device;
/**
 * The Device model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Device
 * @version 9.0.1
 */
declare class Device {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device} The populated <code>Device</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the device.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the device.
     * @param {String} id The unique ID of the device.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns The type of integration that the device represents.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.TypeEnum}
         */
    getType(): any;
    /**
     * Sets The type of integration that the device represents.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.TypeEnum} type The type of integration that the device represents.
     */
    setType(type: any): void;
    type: any;
    /**
         * Returns A unique identifier for the device, generated client-side by the SDK.
         * @return {String}
         */
    getGuid(): string;
    /**
     * Sets A unique identifier for the device, generated client-side by the SDK.
     * @param {String} guid A unique identifier for the device, generated client-side by the SDK.
     */
    setGuid(guid: string): void;
    guid: string;
    /**
         * Returns The id of the client to which this device is associated.
         * @return {String}
         */
    getClientId(): string;
    /**
     * Sets The id of the client to which this device is associated.
     * @param {String} clientId The id of the client to which this device is associated.
     */
    setClientId(clientId: string): void;
    clientId: string;
    /**
         * Returns The device status. Indicates if the device will receive push notifications or not.
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.StatusEnum}
         */
    getStatus(): any;
    /**
     * Sets The device status. Indicates if the device will receive push notifications or not.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Device.StatusEnum} status The device status. Indicates if the device will receive push notifications or not.
     */
    setStatus(status: any): void;
    status: any;
    /**
         * Returns The ID of the integration that the device was created for.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets The ID of the integration that the device was created for.
     * @param {String} integrationId The ID of the integration that the device was created for.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
         * @return {String}
         */
    getLastSeen(): string;
    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
     * @param {String} lastSeen A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the last time the user interacted with this device.
     */
    setLastSeen(lastSeen: string): void;
    lastSeen: string;
    /**
         * Returns The token used for push notifications on Android and iOS devices.
         * @return {String}
         */
    getPushNotificationToken(): string;
    /**
     * Sets The token used for push notifications on Android and iOS devices.
     * @param {String} pushNotificationToken The token used for push notifications on Android and iOS devices.
     */
    setPushNotificationToken(pushNotificationToken: string): void;
    pushNotificationToken: string;
    /**
         * Returns A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
         * @return {Object}
         */
    getInfo(): any;
    /**
     * Sets A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
     * @param {Object} info A flat curated object with properties that vary for each SDK platform. All keys are optional and not guaranteed to be available.
     */
    setInfo(info: any): void;
    info: any;
    /**
         * Returns Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
         * @return {String}
         */
    getAppVersion(): string;
    /**
     * Sets Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
     * @param {String} appVersion Version of the mobile app in which the SDK is embedded. Not applicable for devices of type web.
     */
    setAppVersion(appVersion: string): void;
    appVersion: string;
}
declare namespace Device {
    namespace TypeEnum {
        const android: string;
        const ios: string;
        const web: string;
    }
    namespace StatusEnum {
        const active: string;
        const inactive: string;
    }
}
