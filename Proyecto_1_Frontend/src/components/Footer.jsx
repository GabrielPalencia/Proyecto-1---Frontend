import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-8 mt-auto">
      <div className="max-container flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <div className="text-xs text-gray-500 uppercase tracking-widest">
          SpaceX Clone &copy; {currentYear}
        </div>
        
        <nav aria-label="Footer Navigation">
          <ul className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <li>
              <a href="https://twitter.com/spacex" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/spacex" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/spacex" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;