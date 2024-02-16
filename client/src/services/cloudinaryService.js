const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const folder = 'RentalCars/assets/cars-gallery-pictures';

const uploadFiles = async (files) => {
    const uploadPromises = [];

    Array.from(files).forEach((file) => {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('folder', folder);
        formData.append('upload_preset', uploadPreset);

        const uploadPromise = fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            if (response.ok) {
                const data = await response.json();
                const imageUrl = data.secure_url;

                return imageUrl;
            } else {
                console.error('Failed to upload image to Cloudinary:', response.statusText);

                return null;
            }
        })
        .catch((error) => {
            alert('Pictures failed to upload! Please try again or contact admin.');

            return null;
        });

        uploadPromises.push(uploadPromise);
    });

    const uploadUrls = Promise.all(uploadPromises);

    return uploadUrls;
}

export { uploadFiles }