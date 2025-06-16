
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
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto items-start">
        <div className="space-y-6 p-6 md:p-8 bg-card rounded-xl shadow-xl border border-border/60">
            <h3 className="text-2xl font-semibold text-primary mb-6 font-headline">Contact Information</h3>
            <div className="space-y-5">
                <div className="flex items-start space-x-3 group">
                    <Mail className="h-5 w-5 text-primary/80 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-medium text-foreground">Email</h4>
                        <Link href={`mailto:${siteConfig.email}`} className="text-muted-foreground group-hover:text-primary transition-colors break-all">
                            {siteConfig.email}
                        </Link>
                    </div>
                </div>
                {siteConfig.phone && (
                  <div className="flex items-start space-x-3 group">
                      <Phone className="h-5 w-5 text-primary/80 mt-1 shrink-0" />
                       <div>
                          <h4 className="font-medium text-foreground">Phone</h4>
                          <span className="text-muted-foreground group-hover:text-primary transition-colors">{siteConfig.phone}</span>
                      </div>
                  </div>
                )}
                 <div className="flex items-start space-x-3 group">
                    <MapPin className="h-5 w-5 text-primary/80 mt-1 shrink-0" />
                     <div>
                        <h4 className="font-medium text-foreground">Location</h4>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">{siteConfig.location}</span>
                    </div>
                </div>
            </div>
            {siteConfig.socials && siteConfig.socials.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border/60">
                    <h4 className="text-lg font-semibold text-primary mb-3">Follow Me</h4>
                    <div className="flex flex-wrap gap-3">
                        {siteConfig.socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-muted flex items-center space-x-2 border border-transparent hover:border-primary/30"
                            aria-label={social.name}
                        >
                            <social.icon className="h-5 w-5" />
                            <span className="text-xs hidden sm:inline">{social.name}</span>
                        </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
        <div className="p-6 md:p-8 bg-card rounded-xl shadow-xl border border-border/60">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
