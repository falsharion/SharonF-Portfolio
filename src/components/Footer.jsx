import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
  } from "react-icons/fi";
  import { IoMdMail } from "react-icons/io";
  import ScrollAnimation from "./ui/scrollanimation";
  
  const socialLinks = [

    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/falsharion",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/sharonfalomo/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "http://linkedin.com/in/sharon-falomo",
    },
  ];
  
  const Footer = () => {
    return (

      <footer className="container mx-auto">
        <div className="pt-20 sm:pt-30 pb-8  mt-20 border-t-2 border-white/40 border-primary-light dark:border-secondary-dark">
              <ScrollAnimation> 
          <div className="font-general-regular text-violet-300 flex flex-col justify-center items-center mb-12 sm:mb-28">
            <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
              Socials
            </p>
            <div className="flex justify-center items-center pb-5"><span className="pr-3"><IoMdMail /></span>falomosharl@gmail.com</div>
            <ul className="flex gap-4 sm:gap-8">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-violet-400 hover:text-violet-950 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              ))}
            </ul>
          </div>
                </ScrollAnimation>
        </div>
      </footer>

    );
  };
  
  export default Footer;