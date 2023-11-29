const Footer = () => {
  return (
    <footer className="bg-gray-800 relative h-60v w-screen py-7 px-4 text-white">
      <div className="container ml-44 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* ... (your existing grid columns) */}
        {/* Column 1 */}
        <div className="col-span-1 md:col-span-1 text-start">
          <h3 className="text-xl font-bold mb-2">About Us</h3>
          {/* Add about content here */}
          <ul className="text-gray-500">
          <li>Our Company</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 md:col-span-1 text-start">
          <h3 className="text-xl font-bold mb-2">Services</h3>
          {/* Add services content here */}
          <ul className="text-gray-500">
          <li>Our Company</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 md:col-span-1 text-start">
          <h3 className="text-xl font-bold mb-2">Tools</h3>
          {/* Add tools content here */}
          <ul className="text-gray-500">
          <li>Our Company</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-1 md:col-span-1 text-start">
          <h3 className="text-xl font-bold mb-2">Case Studies</h3>
          {/* Add case studies content here */}
          <ul className="text-gray-500">
          <li>Our Company</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
  <hr className="mt-24 border-t border-gray-600" />

{/* New Column (Column 5) */}
<div className="text-center mt-10 flex justify-evenly">
  {/* ... (your existing address columns) */}
  <div>
  <h3 className="text-xl font-bold mb-2">Office 1</h3>
  <p className="text-gray-500">Address: 123 Main St, City, State ZIP Code</p>
  </div>
  <div>
  <h3 className="text-xl font-bold mb-2">Office 2</h3>
  <p className="text-gray-500">Address: 123 Main St, City, State ZIP Code</p>
  </div>
  <div>
  <h3 className="text-xl font-bold mb-2">Contact</h3>
  <p className="text-gray-500">Address: 123 Main St, City, State ZIP Code</p>
  </div>
</div>

      {/* Fixed Bottom Div */}
      <div className="absolute bottom-0 left-0 right-0 bg-black py-2 px-4 text-center text-white">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
