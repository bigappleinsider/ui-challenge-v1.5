import React from 'react';
import Card from './index';

import Button from '@material-ui/core/Button';

const handlePersonalLocation = jest.fn();
const handleResetLocation = jest.fn();


import { shallow, mount } from 'enzyme';

const setup = (renderShallow, props) => {

  const enzymeWrapper = renderShallow
    ? shallow(<Card {...props} />)
    : mount(<Card {...props} />);

  return enzymeWrapper;
};

const data = {
  ip: "172.217.5.238",
  country_code: "US",
  country_name: "United States",
  region_code: "CA",
  region_name: "California",
  city: "Mountain View",
  zip_code: "94043",
  time_zone: "America/Los_Angeles",
  latitude: 37.4192,
  longitude: -122.0574,
  metro_code: 807,
};

const header = "Personal Location";

describe('<Card> component', () => {
  let enzymeWrapper;

  it('should render', () => {
    enzymeWrapper = setup(false, {data, header});
    expect(enzymeWrapper.exists()).toBe(true);
  });

  it('should render header', () => {
    enzymeWrapper = setup(false, {data, header});
    expect(enzymeWrapper.find('[variant="headline"]').find('h2').text()).toEqual(header);
  });

  it('should display action buttons for personal location type', () => {
    enzymeWrapper = setup(false, {
      data, 
      header, 
      type: "personal",
      handlePersonalLocation,
      handleResetLocation,
    });
    expect(enzymeWrapper.find(Button).length).toBe(2);

  });

  it('it should call handlers on button click', () => {
    enzymeWrapper = setup(false, {
      data, 
      header, 
      type: "personal",
      handlePersonalLocation,
      handleResetLocation,
    });

    enzymeWrapper
      .find('button')
      .first()
      .simulate('click');
    
      expect(handlePersonalLocation.mock.calls.length).toBe(1);

      enzymeWrapper
      .find('button')
      .last()
      .simulate('click');

      expect(handleResetLocation.mock.calls.length).toBe(1);
  })

});