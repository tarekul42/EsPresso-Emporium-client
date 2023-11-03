import { Link } from 'react-router-dom';
import CommonTitl2 from '../CommonTitles/CommonTitle2/CommonTitl2';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='grid md:grid-cols-2 md:grid-rows-2 items-center w-11/12 md:w-5/6 mx-auto gap-y-5 2xl:gap-x-32 pt-5'>
                    <div className='p-1 md:p-3 lg:p-4 xl:p-14'>
                        <img className='pb-4 h-14 md:h-20' src="./public/images/more/logo1.png" alt="Espresso Emporium logo" />
                        <CommonTitl2>Espresso Emporium</CommonTitl2>
                        <p className='about-products-description text-base'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>
                    <div className='row-span-2 p-1 md:p-3 lg:p-4 xl:p-14'>
                        <CommonTitl2>Connect with Us</CommonTitl2>
                        <div>
                            <input type="text" placeholder="Name" name='name' className="input w-full bg-white block" required />
                            <input type="email" placeholder="Email" name='email' className="input w-full bg-white my-2 lg:my-6" required />
                            <textarea className="textarea w-full bg-white textarea-lg mb-2 lg:mb-6" name='textarea' placeholder="Message" required></textarea>
                            <input type="submit" className='text-lg lg:text-2xl cursor-pointer rounded-3xl footer-send-message-button border lg:border-2 btn btn-outline w-36 lg:w-48 xl:w-56' value="Send Message" />

                        </div>
                    </div>
                    <div className='p-1 md:p-3 lg:p-4 xl:p-14'>
                        <div className='flex text-[#331A15] pb-2 md:pb-3 lg:pb-4'>
                            <Link target='_blank' to='https://www.facebook.com/'><FaFacebook className='h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10' /></Link>
                            <Link target='_blank' to='https://twitter.com/'><FaTwitter className='h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 mx-2 md:mx-3 lg:mx-4 xl:mx-5' /></Link>
                            <Link target='_blank' to='https://www.instagram.com/'><FaInstagram className='h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10' /></Link>
                            <Link target='_blank' to='https://www.linkedin.com/'><FaLinkedin className='h-6 w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-10 xl:w-10 ms-2 md:ms-3 lg:ms-4 xl:ms-5' /></Link>
                        </div>
                        <CommonTitl2>Get in Touch</CommonTitl2>
                        <p className='about-products-description text-base inline-flex gap-2 items-center'> <FaPhoneAlt /> +88 01533 333 333</p>
                        <br />
                        <p className='about-products-description text-base inline-flex gap-2 items-center py-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            info@gmail.com</p>

                        <br />

                        <p className='about-products-description text-base inline-flex gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>

                            72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
            </div>
            <div className='footer-navigation h-9 md:h-10 lg:h-14 text-base md:text-xl lg:text-2xl flex justify-center items-center'>
                Copyright Espresso Emporium ! All Rights Reserved
            </div>
        </>
    );
};

export default Footer;