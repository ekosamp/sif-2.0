import React from 'react'
import NavBar, {NavItem, NavLink, Submenu, ExpandButton} from '../../ui/navbar'
import {MobileMenuWrap} from './mobilemenu.style'
import {getClosest, getSiblings} from '../../../utils/utilFunctions'

export const MobileMenu = ({menuData}) => {

    const removeClassFromChildren = (parent) => {
        for (let i = 0; i < parent.children.length; i++) {
            if(parent.children[i].tagName === 'UL'){
                let child = parent.children[i].children;
                for(let j = 0; j < child.length; j++){
                    child[j].classList.remove('submenu-open')
                }
            }
        }
    } 

    const onClickHandler = (e, selector) => {
        const target = e.target;
        const parentEl = target.parentElement;
        if(parentEl.classList.contains('menu-expand') || target.classList.contains('menu-expand')){
            let element = target.classList.contains('icon') ? parentEl : target;
            const parent = getClosest(element, selector);
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach(sibling => {
                sibling.classList.remove('submenu-open');
                removeClassFromChildren(sibling);
            });
            removeClassFromChildren(parent)
            parent.classList.toggle('submenu-open');
        }
        
    }

    const menuarr = menuData;

    return (
        <MobileMenuWrap>
            <NavBar>
                {menuarr.map((menu, i) => {
                    const hasSubmenu = menu.node.isSubmenu ? true : null;
                    const hasMegamenu = menu.node.isMegamenu ? true : null;
                    const submenu = menu.node.submenu;
                    // const megamenu = menu.node.megamenu;
                    const menuIndex = i;
                    return(
                        <NavItem 
                            key={`mainmenu-${menu.node.id}`} 
                            hasSubmenu={hasSubmenu} 
                            hasMegamenu={hasMegamenu} 
                            className="menu-item" 
                            id={`menu-item-${menuIndex}`}>

                            <NavLink path={menu.node.link}>{menu.node.text}</NavLink>
                            {(hasSubmenu || hasMegamenu) && (
                                <ExpandButton onClick={(e) => onClickHandler(e, `#menu-item-${menuIndex}`)}/>
                            )}

                            {submenu && (
                                <Submenu>
                                    {submenu.map((subitem, j) => {
                                        const hasSubmenuLevelTwo = subitem.isSubmenu;
                                        const submenuLevelTwo = subitem.submenu;
                                        const submenuIndex = j;
                                        return(
                                            <NavItem 
                                            key={`submenu-${menu.node.id}-${submenuIndex}`}
                                            className="menu-item" 
                                            id={`submenu-item-${menuIndex}${submenuIndex}`}>

                                                <NavLink path={subitem.link}>{subitem.text}</NavLink>
                                                {hasSubmenuLevelTwo && <ExpandButton onClick={(e) => onClickHandler(e, `#submenu-item-${menuIndex}${submenuIndex}`)}/>}
                                                {submenuLevelTwo && (
                                                    <Submenu>
                                                        {submenuLevelTwo.map((subitemLevelTwo, k) => {
                                                            const subsubmenuIndex = k;
                                                            return(
                                                                <NavItem 
                                                                key={`submenu-${menu.node.id}-${submenuIndex}-${subsubmenuIndex}`}
                                                                className="menu-item" 
                                                                id={`submenu-item-${menuIndex}${submenuIndex}${subsubmenuIndex}`}>
                                                                    <NavLink path={subitemLevelTwo.link}>{subitemLevelTwo.text}</NavLink>
                                                                </NavItem>
                                                            )
                                                        })}
                                                    </Submenu>
                                                )}
                                            </NavItem>
                                        )
                                    })}
                                </Submenu>
                            )}

                        </NavItem>
                    )
                })}
            </NavBar>
        </MobileMenuWrap>
    )
}
