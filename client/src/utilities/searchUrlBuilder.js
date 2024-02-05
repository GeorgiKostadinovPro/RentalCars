export const searchUrlBuilder = (criteria) => {
    const keys = Object.keys(criteria);

    if (keys.length === 0) {
        return;
    }

    let resultUrl = '';

    keys.forEach(key => {
        if (criteria[key] !== '') {
            resultUrl += `${key}="${criteria[key]}",`;
        }
    });

    resultUrl = resultUrl.slice(0, resultUrl.length - 1);

    return resultUrl;
}