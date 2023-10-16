import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
    const [expandedFAQs, setExpandedFAQs] = useState([]);

    const faqs = [
        {
            question: 'What is DIY Home Improvement Hub?',
            answer: 'DIY Home Improvement Hub is your go-to destination for all things related to do-it-yourself home improvement projects. We provide resources, tutorials, and a community for homeowners and DIY enthusiasts to enhance their living spaces creatively.',
        },
        {
            question: 'How can I get involved in the DIY community?',
            answer: 'To get involved in the DIY community, simply sign up for an account on DIY Home Improvement Hub. You can then participate in discussions, share your projects, and connect with fellow DIYers.',
        },
        {
            question: 'Are there tutorials available?',
            answer: 'Yes, we offer a wide range of tutorials on various DIY projects. You can explore our tutorials section to find step-by-step guides and inspiration for your next home improvement project.',
        },
        {
            question: 'Can I purchase DIY tools and materials through the website?',
            answer: 'While we provide information and inspiration for DIY projects, we do not sell tools or materials directly on the website. However, we may have affiliate links to recommended products for your convenience.',
        },
        {
            question: 'How do I report inappropriate content or users?',
            answer: 'If you come across any inappropriate content or users on our platform, please use the "Report" feature to notify our moderation team. We are committed to maintaining a positive and safe community environment.',
        },
        {
            question: 'Is DIY Home Improvement Hub accessible on mobile devices?',
            answer: 'Yes, DIY Home Improvement Hub is accessible on both desktop and mobile devices. You can access our website and community from your smartphone or tablet.',
        },
    ];
    const toggleFAQ = (index) => {
        if (expandedFAQs.includes(index)) {
            setExpandedFAQs(expandedFAQs.filter((item) => item !== index));
        } else {
            setExpandedFAQs([...expandedFAQs, index]);
        }
    };

    return (
        <div className='ran'>
            <div className='rectangle88'>
                <div className='kab'>
                    <h1>FAQ</h1>
                </div>

                <div className="faq-container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div className="faq-item" key={index}>
                                <div
                                    className={`faq-question ${expandedFAQs.includes(index) ? 'expanded' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                </div>
                                {expandedFAQs.includes(index) && <div className="faq-answer">{faq.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
