import { LinkTitles, RedirectLinkTitles } from '@/helpers/enums/links/_links-titles.enum';
import {
  AuthorizedUserHeaderLinks,
  FooterLinks,
  MainPageProfileEntranceLinks,
  ProductCategoryType,
  PublicHeaderLinks,
} from '@/helpers/types/_links.type';
import { ProductCategoryTitles } from '@/helpers/enums/products/_products-categories.enum';
import { PageName } from '@/helpers/enums/_pages.enum';

/** Ссылки хедера **/
export const publicHeaderLinks: PublicHeaderLinks = [
  {
    title: LinkTitles.main,
    path: PageName.main,
  },
  {
    title: LinkTitles.goods,
    path: PageName.goods,
  },
  {
    title: LinkTitles.cart,
    path: PageName.cart,
  },
  {
    title: LinkTitles.signIn,
    path: PageName.signin,
  },
  {
    title: LinkTitles.signUp,
    path: PageName.signup,
  },
];

export const authorizedUserHeaderLinks: AuthorizedUserHeaderLinks = [
  {
    title: LinkTitles.main,
    path: PageName.main,
    icon: 'HomeOutlined',
  },
  {
    title: LinkTitles.goods,
    path: PageName.goods,
    icon: 'ShoppingBagOutlined',
  },
  {
    title: LinkTitles.cart,
    path: PageName.cart,
    icon: 'ShoppingCartOutlined',
  },
  {
    title: LinkTitles.profile,
    path: PageName.profile,
    icon: 'AccountCircleOutlined',
  },
];

/** Ссылки футера **/
export const footerLinks: FooterLinks = [
  {
    title: RedirectLinkTitles.cv,
    path: PageName.cv,
  },
  {
    title: RedirectLinkTitles.github,
    path: PageName.github,
  },
];

/** Ссылки главной страницы **/
export const mainPageProfileEntranceLinks: MainPageProfileEntranceLinks = [
  {
    title: LinkTitles.signIn,
    path: PageName.signin,
  },
  {
    title: LinkTitles.signUp,
    path: PageName.signup,
  },
];

/** Ссылки меню категорий **/

export const Categories: ProductCategoryType = [
  {
    title: ProductCategoryTitles.all,
    path: PageName.all,
  },
  {
    title: ProductCategoryTitles.candy,
    path: PageName.candy,
  },
  {
    title: ProductCategoryTitles.snacks,
    path: PageName.snacks,
  },
  {
    title: ProductCategoryTitles.cookies,
    path: PageName.cookies,
  },
  {
    title: ProductCategoryTitles.chocolates,
    path: PageName.chocolates,
  },
  {
    title: ProductCategoryTitles.food,
    path: PageName.food,
  },
  {
    title: ProductCategoryTitles.sale,
    path: PageName.sale,
  },
];
