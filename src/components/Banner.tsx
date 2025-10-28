import React from "react";
import { Helmet } from "react-helmet";

const Banner = () => {
  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>
          Gallery | Jayant Studio | Wedding, Pre-Wedding & Model Shoots
        </title>
        <meta
          name="description"
          content="Explore the Jayant Studio gallery featuring cinematic wedding, pre-wedding, bride, and model photoshoots. Capturing your emotions in stunning frames."
        />
        <meta
          name="keywords"
          content="Jayant Studio, wedding gallery, pre-wedding shoot, bridal shoot, model photography, wedding photos, professional photography, cinematic photography"
        />
        <meta name="author" content="Jayant Studio" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Jayant Studio Gallery | Cinematic Wedding & Model Shoots"
        />
        <meta
          property="og:description"
          content="View Jayant Studio's stunning photography — weddings, pre-weddings, and model shoots that tell your story beautifully."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420717/WhatsApp_Image_2025-10-26_at_12.56.39_AM_1_sdgizl.jpg"
        />
        <meta
          property="og:url"
          content="https://jayantstudio.vercel.app/gallery"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jayant Studio Gallery | Cinematic Wedding Photography"
        />
        <meta
          name="twitter:description"
          content="Wedding, Pre-Wedding, and Model Photoshoots by Jayant Studio — where emotions meet art."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423956/WhatsApp_Image_2025-10-14_at_12.03.54_PM_ltrih4.jpg"
        />
      </Helmet>

      {/* 🔹 Banner / Gallery Section */}
      <div
        id="gallery"
        className="flex flex-col md:flex-row gap-7 mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-10"
      >
        {/* Column 1 */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423956/WhatsApp_Image_2025-10-14_at_12.03.54_PM_ltrih4.jpg"
              alt="Album Pictures"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute group-hover:bg-[#00000050] inset-0 transition text-white flex justify-center items-center flex-col gap-3 sm:gap-5 text-center px-3">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Album Pictures
              </p>
              <button className="text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black border-white border-2">
                MORE PHOTOS
              </button>
            </div>
          </div>

          <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420717/WhatsApp_Image_2025-10-26_at_12.56.40_AM_1_kgqly9.jpg"
              alt="Pre-Wedding Shoot"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-3 sm:gap-5 text-center px-3">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Pre-Wedding Shoot
              </p>
              <button className="text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black border-white border-2">
                MORE PHOTOS
              </button>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423918/WhatsApp_Image_2025-10-14_at_12.03.55_PM_yuq2l5.jpg"
              alt="Wedding Shoots"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-3 sm:gap-5 text-center px-3">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Wedding Shoots
              </p>
              <button className="text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black border-white border-2">
                MORE PHOTOS
              </button>
            </div>
          </div>

          <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420695/WhatsApp_Image_2025-10-26_at_12.56.39_AM_xkbhom.jpg"
              alt="Bride Shoot"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-3 sm:gap-5 text-center px-3">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Bride Shoot
              </p>
              <button className="text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black border-white border-2">
                MORE PHOTOS
              </button>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423955/WhatsApp_Image_2025-10-14_at_12.03.54_PM_1_tsug1s.jpg"
              alt="Posts"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-3 sm:gap-5 text-center px-3">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Posts
              </p>
              <button className="text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black border-white border-2">
                MORE PHOTOS
              </button>
            </div>
          </div>

          <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420717/WhatsApp_Image_2025-10-26_at_12.56.39_AM_1_sdgizl.jpg"
              alt="Modeling"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 group-hover:bg-[#00000060] transition text-white flex justify-center items-center flex-col gap-3 sm:gap-5 text-center px-3">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Modeling
              </p>
              <button className="text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black border-white border-2">
                MORE PHOTOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
