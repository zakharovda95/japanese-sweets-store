import {
  LinkRouteNames,
  LinkTitles,
  RedirectLinkRouteNames,
  RedirectLinkTitles,
} from '@/helpers/enums/links/_links-titles.enum';
import {
  AuthorizedUserHeaderLinks,
  FooterLinks,
  MainPageProfileEntranceLinks,
  ProductCategoryType,
  PublicHeaderLinks,
} from '@/helpers/types/_links.type';
import {
  ProductCategories,
  ProductCategoryTitles,
} from '@/helpers/enums/links/_product-categories.enum';

/** Ссылки хедера **/
export const publicHeaderLinks: PublicHeaderLinks = [
  {
    title: LinkTitles.main,
    path: LinkRouteNames.main,
  },
  {
    title: LinkTitles.goods,
    path: LinkRouteNames.goods,
  },
  {
    title: LinkTitles.cart,
    path: LinkRouteNames.cart,
  },
  {
    title: LinkTitles.signIn,
    path: LinkRouteNames.signIn,
  },
  {
    title: LinkTitles.signUp,
    path: LinkRouteNames.signUp,
  },
];

export const authorizedUserHeaderLinks: AuthorizedUserHeaderLinks = [
  {
    title: LinkTitles.main,
    path: LinkRouteNames.main,
  },
  {
    title: LinkTitles.goods,
    path: LinkRouteNames.goods,
  },
  {
    title: LinkTitles.cart,
    path: LinkRouteNames.cart,
  },
  {
    title: LinkTitles.profile,
    path: LinkRouteNames.profile,
  },
];

/** Ссылки футера **/
export const footerLinks: FooterLinks = [
  {
    title: RedirectLinkTitles.cv,
    path: RedirectLinkRouteNames.cv,
  },
  {
    title: RedirectLinkTitles.github,
    path: RedirectLinkRouteNames.github,
  },
];

/** Ссылки главной страницы **/
export const mainPageProfileEntranceLinks: MainPageProfileEntranceLinks = [
  {
    title: LinkTitles.signIn,
    path: LinkRouteNames.signIn,
  },
  {
    title: LinkTitles.signUp,
    path: LinkRouteNames.signUp,
  },
];

/** Ссылки меню категорий **/

export const Categories: ProductCategoryType = [
  {
    title: ProductCategoryTitles.all,
    path: ProductCategories.all,
  },
  {
    title: ProductCategoryTitles.candy,
    path: ProductCategories.candy,
  },
  {
    title: ProductCategoryTitles.snacks,
    path: ProductCategories.snacks,
  },
  {
    title: ProductCategoryTitles.cookies,
    path: ProductCategories.cookies,
  },
  {
    title: ProductCategoryTitles.chocolates,
    path: ProductCategories.chocolates,
  },
  {
    title: ProductCategoryTitles.food,
    path: ProductCategories.food,
  },
  {
    title: ProductCategoryTitles.sale,
    path: ProductCategories.sale,
  },
];
