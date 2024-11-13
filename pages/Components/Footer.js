import Image from 'next/image'
import FooterImg from "../assets/Footer.jpg"

const Footer = () => {
  return (
    <div className="flex justify-between px-12 md:px-14 mt-20">
        <div>
            <Image src={FooterImg} alt="Footer Image" className="h-full rounded-xl mx-8" />
        </div>
        <div className='items-start space-y-8'>
            <h2 className="bold text-5xl justify-center">Do You Have a Question?</h2>
            <p className="max-w-lg text-xl">serving the greater seattle area beyond. For more information on our services, or to inquire about a future project, give us a call</p>
            <div className="flex">
                <div className="space-y-6 font-bold text-xl">
                    <div className="space-y-5">
                        <span className='block mb-3'> 📍 Our address</span>
                        <span>12819 SE 38th st,<br /> Bellevue, WA 98006</span>
                    </div>
                    <div className="space-y-5">
                        <span className='block mb-3'> 📧 E-Mail</span>
                        <span>info@blcremodeling.com</span>
                    </div>
                    <div className="space-y-5">
                        <span className='block mb-3'>📞 Phone</span>
                        <span>(206)-479-9242</span>
                    </div>
                </div>
                <div>
                    <form className="flex-col bg-white p-4 rounded-md shadow-xl mx-6">
                        <input type="text" placeholder='Enter Your Name' className='block bg-gray-100 p-2 my-6 rounded-xl' />
                        <input type="text" placeholder='Enter Your Email' className='block bg-gray-100 p-2 my-6 rounded-xl' />
                        <input type="text" placeholder='Phone Number' className='block bg-gray-100 p-2 my-6 rounded-xl' />
                        <input type="textarea" placeholder='Details' className='block bg-gray-100 p-2 my-6 rounded-xl' />
                        <button className='bg-yellow-500 p-4 rounded-lg w-full'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    //   <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden grid grid-cols-1 md:grid-cols-2">
    //     <div className="h-64 md:h-auto relative">
    //       <img
    //         src="image.png"
    //         alt="Kitchen"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
    //       <h2 className="text-2xl md:text-3xl font-bold">
    //         Do you have a question?
    //       </h2>
    //       <p className="text-gray-700">
    //         Serving the greater Seattle area and beyond. For more information on
    //         our services, or to inquire about a future project, give us a call!
    //       </p>
    //       <div className="space-y-4 text-gray-700 ">
    //         <div className="flex">
    //           <div className="flex-col">
    //           <div className="flex items-center space-x-2">
    //             <span className="text-green-500">📍</span>
    //             <div>
    //               <h3 className="font-semibold">Our address</h3>
    //               <p>12819 SE 38th St, Bellevue, WA 98006</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <span className="text-green-500">📧</span>
    //             <div>
    //               <h3 className="font-semibold">E-mail</h3>
    //               <p>info@blcremodeling.com</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center space-x-2">
    //             <span className="text-green-500">📞</span>
    //             <div>
    //               <h3 className="font-semibold">Phone</h3>
    //               <p>(206)-479-9242</p>
    //             </div>
    //           </div>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
  )
}

export default Footer
