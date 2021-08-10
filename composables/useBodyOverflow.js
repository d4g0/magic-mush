/**
 * 
 * @param {String} overflowClass 
 * Returns a show and hide overflow function that puts or 
 * remove the `overflowClass` in the `document.body`
 */
export default function useBobyOverflow(overflowClass = "overflow-hidden") {
    return {
        hideOverflow() {
            document.body.classList.add(overflowClass);
        },
        showOverflow() {
            document.body.classList.remove(overflowClass)
        }
    }
}