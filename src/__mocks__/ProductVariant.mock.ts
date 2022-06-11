import faker from 'faker'
import {buildMoneyV2} from './moneyv2.mock'
import {buildImage} from './Image.mock'
import type {
  ProductVariant,
  Image,
  SelectedOption,
  ProductOption,
  ProductVariantConnection,
} from '@generated/storefront.types'
import type {Maybe} from '@LocalTypes/interfaces'

export const productVariantConnectionMockData = {
  edges: [
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTU1MDYxNjE5OTM2Ng==',
        title: 'King / With Storage / Honey',
        availableForSale: true,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'King',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Honey',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Honey',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '43680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODQ3NDE4Mg==',
        title: 'King / With Storage / Walnut',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'King',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Walnut',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Walnut',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '43680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODUwNjk1MA==',
        title: 'King / With Storage / Mahogany',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'King',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Mahogany',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Mahogany',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '43680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTU1MDYxNjIzMjEzNA==',
        title: 'King / Without Storage / Honey',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'King',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Honey',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Honey',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '41500.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODUzOTcxOA==',
        title: 'King / Without Storage / Walnut',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'King',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Walnut',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Walnut',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '41500.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODU3MjQ4Ng==',
        title: 'King / Without Storage / Mahogany',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'King',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Mahogany',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Mahogany',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '41500.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTU1MDYxNjM5NTk3NA==',
        title: 'Queen / With Storage / Honey',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Queen',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Honey',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Honey',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '41680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODYwNTI1NA==',
        title: 'Queen / With Storage / Walnut',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Queen',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Walnut',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Walnut',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '41680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODYzODAyMg==',
        title: 'Queen / With Storage / Mahogany',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Queen',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Mahogany',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Mahogany',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '41680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTU1MDYxNjQ2MTUxMA==',
        title: 'Queen / Without Storage / Honey',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Queen',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Honey',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Honey',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '40680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODY3MDc5MA==',
        title: 'Queen / Without Storage / Walnut',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Queen',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Walnut',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Walnut',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '40680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODcwMzU1OA==',
        title: 'Queen / Without Storage / Mahogany',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Queen',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Mahogany',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Mahogany',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '40680.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODczNjMyNg==',
        title: 'Single / With Storage / Honey',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Single',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Honey',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Honey',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '25580.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODc2OTA5NA==',
        title: 'Single / With Storage / Walnut',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Single',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Walnut',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Walnut',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '25580.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODgwMTg2Mg==',
        title: 'Single / With Storage / Mahogany',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Single',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'With Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Mahogany',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Mahogany',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '25580.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODgzNDYzMA==',
        title: 'Single / Without Storage / Honey',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Single',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Honey',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Honey',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/SUN_7715_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '25580.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODg2NzM5OA==',
        title: 'Single / Without Storage / Walnut',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Single',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Walnut',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Walnut',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-size-bed-7_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '25580.0',
          currencyCode: 'INR',
        },
      },
    },
    {
      node: {
        __typename: 'ProductVariant',
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTc4NDU3ODkwMDE2Ng==',
        title: 'Single / Without Storage / Mahogany',
        availableForSale: false,
        sku: '',
        selectedOptions: [
          {
            __typename: 'SelectedOption',
            name: 'Size',
            value: 'Single',
          },
          {
            __typename: 'SelectedOption',
            name: 'Storage',
            value: 'Without Storage',
          },
          {
            __typename: 'SelectedOption',
            name: 'Finish',
            value: 'Mahogany',
          },
        ],
        image: {
          __typename: 'Image',
          altText: 'Mahogany',
          url: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1.jpg?v=1652158111',
          w96: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_96x72.jpg.webp?v=1652158111',
          w128: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_128x96.jpg.webp?v=1652158111',
          w256: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_256x192.jpg.webp?v=1652158111',
          w384: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_384x288.jpg.webp?v=1652158111',
          w640: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_640x480.jpg.webp?v=1652158111',
          w750: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_750x562.jpg.webp?v=1652158111',
          w828: 'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_828x621.jpg.webp?v=1652158111',
          w1080:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1080x810.jpg.webp?v=1652158111',
          w1200:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1200x900.jpg.webp?v=1652158111',
          w1920:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_1920x1440.jpg.webp?v=1652158111',
          w2048:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_2048x1536.jpg.webp?v=1652158111',
          w3840:
            'https://cdn.shopify.com/s/files/1/0589/2128/7878/products/king-7c-1-600x600-1_3840x2880.jpg.webp?v=1652158111',
        },
        compareAtPriceV2: {
          __typename: 'MoneyV2',
          amount: '25000.0',
          currencyCode: 'INR',
        },
        priceV2: {
          __typename: 'MoneyV2',
          amount: '25580.0',
          currencyCode: 'INR',
        },
      },
    },
  ],
} as unknown as ProductVariantConnection

export const propductOptionsMockData = [
  {
    __typename: 'ProductOption',
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0T3B0aW9uLzg3NjQ3MTcxMzgxMTg=',
    name: 'Size',
    values: ['King', 'Queen', 'Single'],
  },
  {
    __typename: 'ProductOption',
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0T3B0aW9uLzkxNjYxNDg0MDMzOTg=',
    name: 'Storage',
    values: ['With Storage', 'Without Storage'],
  },
  {
    __typename: 'ProductOption',
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0T3B0aW9uLzkxNjYxNDg0MzYxNjY=',
    name: 'Finish',
    values: ['Honey', 'Walnut', 'Mahogany'],
  },
] as unknown as ProductOption[]

export function buildRandomProductVariantByOptions(
  overrides: Maybe<Partial<ProductVariant>>,
  options: ProductOption[],
): Partial<ProductVariant> {
  return {
    ...buildProductVariantInfoFields(overrides),
    selectedOptions: options.map(option =>
      buildSelectedOption({
        name: option.name,
        value: faker.random.arrayElement(option.values),
      }),
    ),
  }
}

export function buildProductVariantInfoFields(
  overrides: Maybe<Partial<ProductVariant>>,
): Partial<ProductVariant> {
  return {
    __typename: 'ProductVariant',
    availableForSale: faker.datatype.boolean(),
    compareAtPriceV2: buildMoneyV2(),
    currentlyNotInStock: faker.datatype.boolean(),
    id: faker.datatype.uuid(),
    image: buildImage() as Image,
    priceV2: buildMoneyV2(),
    quantityAvailable: faker.datatype.number(),
    requiresShipping: faker.datatype.boolean(),
    title: faker.random.words(),
    unitPrice: buildMoneyV2(),
    ...(overrides ?? {}),
  }
}

export function buildSelectedOption(
  overrides: Maybe<Partial<SelectedOption>>,
): SelectedOption {
  return {
    __typename: 'SelectedOption',
    name: overrides?.name ?? faker.random.word(),
    value: overrides?.value ?? faker.random.word(),
  }
}
