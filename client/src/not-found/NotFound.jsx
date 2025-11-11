export default function NotFound() {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-[#e9edf4]'>
      <div className='py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#2663ec]'>
            404
          </h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900/90 md:text-4xl'>
            Something went wrong
          </p>
          <p className='mb-4 text-lg font-light text-gray-900/60'>
            Oops! The page you're looking for doesn't exist
          </p>
          <a
            href={`${import.meta.env.VITE_APPLICATION_HOSTNAME}`}
            className='inline-flex text-white bg-[#2663ec] hover:bg-[#2663ec]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
          >
            Kembali ke Halaman Utama
          </a>
        </div>
      </div>
    </div>
  );
}
