export default Buy;
/**
 * The Buy model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Buy
 * @version 9.0.1
 */
declare class Buy {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, text: any, amount: any): void;
    /**
     * Constructs a <code>Buy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Buy} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Buy} The populated <code>Buy</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Buy</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Buy
     * @param type {String} The type of action.
     * @param text {String} The button text.
     * @param amount {Number} The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     */
    constructor(type: string, text: string, amount: number);
    /**
         * Returns The type of action.
         * @return {String}
         */
    getType(): string;
    /**
     * Sets The type of action.
     * @param {String} type The type of action.
     */
    setType(type: string): void;
    type: string;
    /**
         * Returns The button text.
         * @return {String}
         */
    getText(): string;
    /**
     * Sets The button text.
     * @param {String} text The button text.
     */
    setText(text: string): void;
    text: string;
    /**
         * Returns The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
         * @return {Number}
         */
    getAmount(): number;
    /**
     * Sets The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     * @param {Number} amount The amount being charged. It needs to be specified in cents and is an integer (9.99$ -> 999).
     */
    setAmount(amount: number): void;
    amount: number;
    /**
         * Returns An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
         * @return {String}
         */
    getCurrency(): string;
    /**
     * Sets An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     * @param {String} currency An ISO 4217 standard currency code in lowercase. Used for actions of type buy.
     */
    setCurrency(currency: string): void;
    currency: string;
    /**
         * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
         * @return {Object}
         */
    getMetadata(): any;
    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size.
     */
    setMetadata(metadata: any): void;
    metadata: any;
}
