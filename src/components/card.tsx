import React from 'react';

interface SmallCardProps {
imageSrc: string;
title: string;
text: string;
backgroundColor?: string;
textColor?: string;
imageHeight?: string;
imageWidth?: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ imageSrc, title, text, backgroundColor = '#204051', textColor = '#fff', imageHeight = '150px', imageWidth = '100%' }) => {
return (
<div className="card m-2" style={{ width: '18rem', backgroundColor, borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<img src={imageSrc} className="card-img-top" alt={title} style={{ height: imageHeight, width: imageWidth, maxWidth: '100%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
<div className="card-body" style={{ backgroundColor, color: textColor, borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', textAlign: 'center' }}>
<h5 className="card-title" style={{fontWeight:'bold', color: textColor }}>{title}</h5>
<p className="card-text" style={{ color: textColor }}>{text}</p>
</div>
</div>
);
};

const SmallCardGroup: React.FC = () => {
const cardData = [
  { imageSrc: "/src/assets/icons8-machine-learning-24.png", title: "Machine Learning Tech", text: "Thanks to its machine learning technology, Player Edge’s card counting system is the first ever automated card counting software." },
  { imageSrc: "/src/assets/icons8-calculator-32.png", title: "Blackjack EV Calculator", text: "Player Edge gives its users an Estimated Return value of a blackjack hand based on the previous cards that were drawn." },
  { imageSrc: "/src/assets/icons8-open-book-50.png", title: "Basic Strategy Helper", text: "Highlights different decisions that a player should make based on the true count and the “Illustrious 18” theory " },
  { imageSrc: "/src/assets/icons8-up-and-down-arrows-25.png", title: "House Edge → Player Edge", text: "Turn the tables. If used optimally, Player Edge can finally turn up your Win/Loss blackjack graphs green. " },
];

return (
<div className="d-flex justify-content-center align-items-center flex-wrap" style={{ minHeight: '60vh' }}>
{cardData.map((card, index) => (
<SmallCard
key={index}
imageSrc={card.imageSrc}
title={card.title}
text={card.text}
imageHeight="50px"
imageWidth="50px"
/>
))}

</div>
);
};

export { SmallCard, SmallCardGroup };