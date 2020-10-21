export default IntegrationType;
/**
 * The IntegrationType model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType
 * @version 9.0.1
 */
declare class IntegrationType {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationType} The populated <code>IntegrationType</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
