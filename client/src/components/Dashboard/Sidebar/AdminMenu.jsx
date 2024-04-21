import React from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';

const AdminMenu = () => {
    return (
        <div>
            <MenuItem
                icon={FaUserCog}
                label='Manage users'
                address='manage-users'
              />
        </div>
    );
};

export default AdminMenu;