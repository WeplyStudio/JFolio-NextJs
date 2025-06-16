
import { config } from 'dotenv';
config();

// Ensure the SEO keyword generator flow is imported for dev-time registration if needed.
import '@/ai/flows/seo-keyword-generator.ts';
import '@/ai/flows/color-grading-suggester.ts';

// If other flows are added in the future, they can be imported here.
