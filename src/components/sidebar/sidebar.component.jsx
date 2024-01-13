const Sidebar = ({ menuItems }) => {
  return (
    <aside>
      <ul className='flex flex-col p-4 text-gray-600 dark:text-white'>
        {menuItems.map(({ icon, text }, index) => {
          return (
            <div
              key={index}
              className='py-4 '
            >
              <li className='text-xl flex cursor-pointer  w-[75%] rounded-full mx-auto py-3 px-4 hover:text-white hover:bg-black text-center justify-start bg-white  dark:bg-gray-800'>
                {icon} {text}
              </li>
            </div>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
