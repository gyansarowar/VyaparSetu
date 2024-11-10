import React from 'react';

const importers = [
  {
    name: 'Global Foods Ltd.',
    headquarters: 'London, UK',
    organizationSize: '50-200 employees',
    serviceRequired: 'Import of spices and herbs for culinary products',
    budget: 'USD 50,000 - USD 70,000',
    contact: '+44 1234 567890',
    email: 'contact@globalfoods.com',
  },
  {
    name: 'Eco Friendly Inc.',
    headquarters: 'Berlin, Germany',
    organizationSize: '20-100 employees',
    serviceRequired: 'Sourcing of eco-friendly packaging materials',
    budget: 'USD 30,000 - USD 50,000',
    contact: '+49 2345 678910',
    email: 'info@ecofriendly.com',
  },
  {
    name: 'Fashion Trends',
    headquarters: 'Paris, France',
    organizationSize: '10-50 employees',
    serviceRequired: 'Import of handcrafted textiles and accessories',
    budget: 'USD 40,000 - USD 60,000',
    contact: '+33 1234 567891',
    email: 'sales@fashiontrends.fr',
  },
  {
    name: 'Tech Innovations Ltd.',
    headquarters: 'San Francisco, USA',
    organizationSize: '100-300 employees',
    serviceRequired: 'Supply of custom electronics components',
    budget: 'USD 100,000 - USD 150,000',
    contact: '+1 234 567 8901',
    email: 'support@techinnovations.com',
  },
  {
    name: 'Green Agro Corp.',
    headquarters: 'Sydney, Australia',
    organizationSize: '30-120 employees',
    serviceRequired: 'Organic fertilizers and farming equipment',
    budget: 'USD 25,000 - USD 35,000',
    contact: '+61 123 456 789',
    email: 'contact@greenagro.com.au',
  },
  {
    name: 'BuildStrong Ltd.',
    headquarters: 'Toronto, Canada',
    organizationSize: '50-200 employees',
    serviceRequired: 'High-quality construction materials',
    budget: 'USD 80,000 - USD 120,000',
    contact: '+1 416 789 0123',
    email: 'info@buildstrong.ca',
  },
  {
    name: 'Wellness World',
    headquarters: 'Tokyo, Japan',
    organizationSize: '20-100 employees',
    serviceRequired: 'Essential oils and natural wellness products',
    budget: 'USD 45,000 - USD 65,000',
    contact: '+81 123 456 789',
    email: 'hello@wellnessworld.jp',
  },
  {
    name: 'Luxury Furniture Ltd.',
    headquarters: 'Milan, Italy',
    organizationSize: '15-80 employees',
    serviceRequired: 'Custom wooden furniture and decor items',
    budget: 'USD 60,000 - USD 90,000',
    contact: '+39 123 456 7890',
    email: 'contact@luxuryfurniture.it',
  },
  {
    name: 'Smart Electronics',
    headquarters: 'Seoul, South Korea',
    organizationSize: '200-500 employees',
    serviceRequired: 'Microchips and semiconductor parts',
    budget: 'USD 150,000 - USD 200,000',
    contact: '+82 10 1234 5678',
    email: 'sales@smartelectronics.kr',
  },
  {
    name: 'Artisan Goods',
    headquarters: 'Amsterdam, Netherlands',
    organizationSize: '10-30 employees',
    serviceRequired: 'Handcrafted ceramic and glassware',
    budget: 'USD 20,000 - USD 40,000',
    contact: '+31 20 123 4567',
    email: 'info@artisangoods.nl',
  },
];

const ImporterList = () => {
  return (
    <div className="container mx-auto px-4 py-8 cursor-default">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Foreign Companies Seeking Imports</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {importers.map((importer, index) => (
          <div key={index} className="border border-gray-300 p-4 shadow-lg rounded hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold text-blue-800">{importer.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{importer.serviceRequired}</p>
            <div className="mt-2">
              <p><span className="font-bold">Headquarters:</span> {importer.headquarters}</p>
              <p><span className="font-bold">Organization Size:</span> {importer.organizationSize}</p>
              <p><span className="font-bold">Budget:</span> {importer.budget}</p>
              <p><span className="font-bold">Contact:</span> {importer.contact}</p>
              <p><span className="font-bold">Email:</span> <a href="mailto:"> {importer.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImporterList;
