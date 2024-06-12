import { lazy, LazyExoticComponent } from "react";
import  NoLazy  from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


type JSXComponent = () => JSX.Element;

interface  Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
}

// const lazy1 =  lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const LazyLayout =  lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));
//const lazy2 =  lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
//const lazy3 =  lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [

    {
        to: '/lazyload/*',
        path: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },

    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: lazy2,
    //     name: 'Lazy-2'
    // },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]