import React from "react";
import { bindActionCreators } from "redux";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Icon, Picker } from "native-base";
import { connect } from "react-redux";
import * as eventActions from "../actions/eventActions";

import argonTheme from "../constants/Theme";
import { theme } from "galio-framework";

class RegionPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.pickedRegion,
      isLoading: false,
      eventList: null,
      pickedRegion: this.props.pickedRegion,
    };
  }
  onValueChange(value) {
    this.props.changeRegion(value);
  }

  render() {
    return (
      <Picker
        mode="dropdown"
        iosHeader="Wybierz region"
        iosIcon={<Icon name="arrow-down" />}
        style={styles.pickerStyle}
        selectedValue={this.props.pickedRegion}
        onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item
          value="RCKiKBialystok"
          label="RCKiK Białystok"
          key="RCKiKBialystok"
        />
        <Picker.Item
          value="RCKiKBydgoszcz"
          label="RCKiK Bydgoszcz"
          key="RCKiKBydgoszcz"
        />
        <Picker.Item
          value="RCKiKGdansk"
          label="RCKiK Gdańsk"
          key="RCKiKGdansk"
        />
        <Picker.Item
          value="RCKiKKalisz"
          label="RCKiK Kalisz"
          key="RCKiKKalisz"
        />
        <Picker.Item
          value="RCKiKKatowice"
          label="RCKiK Katowice"
          key="RCKiKKatowice"
        />

        <Picker.Item
          value="RCKiKKielce"
          label="RCKiK Kielce"
          key="RCKiKKielce"
        />
        <Picker.Item
          value="RCKiKKrakow"
          label="RCKiK Kraków"
          key="RCKiKKrakow"
        />
        <Picker.Item
          value="RCKiKLublin"
          label="RCKiK Lublin"
          key="RCKiKLublin"
        />
        <Picker.Item value="RCKiKLodz" label="RCKiK Łódź" key="RCKiKLodz" />
        <Picker.Item
          value="RCKiKOlsztyn"
          label="RCKiK Olsztyn"
          key="RCKiKOlsztyn"
        />
        <Picker.Item value="RCKiKOpole" label="RCKiK Opole" key="RCKiKOpole" />
        <Picker.Item
          value="RCKiKPoznan"
          label="RCKiK Poznań"
          key="RCKiKPoznan"
        />
        <Picker.Item
          value="RCKiKRaciborz"
          label="RCKiK Racibórz"
          key="RCKiKRaciborz"
        />
        <Picker.Item value="RCKiKRadom" label="RCKiK Radom" key="RCKiKRadom" />
        <Picker.Item
          value="RCKiKRzeszow"
          label="RCKiK Rzeszów"
          key="RCKiKRzeszow"
        />
        <Picker.Item
          value="RCKiKSlupsk"
          label="RCKiK Słupsk"
          key="RCKiKSlupsk"
        />
        <Picker.Item
          value="RCKiKSzczecin"
          label="RCKiK Szczecin"
          key="RCKiKSzczecin"
        />
        <Picker.Item
          value="RCKiKWalbrzych"
          label="RCKiK Wałbrzych"
          key="RCKiKWalbrzych"
        />
        <Picker.Item
          value="RCKiKWroclaw"
          label="RCKiK Wrocław"
          key="RCKiKWroclaw"
        />
        <Picker.Item
          value="RCKiKZielonaGora"
          label="RCKiK Zielona Góra"
          key="RCKiKZielonaGora"
        />
        <Picker.Item value="CKiKMSW" label="CKiK MSW" key="CKiKMSW" />
        <Picker.Item value="WCKiK" label="WCKiK" key="WCKiK" />
        <Picker.Item
          value="RCKiKWarszawa"
          label="RCKiK Warszawa"
          key="RCKiKWarszawa"
        />
      </Picker>
    );
  }
}

// RegionPicker.propTypes = {
//   color: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'error', 'success', 'warning'])
//   ])
// }

const styles = StyleSheet.create({
  pickerStyle: {
    width: 250,
    paddingRight: 10,
    fontFamily: "ArgonExtra",
    color: argonTheme.COLORS.DEFAULT,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    pickedRegion: state.events.pickedRegion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeRegion: (region) => dispatch(eventActions.changeRegion(region)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegionPicker);
