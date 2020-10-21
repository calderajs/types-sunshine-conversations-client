export default Line;
/**
 * The Line model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Line
 * @version 9.0.1
 */
declare class Line {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, channelId: any, channelSecret: any): void;
    /**
     * Constructs a <code>Line</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Line} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Line} The populated <code>Line</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Line</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Line
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf
     * @param type {String} The type of integration.
     * @param channelId {String} LINE Channel ID.
     * @param channelSecret {String} LINE Channel Secret.
     */
    constructor(type: string, channelId: string, channelSecret: string);
    /**
         * Returns The type of integration.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of integration.
     * @param {String} type The type of integration.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns LINE Channel ID.
         * @return {String}
         */
    getChannelId(): string;
    /**
     * Sets LINE Channel ID.
     * @param {String} channelId LINE Channel ID.
     */
    setChannelId(channelId: string): void;
    channelId: string;
    /**
         * Returns LINE Channel Secret.
         * @return {String}
         */
    getChannelSecret(): string;
    /**
     * Sets LINE Channel Secret.
     * @param {String} channelSecret LINE Channel Secret.
     */
    setChannelSecret(channelSecret: string): void;
    channelSecret: string;
    /**
         * Returns LINE Channel Access Token.
         * @return {String}
         */
    getChannelAccessToken(): string;
    /**
     * Sets LINE Channel Access Token.
     * @param {String} channelAccessToken LINE Channel Access Token.
     */
    setChannelAccessToken(channelAccessToken: string): void;
    channelAccessToken: string;
    /**
         * Returns LINE Service Code.
         * @return {String}
         */
    getServiceCode(): string;
    /**
     * Sets LINE Service Code.
     * @param {String} serviceCode LINE Service Code.
     */
    setServiceCode(serviceCode: string): void;
    serviceCode: string;
    /**
         * Returns LINE Switcher Secret.
         * @return {String}
         */
    getSwitcherSecret(): string;
    /**
     * Sets LINE Switcher Secret.
     * @param {String} switcherSecret LINE Switcher Secret.
     */
    setSwitcherSecret(switcherSecret: string): void;
    switcherSecret: string;
    /**
         * Returns URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
         * @return {String}
         */
    getQrCodeUrl(): string;
    /**
     * Sets URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
     * @param {String} qrCodeUrl URL provided by LINE in the [Developer Console](https://developers.line.biz/console/).
     */
    setQrCodeUrl(qrCodeUrl: string): void;
    qrCodeUrl: string;
    /**
         * Returns LINE Basic ID. Is automatically set when qrCodeUrl is updated.
         * @return {String}
         */
    getLineId(): string;
    /**
     * Sets LINE Basic ID. Is automatically set when qrCodeUrl is updated.
     * @param {String} lineId LINE Basic ID. Is automatically set when qrCodeUrl is updated.
     */
    setLineId(lineId: string): void;
    lineId: string;
}
