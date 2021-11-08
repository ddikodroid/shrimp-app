import React, {useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Share} from 'react-native';
import {BASE_URL} from 'react-native-dotenv';
import Icon from 'react-native-dynamic-vector-icons';
import {SupplierDetailCard} from '../components/SupplierDetailCard';
import {normalize} from '../helpers';
import {colors} from '../styles';

export type IHargaUdangDetailScreenProps = {
  navigation: any;
  route: any;
};

const HargaUdangDetailScreen: React.FC<IHargaUdangDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const {item} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          type="Ionicons"
          name="share-social-outline"
          size={normalize(19)}
          color={colors.white}
          onPress={handleShareButton}
        />
      ),
    });
  });
  const handleShareButton = () => {
    Share.share({
      message: `${BASE_URL}/shrimp_prices/${item.id}`,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SupplierDetailCard {...item} />
      </ScrollView>
    </SafeAreaView>
  );
};

export {HargaUdangDetailScreen};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.light.lighterGrey},
});
