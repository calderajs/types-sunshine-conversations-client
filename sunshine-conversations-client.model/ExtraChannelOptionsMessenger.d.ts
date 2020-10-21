export default ExtraChannelOptionsMessenger;
/**
 * The ExtraChannelOptionsMessenger model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger
 * @version 9.0.1
 */
declare class ExtraChannelOptionsMessenger {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ExtraChannelOptionsMessenger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger} The populated <code>ExtraChannelOptionsMessenger</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
         * @return {Boolean}
         */
    getMessengerExtensions(): boolean;
    /**
     * Sets For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
     * @param {Boolean} messengerExtensions For webview type actions, a boolean value indicating whether the URL should be loaded with Messenger Extensions enabled. [More info](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).
     */
    setMessengerExtensions(messengerExtensions: boolean): void;
    messenger_extensions: boolean;
    /**
         * Returns For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger.WebviewShareButtonEnum}
         */
    getWebviewShareButton(): any;
    /**
     * Sets For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ExtraChannelOptionsMessenger.WebviewShareButtonEnum} webviewShareButton For webview type actions, a string value indicating if the share button should be hidden. [More Info](https://developers.facebook.com/docs/messenger-platform/reference/buttons/url).
     */
    setWebviewShareButton(webviewShareButton: any): void;
    webview_share_button: any;
}
declare namespace ExtraChannelOptionsMessenger {
    namespace WebviewShareButtonEnum {
        const hide: string;
    }
}
