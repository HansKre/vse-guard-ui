/**
 * Fixes viewport height issue on mobile browsers
 */
const setViewportSize = () => {

    /* usage in CSS:
    max-height: calc(var(--vh, 1vh) * 60);
    height: calc(var(--vh, 1vh) * 60);
    
    For best outcome, must use with on every element:
    Padding and border are included in the width and height calculation of elements
    box-sizing: border-box;
    */

    const setVh = () => {
        // Get actually available viewport
        const vh = window.innerHeight * 0.01
        // const vh = document.body.clientHeight * 0.01;
        // Sets the value to the --vh custom property to the root of the document for later reference from CSS
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVh();

    window.addEventListener('resize', () => {
        setVh();
    });

}

export default setViewportSize;