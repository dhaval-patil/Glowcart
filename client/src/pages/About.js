import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to GlowCart, your trusted destination for all things beauty!
            At GlowCart, we believe that beauty is for everyone. Our mission is
            to bring you the finest collection of skincare, haircare, makeup,
            and wellness products—all in one place. Whether you're a beauty
            enthusiast or just starting your self-care journey, we've got you
            covered. We curate our collections with quality, authenticity, and
            affordability in mind, partnering with top-rated brands and emerging
            favorites to ensure you always have the best. With a seamless
            shopping experience, fast delivery, and a customer-first approach,
            GlowCart is here to help you glow, inside and out. Because at
            GlowCart, your beauty is our priority.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
