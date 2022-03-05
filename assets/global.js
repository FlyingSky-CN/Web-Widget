/**
 * Web Widget | JavaScript
 */

/**
 * Get Query String by Name
 * 
 * @param {string} name 
 * @param {string} defaultValue 
 * @returns 
 */
function getQueryStringByName(name, defaultValue = '') {
    let regExp = new RegExp("[\?\&]" + name + "=([^\&]+)", "i");
    let regMatch = location.search.match(regExp);
    if (regMatch == null || regMatch.length < 1)
        return defaultValue;
    return decodeURIComponent(regMatch[1]);
}