import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/home" className="text-white text-xl"style={{ fontFamily: "Kanit, sans-serif" }}>
                Astrology
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href ? 'bg-yellow-500 text-white' : 'text-white hover:bg-gray-600',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
            {/* Google Translate Element */}
            <div id="google_translate_element" className="translate-box"></div>
            {isAuthenticated ? (
              <Link to="/dashboard">
                <button
                  type="button"
                  className="text-white bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2"
                >
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/">
                <button
                  type="button"
                  className="text-white bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
        
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                location.pathname === item.href ? 'bg-yellow-500 text-white' : 'text-black hover:bg-gray-100',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

// Custom styles for the translate box
const style = document.createElement('style');
style.innerHTML = `
  .translate-box .goog-te-gadget-simple {
    background-color: #4a5568;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: white;
  }
  .translate-box .goog-te-gadget-simple .goog-te-menu-value span {
    color: white;
  }
  .translate-box .goog-te-gadget-simple .goog-te-menu-value span:after {
    content: '▼';
    padding-left: 5px;
  }
  .translate-box .goog-te-gadget-simple:hover {
    background-color: #2d3748;
  }
  .translate-box .goog-te-menu-frame {
    border: none;
    box-shadow: none;
  }
  .translate-box .goog-te-menu2 {
    background-color: #4a5568;
    color: white;
  }
  @media (max-width: 640px) {
    .translate-box {
      display: none;
    }
  }
`;
document.head.appendChild(style);
