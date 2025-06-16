"use client";

import Link from 'next/link';
import { Check, X } from 'lucide-react'; // Assuming X for not included
import { featureComparison, basicPlanFeatures, advancePlanFeatures } from '@/lib/data';

export function CompareFeaturesSection() {
  return (
    <div id="compare"> {/* id="product" from nav might also point here or a dedicated product showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perbandingan fitur masing-masing paket
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih paket anda dapatkan akses ke alat otomatis untuk memformat skripsi anda dengan cepat
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white mb-16 max-w-4xl mx-auto">
            <table id="featureTable" className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 md:p-5 text-left border-b-2 border-gray-200 bg-gray-50 font-bold text-gray-800 text-sm md:text-base">
                    Fitur
                  </th>
                  <th className="p-4 md:p-5 text-center border-b-2 border-gray-200 bg-gray-50 font-bold text-gray-800 w-1/4 text-sm md:text-base">
                    Basic
                  </th>
                  <th className="p-4 md:p-5 text-center border-b-2 border-blue-200 bg-blue-50 font-bold text-blue-800 w-1/4 text-sm md:text-base">
                    Advance
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="p-3 md:p-4 text-gray-700 text-xs md:text-sm border-b border-gray-100">
                      {item.feature}
                      {item.description && <p className="text-xs text-gray-500 mt-1">{item.description}</p>}
                    </td>
                    <td className="p-3 md:p-4 text-center border-b border-gray-100">
                      {item.basic === true ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                       item.basic === false ? <X className="h-5 w-5 text-red-400 mx-auto" /> : 
                       <span className="text-xs md:text-sm text-gray-600">{item.basic}</span>}
                    </td>
                    <td className={`p-3 md:p-4 text-center border-b border-gray-100 ${index % 2 === 0 ? 'bg-blue-50/30' : 'bg-blue-50/60'}`}>
                      {item.advance === true ? <Check className="h-5 w-5 text-blue-500 mx-auto" /> : 
                       item.advance === false ? <X className="h-5 w-5 text-red-400 mx-auto" /> : 
                       <span className="text-xs md:text-sm text-gray-600">{item.advance}</span>}
                    </td>
                  </tr>
                ))}
                 <tr className="bg-gray-100 border-t-2 border-gray-300">
                    <td className="p-4 md:p-5 text-gray-900 font-bold text-sm md:text-base">Harga</td>
                    <td className="p-4 md:p-5 text-center font-bold text-green-700 text-sm md:text-base">Rp 50.000</td>
                    <td className="p-4 md:p-5 text-center font-bold text-blue-700 bg-blue-50 text-sm md:text-base">Rp 100.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pilih Paket Anda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dapatkan akses ke alat otomatis untuk memformat skripsi Anda dengan cepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan Card */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-900">Rp 50.000</span>
                <span className="ml-2 text-gray-500 text-sm">pembayaran sekali</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Alat format esensial untuk penulisan skripsi
              </p>
              <ul className="space-y-2.5 mb-8 text-sm feature-list-basic flex-grow">
                {basicPlanFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-basic"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors link-basic mt-auto"
              >
                Beli Sekarang
              </Link>
            </div>

            {/* Advance Plan Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg border-2 border-blue-500 relative flex flex-col">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                REKOMENDASI
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Advance</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-blue-700">Rp 100.000</span>
                <span className="ml-2 text-blue-500 text-sm">hemat waktu bernilai jutaan</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Paket otomatisasi skripsi lengkap
              </p>
              <ul className="space-y-2.5 mb-8 text-sm feature-list-advance flex-grow">
                {advancePlanFeatures.map((feature, idx) => (
                   <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://iklilzaki.myr.id/pl/template-skripsi-easykripsi-advance"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md link-advance mt-auto"
              >
                Beli Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
