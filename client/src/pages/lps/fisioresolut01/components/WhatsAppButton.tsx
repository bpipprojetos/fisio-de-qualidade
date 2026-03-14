import { MessageCircle } from "lucide-react";

const CTA_LINK = "https://typebot.co/bpip-rafa-fisioresolut";

const WhatsAppButton = () => {
  const url = CTA_LINK;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.336 22.594c-.39 1.098-1.932 2.01-3.162 2.276-.842.18-1.94.324-5.636-1.212-4.73-1.966-7.77-6.762-8.004-7.076-.226-.314-1.892-2.52-1.892-4.806s1.198-3.41 1.622-3.876c.424-.466.926-.582 1.234-.582.308 0 .616.002.886.016.284.014.666-.108.942.718.39 1.064 1.09 3.058 1.186 3.278.096.22.16.476.032.766-.128.29-.192.47-.384.724-.192.254-.404.568-.578.762-.192.22-.392.458-.168.898.224.44.996 1.644 2.14 2.664 1.47 1.312 2.71 1.718 3.094 1.908.384.192.608.16.832-.096.224-.254.96-1.118 1.216-1.504.254-.384.51-.32.858-.192.35.128 2.216 1.046 2.596 1.236.384.192.638.288.734.446.096.16.096.906-.294 2.004z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
