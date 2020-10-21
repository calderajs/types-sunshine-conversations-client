export default LineAllOf;
/**
 * The LineAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf
 * @version 9.0.1
 */
declare class LineAllOf {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, channelId: any, channelSecret: any): void;
    /**
     * Constructs a <code>LineAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf} The populated <code>LineAllOf</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LineAllOf</code>.
     * For LINE, each of your customers will need to manually configure a webhook in their LINE configuration page that will point to Sunshine Conversations servers. You must instruct your customers how to configure this manually on their LINE bot page. Once you’ve acquired all the required information, call the Create Integration endpoint. Then, using the returned integration _id, your customer must set the Callback URL field in their LINE Business Center page. The URL should look like the following: &#x60;https://app.smooch.io:443/api/line/webhooks/{appId}/{integrationId}&#x60;.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/LineAllOf
     * @param channelId {String} LINE Channel ID.
     * @param channelSecret {String} LINE Channel Secret.
     */
    constructor(channelId: string, channelSecret: string);
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
