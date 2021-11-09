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
          <MenuList title='Dashboard' icon={icon10} />
          <MenuList title='Conversations' notification={16} icon={icon2} />
          <MenuList title='Calendar' icon={icon3} />
        </MenuSection>
        <MenuSection sectionTitle='Recruitment'>
          <MenuList title='Jobs' icon={icon4} />
          <MenuList title='Candidates' icon={icon10} />
          <MenuList title='Career Site' icon={icon6} />
        </MenuSection>
        <MenuSection sectionTitle='Company'>
          <MenuList title='Team' icon={icon7} />
          <MenuList title='Settings' icon={icon8} />
        </MenuSection>
      </nav>
    );
  }
}
