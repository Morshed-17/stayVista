import React from 'react';
import MenuItem from './MenuItem';
import { MdHomeWork } from 'react-icons/md';
import { BsFillHouseAddFill } from 'react-icons/bs';

const HostMenu = () => {
    return (
        <div>
            {/* Menu Items */}
            <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='add-room'
              />
              {/* Menu Items */}
              <MenuItem
                icon={MdHomeWork}
                label='My Listings'
                address='my-listings'
              />
        </div>
    );
};

export default HostMenu;