import React from 'react';
import MenuItem from './MenuItem';
import { FaFingerprint } from "react-icons/fa";
const GuestMenu = () => {
    return (
        <div>
            <MenuItem
                icon={FaFingerprint}
                label='My Bookings'
                address='my-bookings'
              />
        </div>
    );
};

export default GuestMenu;