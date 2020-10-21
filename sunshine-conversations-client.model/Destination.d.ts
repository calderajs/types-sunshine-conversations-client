export default Destination;
/**
 * The Destination model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Destination
 * @version 9.0.1
 */
declare class Destination {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} The populated <code>Destination</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation.
         * @return {String}
         */
    getIntegrationId(): string;
    /**
     * Sets The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation.
     * @param {String} integrationId The id of the integration to deliver the message to. Will return an error if the integration does not exist or if the user does not have a client for the integration attached to the conversation.
     */
    setIntegrationId(integrationId: string): void;
    integrationId: string;
    /**
         * Returns The type of the integration to deliver the message to. Will return an error if the user does not have a client of that type attached to the conversation.
         * @return {String}
         */
    getIntegrationType(): string;
    /**
     * Sets The type of the integration to deliver the message to. Will return an error if the user does not have a client of that type attached to the conversation.
     * @param {String} integrationType The type of the integration to deliver the message to. Will return an error if the user does not have a client of that type attached to the conversation.
     */
    setIntegrationType(integrationType: string): void;
    integrationType: string;
}
