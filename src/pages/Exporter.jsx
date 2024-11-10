import React from 'react';


const companies = [
  {
    name: 'Tech Solutions',
    organizationSize: '10-50 employees',
    sector: 'IT Services',
    headquarters: 'Bangalore, India',
    address: '123 Tech Park, Bangalore',
    contact: '+91 9876543210',
    email: 'contact@techsolutions.com',
    description: 'A small IT services company specializing in web and app development.',
  },
  {
    name: 'Green Earth',
    organizationSize: '20-100 employees',
    sector: 'Environmental Consulting',
    headquarters: 'Pune, India',
    address: '456 Green Lane, Pune',
    contact: '+91 8765432109',
    email: 'info@greenearth.com',
    description: 'Provides eco-friendly solutions for sustainable development.',
  },
  {
    name: 'Fresh Farm',
    organizationSize: '10-50 employees',
    sector: 'Agriculture',
    headquarters: 'Delhi, India',
    address: '789 Farm St, Delhi',
    contact: '+91 7654321098',
    email: 'support@freshfarm.com',
    description: 'Offers organic farming and fresh produce for healthy living.',
  },
  {
    name: 'Craft Studio',
    organizationSize: '5-20 employees',
    sector: 'Handicrafts',
    headquarters: 'Jaipur, India',
    address: '101 Craft Ave, Jaipur',
    contact: '+91 6543210987',
    email: 'hello@craftstudio.com',
    description: 'A small enterprise creating traditional handicrafts.',
  },
  {
    name: 'Quick Print',
    organizationSize: '10-30 employees',
    sector: 'Printing Services',
    headquarters: 'Mumbai, India',
    address: '202 Print St, Mumbai',
    contact: '+91 5432109876',
    email: 'contact@quickprint.com',
    description: 'Specializes in fast and affordable printing services.',
  },
  {
    name: 'Byte Builders',
    organizationSize: '10-50 employees',
    sector: 'Software Development',
    headquarters: 'Chennai, India',
    address: '303 Byte Blvd, Chennai',
    contact: '+91 4321098765',
    email: 'sales@bytebuilders.com',
    description: 'Develops custom software solutions for businesses.',
  },
  {
    name: 'Eco Movers',
    organizationSize: '10-40 employees',
    sector: 'Transportation',
    headquarters: 'Hyderabad, India',
    address: '404 Eco Ave, Hyderabad',
    contact: '+91 3210987654',
    email: 'info@ecomovers.com',
    description: 'Provides eco-friendly transportation solutions.',
  },
  {
    name: 'Smart Solutions',
    organizationSize: '5-25 employees',
    sector: 'Consulting',
    headquarters: 'Ahmedabad, India',
    address: '505 Smart St, Ahmedabad',
    contact: '+91 2109876543',
    email: 'support@smartsolutions.com',
    description: 'Offers business consulting services for small companies.',
  },
  {
    name: 'Fashion Hub',
    organizationSize: '5-30 employees',
    sector: 'Fashion & Apparel',
    headquarters: 'Kolkata, India',
    address: '606 Fashion Rd, Kolkata',
    contact: '+91 1098765432',
    email: 'sales@fashionhub.com',
    description: 'A boutique for affordable and trendy clothing.',
  },
  {
    name: 'BuildMyBrand',
    organizationSize: '15-60 employees',
    sector: 'Digital Marketing',
    headquarters: 'Noida, India',
    address: '707 Brand Ave, Noida',
    contact: '+91 0987654321',
    email: 'contact@buildmybrand.com',
    description: 'Provides branding and digital marketing services.',
  },
];

const Exporter = () => {
  return (
    <div className="container mx-auto px-4 py-8 cursor-default">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Indian Exporters</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {companies.map((company, index) => (
          <div key={index} className="border border-gray-300 p-4 shadow-lg rounded hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold text-blue-800">{company.name}</h2>
            <p className="text-sm text-gray-600">{company.description}</p>
            <div className="mt-4 ">
              <p><span className="font-bold">Organization Size:</span> {company.organizationSize}</p>
              <p><span className="font-bold">Sector:</span> {company.sector}</p>
              <p><span className="font-bold">Headquarters:</span> {company.headquarters}</p>
              <p><span className="font-bold">Address:</span> {company.address}</p>
              <p><span className="font-bold">Contact:</span> {company.contact}</p>
              <p><span className="font-bold">Email:</span><a href='mailto:' > {company.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exporter;
