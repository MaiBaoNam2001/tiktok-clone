import routesConfig from '~/config/routesConfig';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home }, // layout: undefined -> default layout
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
