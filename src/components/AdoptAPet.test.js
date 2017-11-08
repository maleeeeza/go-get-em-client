import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import AdoptAPet from './AdoptAPet';

const defaultStore = {
  navigate: () => {

  }
};
const context = {
  store: defaultStore
};

const props = {
  history: { push: () => {}},
  state: {
    cat: {
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      name: 'Fluffy'
    }
  }
};

describe('<AdoptAPet />', () => {
    it('Renders without crashing', () => {
      const mockStore = configureStore([]);
      const store = mockStore({...defaultStore});
      shallow(<AdoptAPet store={store} />);
    });
});
