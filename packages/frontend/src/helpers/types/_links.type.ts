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
  },
  {
    title: LinkTitles.goods;
    path: LinkRouteNames.goods;
  },
  {
    title: LinkTitles.cart;
    path: LinkRouteNames.cart;
  },
  {
    title: LinkTitles.signIn;
    path: LinkRouteNames.signIn;
  },
  {
    title: LinkTitles.signUp;
    path: LinkRouteNames.signUp;
  },
];

export type AuthorizedUserHeaderLinks = [
  {
    title: LinkTitles.main;
    path: LinkRouteNames.main;
  },
  {
    title: LinkTitles.goods;
    path: LinkRouteNames.goods;
  },
  {
    title: LinkTitles.cart;
    path: LinkRouteNames.cart;
  },
  {
    title: LinkTitles.profile;
    path: LinkRouteNames.profile;
  },
];

/** Типы ссылок футера **/
export type FooterLinks = [
  {
    title: RedirectLinkTitles.cv;
    path: RedirectLinkRouteNames.cv;
  },
  {
    title: RedirectLinkTitles.github;
    path: RedirectLinkRouteNames.github;
  },
];

/** Типы ссылок главной страницы **/
export type MainPageProfileEntranceLinks = [
  {
    title: LinkTitles.signIn;
    path: LinkRouteNames.signIn;
  },
  {
    title: LinkTitles.signUp;
    path: LinkRouteNames.signUp;
  },
];

/** Типы ссылок меню категорий **/
export type ProductCategoryType = [
  {
    title: ProductCategoryTitles.all;
    path: ProductCategories.all;
  },
  {
    title: ProductCategoryTitles.candy;
    path: ProductCategories.candy;
  },
  {
    title: ProductCategoryTitles.snacks;
    path: ProductCategories.snacks;
  },
  {
    title: ProductCategoryTitles.cookies;
    path: ProductCategories.cookies;
  },
  {
    title: ProductCategoryTitles.chocolates;
    path: ProductCategories.chocolates;
  },
  {
    title: ProductCategoryTitles.food;
    path: ProductCategories.food;
  },
  {
    title: ProductCategoryTitles.sale;
    path: ProductCategories.sale;
  },
];
