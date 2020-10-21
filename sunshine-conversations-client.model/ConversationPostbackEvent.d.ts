export default ConversationPostbackEvent;
/**
 * The ConversationPostbackEvent model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEvent
 * @version 9.0.1
 */
declare class ConversationPostbackEvent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ConversationPostbackEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEvent} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEvent} The populated <code>ConversationPostbackEvent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
         * Returns The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
         * @return {String}
         */
    getId(): string;
    /**
     * Sets The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
     * @param {String} id The unique ID of the event. May be used to ensure that an event is not processed twice in the case of a webhook that is re-tried due to an error or timeout.
     */
    setId(id: string): void;
    id: string;
    /**
         * Returns The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
     * @param {String} type The type of the event. Will match one of the subscribed triggers for your [webhook](#operation/createWebhook).
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
         * @return {String}
         */
    getCreatedAt(): string;
    /**
     * Sets A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     * @param {String} createdAt A timestamp signifying when the event was generated. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     */
    setCreatedAt(createdAt: string): void;
    createdAt: string;
    /**
         * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload}
         */
    getPayload(): any;
    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} payload
     */
    setPayload(payload: any): void;
    payload: any;
}
