import Image from 'next/image';

export default function CoverPage() {
  return ( 
    <div className="bg-blue-600 text-white flex justify-between items-center px-28 py-5">
      {/* Text Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold">
          Stay Predictor - <span className="font-normal">Know Before They Go.</span>
        </h1>
        <p className="mt-6 text-lg">
          <span className="font-bold">Stay Predictor</span> is a cutting-edge solution designed to anticipate the likelihood of hotel booking cancellations.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-1/3">
        <Image 
          src="/CoverpImg.svg" 
          alt="Hotel Booking Illustration" 
          width={400} 
          height={400} 
          layout="responsive" 
          className="rounded-md" 
        />
      </div>
    </div>
  );
}
