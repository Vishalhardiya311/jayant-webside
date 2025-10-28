import React from "react";



const Banner = () => {
  return (
    <div id="gallery"className="flex flex-col md:flex-row gap-7 mx-5">
      {/* coloum 1 */}
      <div className="w-full md:w-1/3">
        <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden ">
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423956/WhatsApp_Image_2025-10-14_at_12.03.54_PM_ltrih4.jpg"
            alt="Image"
            className=" transform transition-transform duration-500 group-hover:scale-101"
          />
          <div className="absolute group-hover:bg-[#00000050] inset-0  transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> Album Pictures</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>
        <div className="my-6 relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420717/WhatsApp_Image_2025-10-26_at_12.56.40_AM_1_kgqly9.jpg"
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101 "
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl">Pre-Wedding Shoot </p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>
        {/* <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://preview.colorlib.com/theme/photosen/images/img_7.jpg"
            alt="Image"
            className="tr
            ansform transition-transform duration-500 group-hover:scale-101 "
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> Travel</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div> */}
      </div>

      {/* coloum 2 */}
      <div className="w-full md:w-1/3">
        <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423918/WhatsApp_Image_2025-10-14_at_12.03.55_PM_yuq2l5.jpg"
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101 "
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> Wedding Shoots</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>
        <div className="my-6 relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420695/WhatsApp_Image_2025-10-26_at_12.56.39_AM_xkbhom.jpg"
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101 "
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> Bride Shoot</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>
        {/* <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://preview.colorlib.com/theme/photosen/images/img_3.jpg"
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101"
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> People</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div> */}
      </div>

      {/* coloum 3 */}
      <div className="w-full md:w-1/3">
        <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1760423955/WhatsApp_Image_2025-10-14_at_12.03.54_PM_1_tsug1s.jpg"
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101"
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000050] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> Posts</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>
        <div className="my-6 relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhze9zwfx/image/upload/v1761420717/WhatsApp_Image_2025-10-26_at_12.56.39_AM_1_sdgizl.jpg"
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101 "
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000060] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl">Modeling</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>
         {/* <div className="relative group transition duration-500 transform filter grayscale hover:grayscale-0 overflow-hidden">
          <img
            src=""
            alt="Image"
            className="transform transition-transform duration-500 group-hover:scale-101 "
          />
          <div className="absolute  inset-0 group-hover:bg-[#00000060] transition text-white flex justify-center items-center flex-col gap-5">
            <p className=" text-4xl"> Architecture</p>
            <button className=" text-xs px-4 py-2  hover:bg-white hover:text-black border-white border-2 ">
              MORE PHOTOS
            </button>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default Banner;
