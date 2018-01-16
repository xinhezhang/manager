import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',   // column direction
    alignItems: 'center',       // row direction
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',        // 'shadow' is ios specific
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,               // needed for android
    position: 'relative',       // needed for android
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
};

export default Header;
