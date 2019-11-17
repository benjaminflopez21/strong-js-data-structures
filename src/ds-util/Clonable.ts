export default interface Clonable<T>{
    /**
     * Copy the data structure
     */
    clone():T;
    
}