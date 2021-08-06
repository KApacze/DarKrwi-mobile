import React from "react";
import { View } from "react-native";
import { Card, CardItem, Text, Button, Icon, Left, Body } from "native-base";
import { Block } from "galio-framework";
import { Component } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Container, Header, Content, Thumbnail, Right } from "native-base";
import { theme } from "galio-framework";
import Dialog, {
  DialogContent,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export class EventCard extends React.Component {
  state = {
    hidden: true, //simple or full card
    element: null,
    showMap: false,
  };

  componentDidMount = () => {
    this.setState({ element: this.props.object }, () =>
      console.log("object", this.props.object)
    );
  };

  renderIcon = () => {
    if (this.state.hidden == true) return "arrow-down";
    else return "arrow-up";
  };

  renderIcon = () => {
    if (this.state.hidden == true) return "arrow-down";
    else return "arrow-up";
  };

  renderMoreInfo = () => {
    if (!this.state.hidden) {
      return (
        <CardItem>
          <Block row>
            <CardItem>
              <Body>
                <Text>
                  {`${this.props.object.time.timeFrom.substr(
                    11,
                    5
                  )}-${this.props.object.time.timeTo.substr(11, 5)}`}
                </Text>
                <Text>{this.props.object.place.street}</Text>
                <Text>{this.props.object.description}</Text>
              </Body>
            </CardItem>
          </Block>
        </CardItem>
      );
    }
  };

  render() {
    let moreInfo = this.renderMoreInfo();

    return (
      <View style={styles.container}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Icon type="AntDesign" name="enviroment" />
              <Body>
                <Text>{this.props.object.name}</Text>
                <Block row>
                  <Text note>{this.props.object.time.date.substr(0, 10)}</Text>
                  <Text note> {this.props.object.place.city}</Text>
                </Block>
              </Body>
              <CardItem>
                <Icon
                  name={this.renderIcon()}
                  button
                  onPress={() => {
                    this.setState({ hidden: !this.state.hidden });
                    console.log(this.state.hidden);
                  }}
                />
              </CardItem>
            </Left>
          </CardItem>

          {moreInfo}
          <CardItem style={{ align: "left" }}>
            <Left>
              <Button
                transparent
                textStyle={{ color: "#87838B" }}
                onPress={() => {
                  this.setState({ showMap: true });
                  console.log("setting state");
                }}
              >
                <Icon type="Feather" name="map" />
                <Text>Sprawdź na mapie</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
        <Dialog
          visible={this.state.showMap}
          onTouchOutside={() => {
            this.setState({ showMap: false });
          }}
          footer={
            <DialogFooter>
              <DialogButton
                text="Wyjdź"
                onPress={() => {
                  this.setState({ showMap: false });
                }}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            <MapView
              style={{
                width: 400,
                height: 400,
              }}
              region={{
                latitude: this.props.object.geoLocation.geometry.coordinates[0],
                longitude:
                  this.props.object.geoLocation.geometry.coordinates[1],
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                key={this.props.object._id}
                coordinate={{
                  latitude:
                    this.props.object.geoLocation.geometry.coordinates[0],
                  longitude:
                    this.props.object.geoLocation.geometry.coordinates[1],
                }}
                title={this.props.object.name}
                description={`${this.props.object.place.street}, ${this.props.object.place.city}`}
              />
            </MapView>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}

EventCard.propTypes = {
  object: PropTypes.shape({
    place: PropTypes.object,
    place: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
    }),
    time: PropTypes.object,
  }),
};
export default EventCard;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "white",
  },
});
