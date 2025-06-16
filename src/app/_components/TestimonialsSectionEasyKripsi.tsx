import { testimonials } from '@/lib/data';
import type { TestimonialItem } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming Avatar is still available and styled appropriately

export function TestimonialsSectionEasyKripsi() {
  return (
    <section className="bg-white py-16"> {/* Changed py-12 to py-16 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12"> {/* Changed mb-8 to mb-12 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Apa Kata Pengguna Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari 1600+ pengguna sejak 2022 yang telah berhasil menghemat waktu
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto testimonials-container">
          {testimonials.map((testimonial: TestimonialItem, index: number) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12 border-2 border-white shadow">
                  {/* If avatar images are available, use AvatarImage. Otherwise, AvatarFallback. */}
                  {/* <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} /> */}
                  <AvatarFallback className={`${testimonial.avatarBg} text-white font-medium`}>
                    {testimonial.avatarInitial}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-gray-700 italic mb-3">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
