const barcaRoot = 'https://sports-dev.barca.group';
export const navContent = {
  Homepage: {href: 'index.html', label: 'Homepage', barcaUrl: barcaRoot},
  Pants: {
    href: 'listing-pants.html',
    label: 'Pants',
    barcaUrl: `${barcaRoot}/browse/promotions/clothing/pants`,
  },
  'Surf accessories': {
    href: 'listing-surf-accessories.html',
    label: 'Surf accessories',
    barcaUrl: `${barcaRoot}/browse/promotions/surf-with-us-this-year`,
  },
  Towels: {
    href: 'listing-towels.html',
    label: 'Towels',
    barcaUrl: `${barcaRoot}/browse/promotions/accessories/towels`,
  },
  Cart: {href: 'cart.html', label: 'Cart', barcaUrl: `${barcaRoot}/cart`},
  Search: {
    href: 'search.html',
    label: 'Search',
    barcaUrl: `${barcaRoot}/commerce-search`,
  },
};

export const getParamValue = (param) => {
  return document.location.hash
    .substring(1)
    .split('&')
    .reduce(function (res, item) {
      var parts = item.split('=');
      res[parts[0]] = parts[1];
      return res;
    }, {})[param];
};

const makeLinks = () => {
  return Object.values(navContent)
    .map(
      (nav) =>
        `<a href="${nav.href}" style="margin-right: 10px; color: var(--atomic-neutral-dark); text-decoration: none;">${nav.label}</a>`
    )
    .join('');
};

const nav = document.createElement('nav');
nav.style.borderTop = '1px solid var(--atomic-neutral-dark)';
nav.style.marginBottom = '2em';

nav.innerHTML = `
            <p style="margin-bottom: 0; margin-left: 0;">Commerce website nav menu:</p>
            <ul style="display: inline-block; font-size: var(--atomic-text-lg); padding-left: 0;">
              ${makeLinks()}
            </ul>
        `;

const header = document.createElement('header');
document.body.insertAdjacentElement('afterbegin', header);
header.insertAdjacentElement('beforeend', nav);

const styleTag = document.createElement('style');
styleTag.innerHTML = `
  html {
    nav {
      padding: 10px 20px;
      font-family: var(--atomic-font-family);
      span {
        font-weight: var(--atomic-font-bold);
      }
      ul {
        display: inline-block;
        font-size: var(--atomic-text-sm);
      }
      li {
        display: inline-block;
        list-decoration: none;
      }
      a {
        margin-right: 10px;
        color: var(--atomic-primary);
        text-decoration: none;
      }
    }`;
document.head.appendChild(styleTag);
