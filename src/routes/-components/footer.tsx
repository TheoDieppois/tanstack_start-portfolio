import gsap from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const MagneticButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(button, {
        x: x * 0.8,
        y: y * 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "bounce.out",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-sarcele-300 hover:text-sarcele-400 relative rounded-full p-3 transition-colors"
    >
      <div className="bg-sarcele-300/10 absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100" />
      {children}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="border-sarcele-300 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <MagneticButton href="https://github.com/TheoDieppois">
              <Github size={24} />
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/theo-dieppois/">
              <Linkedin size={24} />
            </MagneticButton>
            <MagneticButton href="mailto:pro.theodieppois@gmail.com">
              <Mail size={24} />
            </MagneticButton>
          </div>
          <p className="text-sarcele-300 font-acorn text-center text-sm">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
