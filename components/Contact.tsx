
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Thank you for your message!');
        const form = e.target as HTMLFormElement;
        form.reset();
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-lg text-slate-400 mb-8">
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as I can!
                </p>
                <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
