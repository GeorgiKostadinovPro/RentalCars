const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const carsFolder = 'RentalCars/assets/cars-gallery-pictures';
const postsFolder = 'RentalCars/assets/posts-gallery-pictures';

const uploadFiles = async (files) => {
    const uploadPromises = [];

    Array.from(files).forEach((file) => {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('folder', carsFolder);
        formData.append('upload_preset', uploadPreset);

        const uploadPromise = fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(`Failed to upload image to Cloudinary: ${response.statusText}`);
            }

            const data = await response.json();
            const imageUrl = data.secure_url;

            return imageUrl;
        })
        .catch((error) => {
            alert('Pictures failed to upload! Please try again or contact admin.');

            throw error;
        });

        uploadPromises.push(uploadPromise);
    });

    const uploadUrls = Promise.all(uploadPromises);

    return uploadUrls;
}

const uploadFile = async (file) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('folder', postsFolder);
    formData.append('upload_preset', uploadPreset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        const url = data.secure_url;

        return { url, publicId: data.public_id };
    } catch (error) {
        alert('Picture failed to upload! Please try again or contact admin.');

        throw error;
    }
}

export { 
    uploadFiles, 
    uploadFile
}