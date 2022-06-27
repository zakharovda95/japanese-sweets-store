import {
  LinkTitles,
  RedirectLinkTitles,
  LinkRouteNames,
  RedirectLinkRouteNames,
} from '@/helpers/enums/links/_links-titles.enum';
import {
  ProductCategories,
  ProductCategoryTitles,
} from '@/helpers/enums/links/_product-categories.enum';

/** Типы ссылок хедера **/
export type PublicHeaderLinks = [
  {
    title: LinkTitles.main;
    path: LinkRouteNames.main;
    icon?: string | null;
  },
  {
    title: LinkTitles.goods;
    path: LinkRouteNames.goods;
    icon?: string | null;
  },
  {
    title: LinkTitles.cart;
    path: LinkRouteNames.cart;
    icon?: string | null;
  },
  {
    title: LinkTitles.signIn;
    path: LinkRouteNames.signIn;
    icon?: string | null;
  },
  {
    title: LinkTitles.signUp;
    path: LinkRouteNames.signUp;
    icon?: string | null;
  },
];

export type AuthorizedUserHeaderLinks = [
  {
    title: LinkTitles.main;
    path: LinkRouteNames.main;
    icon?: string | null;
  },
  {
    title: LinkTitles.goods;
    path: LinkRouteNames.goods;
    icon?: string | null;
  },
  {
    title: LinkTitles.cart;
    path: LinkRouteNames.cart;
    icon?: string | null;
  },
  {
    title: LinkTitles.profile;
    path: LinkRouteNames.profile;
    icon?: string | null;
  },
];

/** Типы ссылок футера **/
export type FooterLinks = [
  {
    title: RedirectLinkTitles.cv;
    path: RedirectLinkRouteNames.cv;
    icon?: string | null;
  },
  {
    title: RedirectLinkTitles.github;
    path: RedirectLinkRouteNames.github;
    icon?: string | null;
  },
];

/** Типы ссылок главной страницы **/
export type MainPageProfileEntranceLinks = [
  {
    title: LinkTitles.signIn;
    path: LinkRouteNames.signIn;
    icon?: string | null;
  },
  {
    title: LinkTitles.signUp;
    path: LinkRouteNames.signUp;
    icon?: string | null;
  },
];

/** Типы ссылок меню категорий **/
export type ProductCategoryType = [
  {
    title: ProductCategoryTitles.all;
    path: ProductCategories.all;
    icon?: string | null;
  },
  {
    title: ProductCategoryTitles.candy;
    path: ProductCategories.candy;
    icon?: string | null;
  },
  {
    title: ProductCategoryTitles.snacks;
    path: ProductCategories.snacks;
    icon?: string | null;
  },
  {
    title: ProductCategoryTitles.cookies;
    path: ProductCategories.cookies;
    icon?: string | null;
  },
  {
    title: ProductCategoryTitles.chocolates;
    path: ProductCategories.chocolates;
    icon?: string | null;
  },
  {
    title: ProductCategoryTitles.food;
    path: ProductCategories.food;
    icon?: string | null;
  },
  {
    title: ProductCategoryTitles.sale;
    path: ProductCategories.sale;
    icon?: string | null;
  },
];
