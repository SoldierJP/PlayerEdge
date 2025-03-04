import React, { useEffect, useState } from "react";
import { SmallCardGroup } from "../components/card";

const Section: React.FC<{
  imageSrc: string;
  title: string;
  text: string;
  reverse?: boolean;
}> = ({ imageSrc, title, text, reverse }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(title);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <div
      id={title}
      className={`d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start my-5 ${
        reverse ? "flex-lg-row-reverse" : ""
      }`}
      style={{
        gap: "40px",
        padding: "40px",
        minHeight: "60vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{ width: "500px", borderRadius: "10px", alignSelf: "center" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
          maxWidth: "600px",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontFamily: "Avenir Next, sans-serif",
            textAlign: "center",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "#ffffff",
            fontFamily: "Avenir Next, sans-serif",
            textAlign: "justify",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const AnimatedSmallCardGroup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("small-card-group");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="small-card-group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        marginTop: "-120px",
      }}
    >
      <SmallCardGroup />
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center my-5">
        <img
          src="/src/assets/MACPNGP.png"
          alt="Mac"
          style={{ width: "700px", borderRadius: "10px" }}
        />
        <h1
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            fontFamily: "Avenir Next, sans-serif",
            marginTop: "60px",
          }}
        >
          Welcome to PLAYEREDGE, <br></br>the new way of becoming a profitable
          online bettor.
        </h1>
        <h3
          style={{
            color: "#ffffff",
            fontFamily: "Avenir Next, sans-serif",
            marginTop: "30px",
          }}
        >
          The world's first automated card counting software is finally here!
        </h3>
        <button
          className="btn btn-success"
          style={{
            fontFamily: "Avenir Next, sans-serif",
            fontWeight: "bold",
            width: "200px",
            marginTop: "30px",
          }}
        >
          Subscriptions
        </button>
      </div>
      <AnimatedSmallCardGroup />
      <Section
        imageSrc="/src/assets/table.png"
        title="Strategy Helper: Never forget key blackjack strategy with our ilustrious 18"
        text="The illustrious 18 can be challenging for the human brain to memorize . That is why our game helper is there for you, highlighting decisions that differ from basic strategy based on the true count . "
      />

      <Section
        imageSrc="/src/assets/gamerul.png"
        title="Game Rules: One step closer to perfection."
        text="Make your counting more accurate with our complex database on the expected return of blackjack hands. Depending on the type of game you play, the expected return of a hand can change drastically."
        reverse
      />

      <Section
        imageSrc="/src/assets/ace.png"
        title="Ace Counter: The new way of seeing card counting. "
        text="Chasing after aces is the key to having an optimal Estimated Return in blackjack. With the help of machine learning, we don’t need to limit ourselves to only a running count anymore . Find out more about the ace counter feature."
      />

      <Section
        imageSrc="/src/assets/andios.png"
        title="Mobile Application"
        text="Coming soon! Our mobile application will be available on both iOS and Android. Stay tuned for more information on the release date."
        reverse
      />
    </div>
  );
};

export default LandingPage;
