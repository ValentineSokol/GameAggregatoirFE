import React from 'react';

export const OfferCard = ({ store, url, name, price }) => (
    <article>
      <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline bg-gray-800 m-2 text-white p-2 rounded-md text-sm'
      >
          <span>{store}:</span>
          {' '}
          <span>{name}</span>
          {' '}
          <span className='text-green-500 font-bold'>{price}</span>
      </a>
    </article>
);