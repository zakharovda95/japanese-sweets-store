import { LinkTitles, RedirectLinkTitles } from '@/helpers/enums/links/_links-titles.enum';
import { ProductCategoryTitles } from '@/helpers/enums/products/_products-categories.enum';
import { PageName } from '@/helpers/enums/_pages.enum';
/** Типы ссылок хедера **/
export type PublicHeaderLinks = [
  {
    title: LinkTitles.main;
    path: PageName.main;
  },
  {
    title: LinkTitles.goods;
    path: PageName.goods;
  },
  {
    title: LinkTitles.cart;
    path: PageName.cart;
  },
  {
    title: LinkTitles.signIn;
    path: PageName.signin;
  },
  {
    title: LinkTitles.signUp;
    path: PageName.signup;
  },
];

export type AuthorizedUserHeaderLinks = [
  {
    title: LinkTitles.main;
    path: PageName.main;
    icon?: string | null;
  },
  {
    title: LinkTitles.goods;
    path: PageName.goods;
    icon?: string | null;
  },
  {
    title: LinkTitles.cart;
    path: PageName.cart;
    icon?: string | null;
  },
  {
    title: LinkTitles.profile;
    path: PageName.profile;
    icon?: string | null;
  },
];

/** Типы ссылок главной страницы **/
export type MainPageProfileEntranceLinks = [
  {
    title: LinkTitles.signIn;
    path: PageName.signin;
  },
  {
    title: LinkTitles.signUp;
    path: PageName.signup;
  },
];

/** Типы ссылок меню категорий **/
export type ProductCategoryType = [
  {
    title: ProductCategoryTitles.all;
    path: PageName.all;
  },
  {
    title: ProductCategoryTitles.candy;
    path: PageName.candy;
  },
  {
    title: ProductCategoryTitles.snacks;
    path: PageName.snacks;
  },
  {
    title: ProductCategoryTitles.cookies;
    path: PageName.cookies;
  },
  {
    title: ProductCategoryTitles.chocolates;
    path: PageName.chocolates;
  },
  {
    title: ProductCategoryTitles.food;
    path: PageName.food;
  },
  {
    title: ProductCategoryTitles.sale;
    path: PageName.sale;
  },
];
