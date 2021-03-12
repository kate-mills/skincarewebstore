import React from 'react';

import {connect} from 'react-redux'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectShopItems} from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

const ShopPage = ({collections}) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, title, ...rest }) => (
        <CollectionPreview key={id} title={title} {...rest} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
})

export default connect(mapStateToProps)(ShopPage);
