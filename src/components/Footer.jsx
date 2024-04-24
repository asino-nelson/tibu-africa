import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="lg:px-24 shadow-2xl px-7">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-12 min-h-[40vh]">

        
        <img src="./images/logo.png" className="w-4/5" alt="logo" />

        <div className="col-span-3 grid grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col">
            <p className="font-semibold mb-2">Services</p>
            <div className="h-[0.5px] rounded-full w-8 bg-black"></div>
            <div className="flex flex-col gap-y-3 py-6">
              <a href="#">Treatments</a>
              <a href="#">For Business</a>
              <a href="#">Laboratory tests</a>
              <a href="#">Vaccation</a>
            </div>
              
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-2">Quick links</p>
            <div className="h-[0.5px] rounded-full w-8 bg-black"></div>
            
            <div className="flex flex-col gap-y-3 py-6">
            <a href="#">Membership</a>
            <a href="#">Our Clinics</a>
            </div>
            
            
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-2">About Us</p>
            <div className="h-[0.5px] rounded-full w-8 bg-black"></div>
            
            <div className="flex flex-col gap-y-3 py-6">
            <a href="#">Our Core Values</a>
            <a href="#">The team</a>
            <a href="#">Careers</a>
            </div>
            
            
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-2">Find Us</p>
            <div className="h-[0.5px] rounded-full w-8 bg-black"></div>
            
            <div className="flex flex-col gap-y-3 py-6">
            <p>Magharibi Place</p>
              <p>Nairobi Kenya</p>
              <a href="#">support@mmd.africa</a>
              <a href="#">+254 111 151 200</a>
            </div>
              
            
          </div>

          <div className="flex flex-col">
            <p className="font-semibold mb-2">Connect with us</p>
            <div className="h-[0.5px] rounded-full w-8 bg-black"></div>
            
            <div className="flex flex-col gap-y-3 py-6">
              <div className="flex items-center gap-6 pb-12">
                <FaFacebookSquare />
                <FaSquareXTwitter />
                <FaLinkedin />
                <FaInstagram/>
              </div>
              <img src="./images/image3.png" className="w-32" alt="playstore"/>
              <img src="./images/image4.png" className="w-32" alt="applestore"/>
            </div>
              
            
          </div>
        </div>

      </div>

      <div className="border-t py-6 flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 text-sm lg:text-base font-normal">
          <div>Made in Africa</div>
          <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:flex-row flex-row-reverse justify-between">
            <span>
              2024 Tibu Health
            </span>
            <span className="cursor-pointer">Cookie Preferences</span>
            <a href="#">Deleting your account</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

    </div>

  )
}

export default Footer
