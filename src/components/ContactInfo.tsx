import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';
import {Button} from './Button';

export type IContactInfoProps = {
  contact: string;
};

const ContactInfo: React.FC<IContactInfoProps> = ({contact}) => {
  const handleContactButton = () => {
    Linking.openURL(`tel://${contact}`);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.phoneTitle}>Kontak</Text>
        <Text style={styles.phoneText}>{contact}</Text>
      </View>
      <Button
        title="Hubungi"
        buttonStyle={styles.callButton}
        onPress={handleContactButton}
      />
    </View>
  );
};

export {ContactInfo};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phoneTitle: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    color: colors.dark.grey,
  },
  phoneText: {
    ...fonts.bold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: colors.dark.darkerGrey,
  },
  callButton: {
    flex: 0.4,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(10),
  },
});
