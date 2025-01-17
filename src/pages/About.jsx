import { assets } from "../assets/assets"

function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-12">
          <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, facilis magni minima consequatur sunt eaque atque provident perferendis, natus, libero alias vero dolorum deleniti doloribus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quos, repellendus laudantium beatae maxime error praesentium sequi accusamus rerum placeat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid quas voluptatibus. Debitis alias tenetur quasi a, neque laboriosam totam consequuntur praesentium modi, vero eum quisquam! Amet magnam ab expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptate nostrum vel sed possimus illo! Consequatur praesentium odit maiores repellendus.</p>
            <b className="text-gray-800">Our Vision</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam velit blanditiis voluptas quisquam, odit asperiores! Ipsa mollitia deserunt alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita magnam, dolorem repellat debitis asperiores in iusto? Nostrum, quae asperiores.</p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>Why <span className="text-gray-700font-semibold">Choose Us</span></p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <di className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamilined appointment scheduling that fits into your busy lifestyle</p>
        </di>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendation and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  )
}

export default About