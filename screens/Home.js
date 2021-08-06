import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text, View } from 'react-native';
import { Block, theme, Button } from 'galio-framework';
import {Icon} from 'native-base';
import argonTheme from '../constants/Theme';
import * as ote from '../constants/oneTimeEvents';


import EventCard from "../components/EventCard";
import { connect } from 'react-redux';


const { width } = Dimensions.get('screen');

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    isLoading: false,
    eventList: [],
    pickedRegion: this.props.pickedRegion,
    };
  }
  

  componentDidMount = () => {
    this.setState({isLoading: true})
    this.getOneTimeEventsList();
    
    
    
  }

  getOneTimeEventsList = () => {
    ote.getEventsByRegion(this.props.pickedRegion).then( (result) => { 
      this.setState({eventList: result})

    });
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  displayCards() {
    return <Block>
         {this.state.eventList.map( (element, i) =>
              <Block>
                <EventCard object={element}/>  
                </Block>,
                () => 
              {
                  // console.log("element", element);
                  // console.log("array[]", this.state.eventList[i])
                }
                )
              } 
    </Block>
  }

  render() {

    const { navigation, optionLeft, optionRight } = this.props;
    
    if(this.props.showEvents == true) {
      ote.getEventsByRegion(this.props.pickedRegion).then( (result) => { 
      this.setState({eventList: result}) });
      }
    
    return (  
      <Block flex center style={styles.home}>
          <ScrollView
             showsVerticalScrollIndicator={false}
             contentContainerStyle={styles.articles}>    
           
              {this.state.eventList.map( (element, i) =>
              <Block>
                <EventCard object={element}/>  
                </Block>,
                () => 
              {
              //  console.log("element", element);
              //  console.log("array[]", this.state.eventList[i])
              }
                )
              } 
      </ScrollView>
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  regionPicker: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
});


const mapStateToProps = (state, ownProps) => {
  return {
    pickedRegion: state.events.pickedRegion,
    showEvents: state.events.showEvents
  };
};

export default connect(mapStateToProps)(Home);
