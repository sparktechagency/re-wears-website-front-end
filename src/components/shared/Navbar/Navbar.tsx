'use client';

import { useState } from 'react';
import { Input, Menu, Dropdown } from 'antd';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';
import { BsSearch } from "react-icons/bs";
import Link from 'next/link';
import CmnButton from '../CmnButton';
import {  FaTshirt } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import { GiConverseShoe, GiDoubleNecklace, GiLipstick } from 'react-icons/gi';
import { SlHandbag } from 'react-icons/sl';


const categories = {
    'All': { icon: <TbGridDots color=' #9d977a' className="text-lg" />, items: ['Jeans', 'Tops & T-Shirts', 'Sweaters & Sweatshirts', 'Shorts', 'Sleepwear', "Skirts" , "Suits & blazers" ,"Activewear", "Other men's clothing" , "Jumpsuits & rompers"] },
    'Clothing': { icon: <FaTshirt color=' #9d977a' className="text-lg" />, items: ['Jackets', 'Coats', 'Parkas'] },
    'Shoes': { icon: <GiConverseShoe color=' #9d977a' className="text-lg" />, items: ['Formal Suits', 'Casual Blazers'] },
    'Bags': { icon: <SlHandbag color=' #9d977a' className="text-lg" />, items: ['Chinos', 'Dress Pants', 'Joggers'] },
    'Accessories': { icon: <GiDoubleNecklace  color=' #9d977a' className="text-lg" />, items: ['Socks', 'Boxers', 'Briefs'] },
    'Beauty': { icon: <GiLipstick color=' #9d977a'  className="text-lg" />, items: ['Swim Shorts', 'Swim Trunks'] },
  };


const Navbar = () => {
    const [selectedKey, setSelectedKey] = useState('women'); 
    const [selectedCategory, setSelectedCategory] = useState<string | null>("All"); 

    const menuItems = (
        <Menu style={{ width: '100%', padding: '25px' }}>
        <div className="grid grid-cols-6 gap-3">
          
          {/* Categories List */}
          <div className="col-span-2 border-e border-gray-300">
            {Object.entries(categories).map(([category, { icon }]) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 cursor-pointer py-2 font-medium transition-all ${
                  selectedCategory === category ? ' text-black font-bold' : 'text-primary'
                }`}
              >
                {icon}
                {category}
              </div>
            ))}
          </div>
  
          {/* Items List (Only visible if a category is selected) */}
          <div className="col-span-4 ps-2 pe-6">
            {selectedCategory && categories[selectedCategory].items.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                {categories[selectedCategory].items.map((item) => (
                  <div key={item} className="py-1">
                    <Link href="#" className="text-[#797979] hover:text-primary ">
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-400">Select a category to view items</div>
            )}
          </div>
        </div>
      </Menu>
    );

    return (
        <div className='w-full lg:h-[134px] flex items-center justify-center ' style={{ borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ margin: '0 auto', padding: '0 16px' }} className='container '>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '64px'
                }} className='pt-4'>
                    {/* Left section - Search */}
                    <div style={{ width: '250px' }}>
                        <Input
                            prefix={<BsSearch size={18} color='#797979' />}
                            placeholder='Search for items'
                            style={{
                                border: 'none',
                                borderBottom: '1px solid #000000',
                                borderRadius: '0',
                                height: '42px',
                            }}
                            className='placeholder:text-[#797979] placeholder:text-[14px] placeholder:font-semibold'
                        />
                    </div>

                    {/* Center section - Logo and Navigation */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <Link href="/" style={{
                            fontSize: '36px',
                            fontWeight: 800,
                            textDecoration: 'none'
                        }}
                            className='text-primary'>
                            re-wears
                        </Link>


                    </div>

                    {/* Right section - User actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <p className=' flex items-center gap-1 cursor-pointer'> <span><UserOutlined size={16} /> </span> <span className='text-[14px]'> Log in</span> </p>
                        <p className=' flex items-center gap-1 cursor-pointer'> <span><HeartOutlined size={16} /> </span> <span className='text-[14px]'> Wishlist (0)</span> </p>

                        <CmnButton className='w-[118px] h-[44px]'>    SELL NOW</CmnButton>
                    </div>
                </div>

                <div className='mt-3'>
                    <Menu
                        className='flex   items-center justify-center gap-5'
                        mode="horizontal" 
                        selectedKeys={[selectedKey]}
                        style={{
                            border: 'none',
                            background: 'transparent'
                        }}
                        onSelect={({ key }) => setSelectedKey(key as string)}
                    >
                        <Menu.Item key="women">
                            <Dropdown overlay={menuItems} placement="bottom">
                                <span>WOMEN</span>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item key="men">
                            <Dropdown overlay={menuItems} placement="bottom">
                                <span>MEN</span>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item key="kids">
                            <Dropdown overlay={menuItems} placement="bottom">
                                <span>KIDS</span>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item key="beauty">
                            <Dropdown overlay={menuItems} placement="bottom">
                                <span>BEAUTY/GROOMING</span>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
