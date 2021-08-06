import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, View } from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import {Icon} from 'native-base';
import {Input} from 'galio-framework'
//import Input from './Input';
import Tabs from './Tabs';
import argonTheme from '../constants/Theme';
import RegionPicker from '../components/RegionPicker'
import { connect } from 'react-redux';
import * as eventActions from "../actions/eventActions";


const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    {/* <Icon
      family="ArgonExtra"
      size={16}
      name="basket"
      color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    /> */}
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={(value) => this.props.searchValue(value)}>
    <Icon
      type="AntDesign"
      name="search1"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showEventList: this.props.showEventList,
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }


  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }
  renderRight = () => {
    const { white, title, navigation } = this.props;
    if (title === 'Title') {
      return [
        <BellButton key='chat-title' navigation={navigation} isWhite={white} />,
        // <BasketButton key='basket-title' navigation={navigation} isWhite={white} />
      ]
    }

    switch (title) {
      case 'Home':
        return ([
        <RegionPicker  key='home-picker'/>
        ]);
      case 'Deals':
        return ([
          <BellButton key='chat-categories' navigation={navigation} />,
          <BasketButton key='basket-categories' navigation={navigation} />
        ]);
      case 'Categories':
        return ([
          <BellButton key='chat-categories' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-categories' navigation={navigation} isWhite={white} />
        ]);
      case 'Category':
        return ([
          <BellButton key='chat-deals' navigation={navigation} isWhite={white} />,
          // <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Profile':
        return ([
          <BellButton key='chat-profile' navigation={navigation} isWhite={white} />,
        ]);
      case 'Product':
        return ([
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />,
        ]);
      case 'Search':
        return ([
          <BellButton key='chat-search' navigation={navigation} isWhite={white} />,
        ]);
      case 'Settings':
        return ([
          <BellButton key='chat-search' navigation={navigation} isWhite={white} />,
        ]);
      default:
        break;
    }
  }
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Block>
        <Input
          right
          color="black"
          style={styles.search}
          placeholder="Wyszukaj akcje"
          placeholderTextColor={'#8898AA'}
          icon="search1"
          family="AntDesign"
          //iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="search-zoom-in" family="AntDesign" onPress={(value) => this.props.searchValue(value)} />}
        />
        {/* <Button color="default" style={styles.button} textStyle={{ color: '#87838B' }}>
                <Icon type="Feather" name="search1" family="AntDesign" onPress={(value) => this.props.searchValue(value)}/>            
        </Button> */}
      </Block>
     

    );
  }
  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;

    //przełączenie między widokiem na punkty stacjonarne i eventy
    return (
      <Block row style={styles.options}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => {this.props.showOneTimeEvents(), navigation.navigate('OneTimeEvents')}}>
          <Block row middle>
            <Icon name="enviroment" type="AntDesign"  
            style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
            <Text size={16} style={styles.tabTitle}>{optionLeft || 'Akcje wyjazdowe'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => {this.props.showStationaryPoints(), navigation.navigate('StationaryPoints')} }>
          <Block row middle>
          <Icon name="enviromento" type="AntDesign" 
           style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON}/>
            <Text size={16} style={styles.tabTitle}>{optionRight || 'Stałe Punkty'}</Text>
          </Block>
        </Button>
      </Block>
    );
  }
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {/* {search ? this.renderSearch() : null}  //wylaczamy search*/}
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  }
  render() {
    const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;

    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    const navbarStyles = [
      styles.navbar,
      bgColor && { backgroundColor: bgColor }
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          left={
            <Icon 
              name={back ? 'chevron-left' : "menu"} family="entypo" 
              size={20} onPress={this.handleLeftPress} 
              color={iconColor || (white ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON)}
              style={{ marginTop: 2 }}
            />
              
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
          titleStyle={[
            styles.title,
            { color: argonTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
  },
  regionPicker: {
    width: 100,
    height: 40
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    showEventList: state.events.showEvents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showOneTimeEvents: () => dispatch(eventActions.showOneTimeEvents()),
    showStationaryPoints: () => dispatch(eventActions.showOneTimeEvents()),
    searchValue: (value) => dispatch(eventActions.searchValue(value))
  };
};

export default withNavigation(connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header));
