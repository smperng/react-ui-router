import {
  UIRouterReact,
  ReactStateDeclaration,
  trace,
  pushStateLocationPlugin,
} from '@uirouter/react';

import Home from './app/home/Home';
import Home1 from './app/home/home-1/Home1';
import Home1Tab1 from './app/home/home-1/tab-1/Tab1';
import Home1Tab1Zero from './app/home/home-1/tab-1/details/Zero';
import Home1Tab1Details from './app/home/home-1/tab-1/details/Details';
import Home1Tab2 from './app/home/home-1/tab-2/Tab2';
import Home1Tab3 from './app/home/home-1/tab-3/Tab3';
import Home2 from './app/home/home-2/Home2';
import Home3 from './app/home/home-3/Home3';
import About from './app/about/About';
import About1 from './app/about/about-1/About1';
import About2 from './app/about/about-2/About2';
import About3 from './app/about/about-3/About3';
import Contact from './app/contact/Contact';
import Contact1 from './app/contact/contact-1/Contact1';
import Contact2 from './app/contact/contact-2/Contact2';
import Contact3 from './app/contact/contact-3/Contact3';
import Events from './app/events/Events';
import Events1 from './app/events/events-1/Events1';
import Events2 from './app/events/events-2/Events2';
import Events3 from './app/events/events-3/Events3';
import Products from './app/products/Products';
import Products1 from './app/products/products-1/Products1';
import Products2 from './app/products/products-2/Products2';
import Products3 from './app/products/products-3/Products3';

// define router states
const states: ReactStateDeclaration[] = [
  {
    name: 'home',
    url: '/home',
    component: Home,
  },
  {
    name: 'home.home1',
    url: '/home1',
    component: Home1,
  },
  {
    name: 'home.home1.tab1',
    url: '/tab1',
    component: Home1Tab1,
  },
  {
    name: 'home.home1.tab1.zero',
    url: '/zero',
    component: Home1Tab1Zero,
  },
  {
    name: 'home.home1.tab1.details',
    url: '/details/:id',
    component: Home1Tab1Details,
  },
  {
    name: 'home.home1.tab2',
    url: '/tab2',
    component: Home1Tab2,
  },
  {
    name: 'home.home1.tab3',
    url: '/tab3',
    component: Home1Tab3,
  },
  {
    name: 'home.home2',
    url: '/home2',
    component: Home2,
  },
  {
    name: 'home.home3',
    url: '/home3',
    component: Home3,
  },
  {
    name: 'about',
    url: '/about',
    component: About,
  },
  {
    name: 'about.about1',
    url: '/about1',
    component: About1,
  },
  {
    name: 'about.about2',
    url: '/about2',
    component: About2,
  },
  {
    name: 'about.about3',
    url: '/about3',
    component: About3,
  },
  {
    name: 'contact',
    url: '/contact',
    component: Contact,
  },
  {
    name: 'contact.contact1',
    url: '/contact1',
    component: Contact1,
  },
  {
    name: 'contact.contact2',
    url: '/contact2',
    component: Contact2,
  },
  {
    name: 'contact.contact3',
    url: '/contact3',
    component: Contact3,
  },
  {
    name: 'events',
    url: '/events',
    component: Events,
  },
  {
    name: 'events.events1',
    url: '/events1',
    component: Events1,
  },
  {
    name: 'events.events2',
    url: '/events2',
    component: Events2,
  },
  {
    name: 'events.events3',
    url: '/events3',
    component: Events3,
  },
  {
    name: 'products',
    url: '/products',
    component: Products,
  },
  {
    name: 'products.products1',
    url: '/products1',
    component: Products1,
  },
  {
    name: 'products.products2',
    url: '/products2',
    component: Products2,
  },
  {
    name: 'products.products3',
    url: '/products3',
    component: Products3,
  },
];

// select router plugins
const plugins = [pushStateLocationPlugin];

const config = (router: UIRouterReact) => {
  router.urlRouter.when('/about', '/about/about1');
  router.urlRouter.when('/contact', '/contact/contact1');
  router.urlRouter.when('/products', '/products/products1');
  router.urlRouter.when('/events', '/events/events1');
  router.urlRouter.when('/home', '/home/home1');
  router.urlRouter.when('/home/home1', '/home/home1/tab1');
  router.urlRouter.when('/home/home1/tab1', '/home/home1/tab1/zero');
  router.urlRouter.otherwise('/home');
  trace.enable(1);
};

const routerConfig = {
  plugins,
  states,
  config,
};

export default routerConfig;
