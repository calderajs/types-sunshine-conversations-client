export default Whatsapp;
/**
 * The Whatsapp model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp
 * @version 9.0.1
 */
declare class Whatsapp {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, deploymentId: any): void;
    /**
     * Constructs a <code>Whatsapp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp} The populated <code>Whatsapp</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Whatsapp</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Whatsapp
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsappAllOf
     * @param type {String} The type of integration.
     * @param deploymentId {String} The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     */
    constructor(type: string, deploymentId: string);
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
         * Returns The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
         * @return {String}
         */
    getDeploymentId(): string;
    /**
     * Sets The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     * @param {String} deploymentId The Id of the deployment. The integrationId and the appId will be added to the deployment. Additionally, the deployment’s status will be set to integrated.
     */
    setDeploymentId(deploymentId: string): void;
    deploymentId: string;
    /**
         * Returns Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
         * @return {String}
         */
    getHsmFallbackLanguage(): string;
    /**
     * Sets Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @param {String} hsmFallbackLanguage Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     */
    setHsmFallbackLanguage(hsmFallbackLanguage: string): void;
    hsmFallbackLanguage: string;
    /**
         * Returns The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
         * @return {String}
         */
    getAccountId(): string;
    /**
     * Sets The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @param {String} accountId The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     */
    setAccountId(accountId: string): void;
    accountId: string;
    /**
         * Returns An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
         * @return {String}
         */
    getAccountManagementAccessToken(): string;
    /**
     * Sets An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @param {String} accountManagementAccessToken An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     */
    setAccountManagementAccessToken(accountManagementAccessToken: string): void;
    accountManagementAccessToken: string;
}
