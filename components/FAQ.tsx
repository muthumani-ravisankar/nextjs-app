"use client"
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    { question: 'What warranty does Apex Motors offer?', answer: 'We provide a 5-year or 100,000 km warranty on all our vehicles.' },
    { question: 'Are electric models available?', answer: 'Yes, Apex Motors offers a range of hybrid and fully electric vehicles.' },
    { question: 'Where can I book a test drive?', answer: 'Book a test drive directly on our website or any authorized dealership.' },
    { question: 'How do I service my car?', answer: 'Service your car at our nationwide certified service centers.' }
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleFAQ = (question:any) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 border rounded-lg shadow">
              <button
                onClick={() => toggleFAQ(faq.question)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                <span>{activeQuestion === faq.question ? '-' : '+'}</span>
              </button>
              {activeQuestion === faq.question && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
