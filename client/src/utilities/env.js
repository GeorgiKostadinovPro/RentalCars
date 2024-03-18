const ENV = {
    emailJS: {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      rentTemplateId: import.meta.env.VITE_EMAILJS_RENT_TEMPLATE_ID
    },
    cloudinary: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      carsFolder: 'RentalCars/assets/cars-gallery-pictures',
      postsFolder: 'RentalCars/assets/posts-gallery-pictures'
    }
};

export { ENV }