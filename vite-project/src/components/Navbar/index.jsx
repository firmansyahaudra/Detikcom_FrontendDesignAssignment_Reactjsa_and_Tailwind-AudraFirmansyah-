import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center"> 
        <div className="mt-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-md w-5/6 h-16 rounded-full flex">
          <div className="w-1/4 ml-0 flex flex-row items-center rounded-full">
              <h1 className="text-center text-3xl text-blue-500 ml-9">
                detik
                <span className="bg-gradient-to-r from-green-700 to-green-400 text-transparent bg-clip-text">health</span>
                </h1>
          </div>
          <div className="w-3/4 rounded-full flex">
            <div className="w-1/4 rounded-full flex items-center">
              <button style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px'}} className="w-2/4 h-3/5 rounded-full ml-10 text-black transition duration-300 hover:border-white hover:border-2 hover:bg-gray-200 hover:bg-opacity-50">
                Home
              </button>
            </div>
            <div className="w-1/4 rounded-full flex items-center">
            <button style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px'}} className="w-4/5 h-3/5 rounded-full ml-5 text-black transition duration-300 hover:border-white hover:border-2 hover:bg-gray-200 hover:bg-opacity-50">
                Tentang Acara
              </button>
            </div>
            <div className="w-1/4 rounded-full flex items-center text-sm font-medium">
            <button style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px'}} className="w-2/4 h-3/5 rounded-full ml-10 text-black transition duration-300 hover:border-white hover:border-2 hover:bg-gray-200 hover:bg-opacity-50">
                Galeri
              </button>
            </div>
            <div className="w-1/4 rounded-full flex items-center text-sm font-medium">
            <button style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px'}} className="w-2/4 h-3/5 rounded-full ml-10 text-black transition duration-300 hover:border-white hover:border-2 hover:bg-gray-200 hover:bg-opacity-50">
                Berita
              </button>
            </div>
            <div className="w-1/4 rounded-full flex items-center text-sm font-medium">
            <button style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '16px'}} className="w-3/5 h-3/5 bg-black rounded-full ml-8 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500">
                Registrasi
              </button>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
};

export default Navbar;
