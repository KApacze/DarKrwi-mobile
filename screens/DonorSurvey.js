import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  TextInput,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import Dialog, {
  DialogContent,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";

import { Text, Input, Form, Picker } from "native-base";
import CheckBox from "@react-native-community/checkbox";
//galio
import { Block, theme, Button, Icon } from "galio-framework";
//argon
import { argonTheme } from "../constants";
import { survey } from "../constants/form";
import DateField from "react-native-datefield";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class DonorSurvey extends React.Component {
  state = {
    index: 0,
    currentSurvey: survey,
    visible: false,
  };

  nextPart = () => {
    if (this.state.index < this.state.currentSurvey.length - 1) {
      this.setState({ index: this.state.index + 1 });
      this.setState({ submitButton: false });
    } else {
      this.setState({ visible: true });
    }
  };

  prevPart = () => {
    if (this.state.index > 0) this.setState({ index: this.state.index - 1 });
    this.setState({ visible: false });
  };

  componentDidMount = () => {};

  sendForm = () => {
    //TODO send and redirect
    console.log(this.state.currentSurvey);
  };

  updateValue = (value, index) => {
    let newSurvey = this.state.currentSurvey;
    newSurvey[this.state.index].data[index].value = value;
    this.setState({ currentSurvey: newSurvey });
  };
  updateAddValue = (value, index) => {
    let newSurvey = this.state.currentSurvey;
    newSurvey[this.state.index].data[index].addValue = value;
    this.setState({ currentSurvey: newSurvey });
  };

  render() {
    // if (this.state.index >= this.state.currentSurvey.length) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (
      <View style={{ flex: 1 }}>
        <Text h5 style={styles.title} color={argonTheme.COLORS.DEFAULT}>
          {this.state.currentSurvey[this.state.index].subName}
        </Text>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={true}
        >
          <Form>
            {this.state.currentSurvey[this.state.index].data.map((item, i) => {
              if (item.visible == true) {
                if (item.type == `checkbox`)
                  return (
                    <Block row style={styles.card}>
                      <CheckBox
                        disabled={false}
                        key={i}
                        value={
                          this.state.currentSurvey[this.state.index].data[i]
                            .value
                        }
                        onValueChange={(newValue) =>
                          this.updateValue(newValue, i)
                        }
                      />
                      <Text style={{ paddingLeft: 20 }}>{item.text}</Text>
                    </Block>
                  );
                else if (item.type == `text`)
                  return (
                    <Block style={styles.card}>
                      <Text key={i}>{item.text}</Text>
                    </Block>
                  );
                else if (item.type == `text-input`)
                  return (
                    <Block style={styles.card}>
                      <Text>{item.text}</Text>
                      <Input
                        key={i}
                        variant="rounded"
                        style={styles.inputStyle}
                        value={
                          this.state.currentSurvey[this.state.index].data[i]
                            .value
                        }
                        onChangeText={(newValue) =>
                          this.updateValue(newValue, i)
                        }
                      />
                    </Block>
                  );
                else if (item.type == `date-input`) {
                  return (
                    <Block style={styles.card}>
                      <Text>{item.text}</Text>
                      <DateField
                        key={i}
                        defaultValue={new Date()}
                        styleInput={styles.dataInput}
                        containerStyle={styles.inputStyle}
                        onSubmit={(newValue) => this.updateValue(newValue, i)}
                      />
                    </Block>
                  );
                } else if (item.type == `number-input`) {
                  return (
                    <Block style={styles.card}>
                      <Text>{item.text}</Text>
                      <TextInput
                        key={i}
                        style={styles.inputStyle}
                        numeric
                        keyboardType={"numeric"}
                        value={
                          this.state.currentSurvey[this.state.index].data[i]
                            .value
                        }
                        onChangeText={(newValue) =>
                          this.updateValue(newValue, i)
                        }
                      />
                    </Block>
                  );
                } else if (item.type == `select`) {
                  return (
                    <Block style={styles.card}>
                      <Text>{item.text}</Text>
                      <View
                        style={{
                          borderColor: "gray",
                          borderWidth: 2,
                          borderRadius: 20,
                          margin: 2,
                        }}
                      >
                        <Picker
                          key={i}
                          mode="dropdown"
                          onChange={(newValue) => this.updateValue(newValue, i)}
                          style={styles.inputStyle}
                          itemStyle={{
                            backgroundColor: "grey",
                            color: "blue",
                            fontFamily: "Ebrima",
                            fontSize: 17,
                          }}
                          selectedValue={
                            this.state.currentSurvey[this.state.index].data[i]
                              .value
                          }
                        >
                          {item.values.map((val) => (
                            <Picker.Item
                              value={val}
                              label={val}
                              key={val}
                              style={styles.inputStyle}
                            />
                          ))}
                        </Picker>
                      </View>
                    </Block>
                  );
                } else if (item.type == `radio`) {
                  return (
                    <Block style={styles.card}>
                      <Text>{item.text}</Text>
                      <RadioButtonRN
                        key={`${i}-radio`}
                        boxStyle={styles.inputStyle}
                        data={item.values.map((val) => ({ label: val }))}
                        selectedBtn={(newValue) =>
                          this.updateValue(newValue.label, i)
                        }
                      />
                    </Block>
                  );
                } else if (item.type == `radio-and-input`) {
                  return (
                    <Block style={styles.card}>
                      <Text>{item.text}</Text>
                      <RadioButtonRN
                        key={`${i}-radio`}
                        data={item.values.map((val) => ({ label: val }))}
                        boxStyle={styles.inputStyle}
                        selectedBtn={(newValue) =>
                          this.updateValue(newValue.label, i)
                        }
                      />
                      <Input
                        key={i}
                        variant="rounded"
                        style={styles.inputStyle}
                        value={
                          this.state.currentSurvey[this.state.index].data[i]
                            .addValue
                        }
                        onChangeText={(newValue) =>
                          this.updateAddValue(newValue, i)
                        }
                      />
                      <View
                        style={{
                          paddingTop: theme.SIZES.BASE,
                          borderBottomColor: "gray",
                          borderBottomWidth: 1,
                        }}
                      />
                    </Block>
                  );
                }
              }
            })}
          </Form>
        </ScrollView>
        <View>
          <Block row center>
            <Button
              onPress={() => this.prevPart()}
              disabled={this.state.index == 0 ? true : false}
            >
              <Block row>
                <Icon
                  name="left"
                  family="AntDesign"
                  size={30}
                  color={"white"}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
              </Block>
            </Button>

            <Button onPress={() => this.nextPart()}>
              <Block row>
                <Icon
                  name="right"
                  family="AntDesign"
                  size={30}
                  color={"white"}
                  style={{ marginTop: 2, marginRight: 5 }}
                />
              </Block>
            </Button>

            <Dialog
              visible={this.state.visible}
              onTouchOutside={() => {
                this.setState({ visible: false });
              }}
              footer={
                <DialogFooter>
                  <DialogButton
                    text="Anuluj"
                    onPress={() => {
                      this.setState({ visible: false });
                    }}
                  />
                  <DialogButton
                    text="Wyślij"
                    onPress={() => {
                      this.sendForm();
                    }}
                  />
                </DialogFooter>
              }
            >
              <DialogContent>
                <Text>
                  Czy chcesz wysłać formularz? Po wysłaniu formularza nie można
                  edytować?
                </Text>
              </DialogContent>
            </Dialog>
          </Block>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 10,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonBlock: {
    flex: 1,
    justifyContent: "flex-end",
  },
  navigateButton: {
    width: "49%",
    height: 40,
  },
  scrollView: {
    //width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  card: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE,
  },
  inputStyle: {
    backgroundColor: "white",
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
    paddingLeft: theme.SIZES.BASE * 2,
    paddingRight: theme.SIZES.BASE * 2,

    borderWidth: 2,
    borderRadius: 20,
    margin: 2,
    marginTop: 10,
    borderColor: argonTheme.COLORS.BORDER,
  },
});

export default DonorSurvey;
