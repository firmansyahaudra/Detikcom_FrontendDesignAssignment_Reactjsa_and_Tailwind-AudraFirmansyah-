import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";

const Footer = (props) => {
  const facebookLink = "https://www.facebook.com/detikcom";
  const twitterLink = "https://twitter.com/detikcom";
  const instagramLink = "https://www.instagram.com/detikcom/";
  const linkedinLink = "https://www.linkedin.com/company/detik-com/";
  const youtubeLink = "https://www.youtube.com/detikcom";

  const handleSocialMedia = (socialMediaLink) => () => {
    window.open(socialMediaLink);
  };

    return (
        <>
         <div className="flex flex-col w-full ">
        <div className="flex-grow"></div>
        <div className="w-full h-80 bg-green-500 justify-end">
          <div className="flex flex-col justify-start items-center">
          <div className="w-11/12 h-44 flex-row">
            <div className="w-80 h-44 bg-purple-500 flex flex-col">
              
            </div>
          </div>
          <div className="w-11/12 h-20 flex text-white text-sm">
            <div className="w-3/4 h-20 flex flex-col">
              <p className="ml-0">Event olahraga lari sejauh 10 kilometeer yang diselenggarakan oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak <br />
                keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan <br /> total puluhan juta rupiah
              </p>
            </div>
            <div className="w-1/4 h-20 flex flex-col items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '16px'}} className="">Connect with us</span>
                <div className="w-4/5 h-3/5 flex flex-row items-center justify-center">
                  <a href={facebookLink} rel="noopener noreferrer" onClick={handleSocialMedia(facebookLink)}>
                  <img className="w-8 h-8 mr-1" src={facebook} alt="Facebook" />
                  </a>
                  <a href={twitterLink} rel="noopener noreferrer" onClick={handleSocialMedia(twitterLink)}>
                  <img className="w-8 h-8 mr-1" src={twitter} alt="Twitter" />
                  </a>
                  <a href={instagramLink} rel="noopener noreferrer" onClick={handleSocialMedia(instagramLink)}>
                  <img className="w-8 h-8 mr-1" src={instagram} alt="Instagram" />
                  </a>
                  <a href={linkedinLink} rel="noopener noreferrer" onClick={handleSocialMedia(linkedinLink)}>
                  <img className="w-8 h-8 mr-1" src={linkedin} alt="Linkedin" />
                  </a>
                  <a href={youtubeLink} rel="noopener noreferrer" onClick={handleSocialMedia(youtubeLink)}>
                  <img className="w-8 h-8" src={youtube} alt="Youtube" />
                  </a>
                </div>
            </div>
          </div>
          <div className="w-11/12 h-px bg-white"></div>
          <div className="w-11/12 h-12 mt-3 text-sm text-white">
            <span>Copyright @ 2023 detikcom. All right reserved</span>
          </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Footer;