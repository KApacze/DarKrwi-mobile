import React from "react";
import { StyleSheet, Dimensions, ScrollView, Text, View } from "react-native";
import { Block, theme, Button } from "galio-framework";
import * as sp from "../constants/stationaryPoints";
import PointCard from "../components/PointCard";
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

class StationaryPoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      pointList: [],
      pickedRegion: this.props.pickedRegion,
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    sp.getPointsByRegion(this.props.pickedRegion).then(
      (result) => this.setState({ pointList: result }),
      this.setState({ isLoading: false })
    );
  };

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  checksSearchMatch = () => {};

  render() {
    const { navigation, optionLeft, optionRight } = this.props;

    sp.getPointsByRegion(this.props.pickedRegion).then((result) => {
      //console.log("value ", this.props.searchValue)
      if (this.props.searchValue == "") this.setState({ pointList: result });
      else {
        fillteredResult = result.filter((key) => {
          if (
            key.description
              .toLowerCase()
              .includes(this.props.searchValue.toLowerCase()) ||
            key.place.street
              .toLowerCase()
              .includes(this.props.searchValue.toLowerCase()) ||
            key.place.city
              .toLowerCase()
              .includes(this.props.searchValue.toLowerCase())
          ) {
            return key;
          }
          this.setState({ pointList: fillteredResult });
        });
        //this.setState({pointList: result})
      }
    });

    return (
      <Block flex center style={styles.StationaryPoints}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.articles}
        >
          {this.state.pointList.map(
            (element, i) => (
              <Block>
                <PointCard object={element} />
              </Block>
            ),
            () => {
              //console.log("element", element);
              //console.log("array[]", this.state.pointList[i])
            }
          )}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  StationaryPoints: {
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
    borderColor: "red",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
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
    searchValue: state.events.searchValue,
  };
};

export default connect(mapStateToProps)(StationaryPoints);
