

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white">CartPro</h2>
              <p className="mt-2 text-sm">
                Your one-stop shop for all your favorite products. Quality guaranteed!
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
    
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">Shop</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Newsletter</h3>
              <p className="mt-2 text-sm">Subscribe for exclusive deals and updates.</p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
                />
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
    
          <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} Cartpro All Rights Reserved.
          </div>
        </footer>
      );
}