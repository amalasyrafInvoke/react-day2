import React, { Component } from 'react';
import './nav.css';
import logo from '../../assets/logo.svg';
import MenuSection from '../../components/menuSection';
import MenuList from '../../components/menuList';
import icon1 from '../../assets/images/icon_1.png';
import icon2 from '../../assets/images/icon_2.png';
import icon3 from '../../assets/images/icon_3.png';
import icon4 from '../../assets/images/icon_4.png';
import icon5 from '../../assets/images/icon_5.png';
import icon6 from '../../assets/images/icon_6.png';
import icon7 from '../../assets/images/icon_7.png';
import icon8 from '../../assets/images/icon_8.png';
import icon9 from '../../assets/images/icon_9.png';
import icon10 from '../../assets/images/icon_10.png';

export default class Nav extends Component {
  render() {
    return (
      <nav id='navbar'>
        <img src={logo} alt='Logo' height={70} width={70} />
        <MenuSection>
          <MenuList title='New Releases' icon={icon10} />
          <MenuList title='Most Popular' icon={icon2} />
          <MenuList title='Recommended' icon={icon3} />
          <MenuList title='Top Chart' icon={icon3} />
        </MenuSection>
        <MenuSection sectionTitle='My Collection'>
          <MenuList title='Bookmark' icon={icon4} />
          <MenuList title='History' icon={icon10} />
          <MenuList title='Subscriptions' icon={icon6} />
        </MenuSection>
      </nav>
    );
  }
}
