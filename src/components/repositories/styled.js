import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 50%;
`;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;
WrapperTabList.tabsRole = "Tablist";


export const WrapperTab = styled(Tab)`
border-radius: 16px;
padding: 10px;
border: 1px solid black;
user-select: none;
cursor: pointer;
margin: 8px;
background-color: orange;
border: 2px solid coral;


&:focus {
    outline: none;
}

&.is-selected {
    border-color: aqua;
    box-shadow: 10px 3px 14.5em rgba(0,0,0,0.3);
 } 


`;
WrapperTabList.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel)`
padding: 8px;
display: none;
margin-top: -5px;
border-color: 2px solid black;


&.is-selected{
    display:block;

} 


`;
WrapperTabList.tabsRole = "Tabpanel";

export const WrapperList = styled.div`
display: flex;
justify-content: space-between;
flex-Wrap: wrap;
`;