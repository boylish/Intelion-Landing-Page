import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: "Company 1", logo: "https://finolity.com/wp-content/uploads/2023/03/Microsoft_logo_2012.svg" },
  { name: "Company 2", logo: "https://finolity.com/wp-content/uploads/2023/03/dhl-3.svg" },
  { name: "Company 3", logo: "https://finolity.com/wp-content/uploads/2023/03/Scuola_Logo_OnlyTop.svg" },
  { name: "Company 4", logo: "https://finolity.com/wp-content/uploads/2023/03/Sodexo_logo.svg" },
  { name: "Company 5", logo: "https://finolity.com/wp-content/uploads/2023/03/Jolie.svg" },
];

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h2>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 p-4  w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
