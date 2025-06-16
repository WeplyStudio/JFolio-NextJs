import { Zap, Clock, ThumbsUp } from 'lucide-react';
import { advantages } from '@/lib/data';
import type { AdvantageItem } from '@/lib/types';

const iconMap = {
  Zap: Zap,
  Clock: Clock,
  ThumbsUp: ThumbsUp,
};

export function AdvantagesSection() {
  return (
    <section id="features" className="bg-gray-50 py-16"> {/* Changed py-12 to py-16 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12"> {/* Changed mb-8 to mb-12 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Keunggulan Easy.kripsi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Format skripsi dalam hitungan detik, bukan berjam-jam
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage: AdvantageItem, index: number) => {
            const IconComponent = iconMap[advantage.iconName];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />} {/* Increased icon size slightly */}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900"> {/* Increased font size */}
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p> {/* Ensured text-sm */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
