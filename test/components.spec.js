import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer } from '../components';
import { InputArea, BeerList } from '../components';

describe('BeerListContainer', () => {

  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer/>);
    
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>
    ])).to.equal(true);
  });

  it('should start with an empty list', () => {
  	const wrapper = shallow(<BeerListContainer/>);

  	expect(wrapper.state('beers')).to.eql([]);
  });

  it('is able to add items to the list', () => {
  	const wrapper = shallow(<BeerListContainer/>);

  	wrapper.instance().addItem('Heineken');
  	// wrapper.addItem('Heineken');

  	expect(wrapper.state('beers')).to.have.length(1);
  });

});