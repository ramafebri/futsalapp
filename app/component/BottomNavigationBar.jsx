import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

const BottomNavigationBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label = options.tabBarLabel;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View style={styles.view} key={route.name}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}>
              <View
                style={{
                  ...styles.button,
                }}>
                <options.tabBarIcon color={isFocused ? '#FFFFFF' : '#c4c4c4'} />
                <Text
                  style={{
                    color: isFocused ? '#FFFFFF' : '#c4c4c4',
                    fontSize: 13,
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
};

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    width,
    backgroundColor: '#006F57',
    alignItems: 'center',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  view: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#006F57',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
});

export default BottomNavigationBar;
