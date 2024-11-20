const AccessKey = process.env.REACT_APP_ACCESS_KEY;

export const clienID = `?client_id=${AccessKey}`
export const randomPhotos = `https://api.unsplash.com/photos${clienID}`;
export const searchPhoto = `https://api.unsplash.com/search/photos${clienID}&page=1&query=`
export const eachPhoto = `https://api.unsplash.com/photos/`


