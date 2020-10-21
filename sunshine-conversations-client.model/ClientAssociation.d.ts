export default ClientAssociation;
/**
 * The ClientAssociation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation
 * @version 9.0.1
 */
declare class ClientAssociation {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ClientAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation} The populated <code>ClientAssociation</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
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
         * Returns The id of the client being referenced.
         * @return {String}
         */
    getClientId(): string;
    /**
     * Sets The id of the client being referenced.
     * @param {String} clientId The id of the client being referenced.
     */
    setClientId(clientId: string): void;
    clientId: string;
}
