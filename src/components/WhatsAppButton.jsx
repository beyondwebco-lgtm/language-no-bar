import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919711552550';
  const message = encodeURIComponent('Hello Language No Bar team, I would like to inquire about your professional translation and language services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Chat on WhatsApp with Language No Bar"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-tooltip">Chat with our Translation Team</span>
    </a>
  );
}

