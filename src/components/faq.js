import React, { useState } from "react";
import "./styles/faq.css";
import {AiOutlineArrowDown} from 'react-icons/ai'
function FAQSection() {
  const [showAnswers, setShowAnswers] = useState({}); // for tracking to show ans

  // function for toggle for showing ans
  const toggleAnswer = (index) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // particular index to toggle the visibility
    }));
  };

  const faqData = [
    {
        question: "What types of electric machines do you manufacture?",
        answer: "We manufacture a wide range of electric machines, including motors, generators, alternators, and more. Our products cater to various applications and industries."
      },
      {
        question: "Can you design custom electric machines for specific requirements?",
        answer: "Yes, we specialize in custom electric machine design. Our engineering team will work closely with you to create tailored solutions that meet your unique needs."
      },
      {
        question: "Do you offer installation services for your electric machines?",
        answer: "Absolutely. We provide professional installation and commissioning services to ensure our electric machines are set up and integrated correctly for optimal performance."
      },
      {
        question: "What maintenance and repair services do you offer?",
        answer: "We offer comprehensive maintenance and repair services to keep your electric machines running smoothly. Our technicians can diagnose issues and perform repairs to minimize downtime."
      },
      {
        question: "How can I improve the energy efficiency of my electric machines?",
        answer: "We provide energy efficiency consultation services. Our experts can analyze your systems and provide recommendations to optimize energy efficiency, reducing both costs and environmental impact."
      },
      {
        question: "Do you have emergency support available for urgent issues?",
        answer: "Yes, we offer 24/7 emergency support services. In case of urgent problems with your electric machines, our support team is ready to assist and minimize disruptions."
      },
      {
        question: "What industries do you serve with your electric machines?",
        answer: "Our electric machines are used across a variety of industries, including manufacturing, agriculture, energy production, construction, and more. We can adapt our solutions to meet the specific needs of your industry."
      },
      {
        question: "Are your electric machines environmentally friendly?",
        answer: "We prioritize environmentally friendly practices in our manufacturing processes. We offer energy-efficient solutions and can help you reduce your carbon footprint with our products and services."
      },
      {
        question: "What certifications and standards do your electric machines meet?",
        answer: "Our electric machines meet industry-specific certifications and standards, ensuring they adhere to quality, safety, and performance benchmarks. We can provide details on the specific certifications upon request."
      },
      {
        question: "Can you provide references or case studies of your previous work?",
        answer: "Yes, we have a portfolio of successful projects and satisfied customers. We'd be happy to provide references or case studies that showcase our expertise and the quality of our electric machines."
      },
      {
        question: "What is the typical lead time for manufacturing and delivery?",
        answer: "Lead times can vary based on the complexity and quantity of the order. We'll provide you with an estimated lead time upon discussing your specific requirements, ensuring timely manufacturing and delivery."
      },
      {
        question: "Do you offer training for our staff on operating your electric machines?",
        answer: "Yes, we provide training and support to ensure that your staff is proficient in operating and maintaining our electric machines. We're committed to helping you get the most out of our products."
      },
      {
        question: "What is your warranty and support policy for your electric machines?",
        answer: "We offer warranties on our electric machines, and our support team is available to address any issues during the warranty period. We're dedicated to providing reliable after-sales service to our customers."
      },
      {
        question: "What materials and components are used in your electric machines?",
        answer: "We use high-quality materials and components to ensure the durability and reliability of our electric machines. Our products are built to meet industry standards and perform consistently over time."
      },
      {
        question: "Can you provide service contracts for long-term support?",
        answer: "Yes, we offer maintenance and service contracts for long-term support. These contracts can be tailored to your specific needs and help you ensure the continued performance of your electric machines."
      },
      
     
  ];

  return (
    <>
      <section className="faq1 mt-5">
        <h2 className="text-center head-faq mb-3">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq">
            <ul>
              {faqData.map((item, index) => (
                <li key={index}>
                  <h3 onClick={() => toggleAnswer(index)}>{item.question}<AiOutlineArrowDown className="mx-4"/></h3>
                  {showAnswers[index] && <p>{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="faq-form">
            <h2 className="text-center">Ask a Question</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="contact">Contact:</label>
              <input type="text" id="contact" name="contact" required />
              <label htmlFor="contact">Email:</label>
              <input type="text" id="email" name="email" required />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
              <label htmlFor="query">Your Question:</label>
              <textarea id="query" name="query" required />
              <button
                className="choose-plan-button"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
