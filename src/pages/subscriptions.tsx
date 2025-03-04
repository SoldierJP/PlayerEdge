import React from "react";
import { Card, Button } from "react-bootstrap";
import "../customnav.css";
import '../styles/subscard.css'

const SubscriptionCard: React.FC<{ title: string; price: string; features: string[] }> = ({ title, price, features }) => {
  return (
    <Card 
      style={{ 
        width: "22rem", 
        height: "28rem", 
        backgroundColor: "#204051", 
        color: "white", 
        borderRadius: "10px", 
        textAlign: "center", 
        display: "flex", 
        justifyContent: "center", 
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      }} 
      className="p-4 m-3 subscription-card"
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "2rem" }}>{title}</Card.Title>
        <Card.Subtitle className="mb-3" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#28a745" }}>
          {price}
        </Card.Subtitle>
        <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.2rem" }}>
          {features.map((feature, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>✔ {feature}</li>
          ))}
        </ul>
        <Button variant="success" className="mt-4" style={{ fontSize: "1.2rem", padding: "10px 20px" }}>Choose Plan</Button>
      </Card.Body>
    </Card>
  );
};

const Subscriptions: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ minHeight: "90vh", padding: "40px", gap: "30px" }}>
      <SubscriptionCard 
        title="Basic Plan" 
        price="$9.99/month" 
        features={["Access to standard features", "Limited support", "Monthly reports"]} 
      />
      <SubscriptionCard 
        title="Pro Plan" 
        price="$19.99/month" 
        features={["All Basic features", "Priority support", "Advanced analytics"]} 
      />
      <SubscriptionCard 
        title="Ultra Plan" 
        price="$29.99/month" 
        features={["All Pro features", "24/7 dedicated support", "Exclusive tools & insights"]} 
      />
    </div>
  );
};

export default Subscriptions;