// googleDriveUtils.ts

/**
 * Converts a Google Drive share link to a direct image URL.
 * @param {string} shareLink - The share link to the image.
 * @returns {string} - The direct image URL.
 */
function convertShareLinkToDirectUrl(shareLink) {
    const fileId = shareLink.split('/d/')[1].split('/')[0];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

/**
 * Fetches all images from a specified Google Drive folder.
 * @param {Array<string>} shareLinks - An array of share links to the images.
 * @returns {Array<string>} - An array of direct image URLs.
 */
function fetchImagesFromFolder(shareLinks) {
    return shareLinks.map(convertShareLinkToDirectUrl);
}

// Example usage:
// const links = ['https://drive.google.com/file/d/FILE_ID/view?usp=sharing'];
// const directUrls = fetchImagesFromFolder(links);

export { convertShareLinkToDirectUrl, fetchImagesFromFolder };