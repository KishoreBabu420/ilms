import { FaHome } from 'react-icons/fa';
import { TbBuildingEstate } from 'react-icons/tb';
import { FaMapLocation } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';

const menuItems = [
  {
    icon: (
      <FaHome
        size={25}
        className='mr-4'
      />
    ),
    text: 'Home',
  },
  {
    icon: (
      <TbBuildingEstate
        size={25}
        className='mr-4'
      />
    ),
    text: 'State',
  },
  {
    icon: (
      <FaMapLocation
        size={25}
        className='mr-4'
      />
    ),
    text: 'Country',
  },
  {
    icon: (
      <IoIosContact
        size={25}
        className='mr-4'
      />
    ),
    text: 'Contact Us',
  },
];

export { menuItems };
