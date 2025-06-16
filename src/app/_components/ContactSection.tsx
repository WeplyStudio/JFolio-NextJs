import { SectionWrapper } from './SectionWrapper';
import { ContactForm } from './ContactForm';
import { siteConfig } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" hasBackgroundPattern>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
        <div className="space-y-6 p-6 bg-card rounded-lg shadow-xl border border-border/50">
            <h3 className="text-2xl font-semibold text-accent mb-4 font-headline">Contact Information</h3>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <Link href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-accent transition-colors">
                        {siteConfig.email}
                    </Link>
                </div>
                {/* Add more contact info if needed e.g. Phone, Location */}
                <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-foreground/80">(123) 456-7890 (Optional)</span>
                </div>
                 <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-foreground/80">[Your City, Country]</span>
                </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border/50">
                 <h4 className="text-lg font-semibold text-accent mb-3">Follow Me</h4>
                 <div className="flex space-x-4">
                    {siteConfig.socials.map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-muted"
                        aria-label={social.name}
                      >
                        <social.icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
            </div>
        </div>
        <div className="p-6 bg-card rounded-lg shadow-xl border border-border/50">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
