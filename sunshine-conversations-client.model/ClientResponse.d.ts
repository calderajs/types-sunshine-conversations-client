export default ClientResponse;
/**
 * The ClientResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse
 * @version 9.0.1
 */
declare class ClientResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ClientResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse} The populated <code>ClientResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
         */
    getClient(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} client
     */
    setClient(client: any): void;
    client: any;
}
