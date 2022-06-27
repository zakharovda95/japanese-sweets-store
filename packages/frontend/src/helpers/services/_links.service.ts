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
    icon: 'HomeOutlined',
  },
  {
    title: LinkTitles.goods,
    path: LinkRouteNames.goods,
    icon: 'ShoppingBagOutlined',
  },
  {
    title: LinkTitles.cart,
    path: LinkRouteNames.cart,
    icon: 'ShoppingCartOutlined',
  },
  {
    title: LinkTitles.signIn,
    path: LinkRouteNames.signIn,
    icon: 'LogInOutlined',
  },
  {
    title: LinkTitles.signUp,
    path: LinkRouteNames.signUp,
    icon: 'AppRegistrationFilled',
  },
];

export const authorizedUserHeaderLinks: AuthorizedUserHeaderLinks = [
  {
    title: LinkTitles.main,
    path: LinkRouteNames.main,
    icon: 'HomeOutlined',
  },
  {
    title: LinkTitles.goods,
    path: LinkRouteNames.goods,
    icon: 'ShoppingBagOutlined',
  },
  {
    title: LinkTitles.cart,
    path: LinkRouteNames.cart,
    icon: 'ShoppingCartOutlined',
  },
  {
    title: LinkTitles.profile,
    path: LinkRouteNames.profile,
    icon: 'AccountCircleOutlined',
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
