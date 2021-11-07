import React from 'react';
import dayjs from 'dayjs';
import {View, StyleSheet, Text} from 'react-native';
import {BASE_URL} from 'react-native-dotenv';
import FastImage from 'react-native-fast-image';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';
import {Button} from './Button';
import {Gap} from './Gap';
import {VerificationBadge} from './VerificationBadge';

export type ISupplierCardProps = {
  id: number;
  name: string;
  isVerified: boolean;
  region: string;
  province: string;
  creationDate: string;
  size: string;
  price: number;
  avatar: string;
  onPressDetail: () => void;
};

const SupplierCard: React.FC<ISupplierCardProps> = ({
  id,
  name,
  isVerified,
  region,
  province,
  price,
  size,
  creationDate,
  avatar,
  onPressDetail,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexCenterJustifyContainer}>
        <View style={styles.flexCenterContainer}>
          <FastImage
            source={{uri: `${BASE_URL}/storage/${avatar}`}}
            style={styles.avatar}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Gap width={8} />
          <View>
            <Text style={styles.supplierText}>Supplier</Text>
            <Text style={styles.nameText} numberOfLines={1}>
              {name}
            </Text>
          </View>
        </View>
        <VerificationBadge isVerified={isVerified} />
      </View>
      <Gap height={10} />
      <View>
        <Text style={styles.creationDateText}>
          {dayjs(creationDate).format('D MMMM YYYY')}
        </Text>
        <Gap height={4} />
        <Text style={styles.provinceText}>{province}</Text>
        <Text style={styles.regionText}>{region}</Text>
      </View>
      <Gap height={4} />
      <View style={styles.flexCenterJustifyContainer}>
        <View style={styles.sizePriceContainer}>
          <Text style={styles.sizeText}>size {size}</Text>
          <Text style={styles.priceText} numberOfLines={1}>
            IDR {price}
          </Text>
        </View>
        <Button
          title="LIHAT DETAIL"
          buttonStyle={styles.seeDetailButton}
          onPress={onPressDetail}
        />
      </View>
    </View>
  );
};

export {SupplierCard};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: colors.dark.white,
    padding: normalize(12),
  },
  flexCenterJustifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCenterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.8,
  },
  supplierText: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    color: colors.dust,
  },
  nameText: {
    ...fonts.regular,
    fontSize: normalize(14),
    lineHeight: normalize(20),
    color: colors.dark.darkerGrey,
  },
  avatar: {
    width: normalize(32),
    height: normalize(32),
    borderRadius: normalize(16),
    borderWidth: 1,
    borderColor: colors.dark.white,
  },
  creationDateText: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    color: colors.dust,
  },
  provinceText: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    color: colors.dark.darkerGrey,
  },
  regionText: {
    ...fonts.bold,
    fontSize: normalize(18),
    lineHeight: normalize(24),
    color: colors.dark.darkerGrey,
  },
  sizePriceContainer: {
    flex: 0.6,
  },
  sizeText: {
    ...fonts.regular,
    fontSize: normalize(12),
    lineHeight: normalize(16),
    color: colors.dust,
  },
  priceText: {
    ...fonts.black,
    fontSize: normalize(22),
    lineHeight: normalize(28),
    color: colors.dark.darkerGrey,
  },
  seeDetailButton: {
    flex: 0.4,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(10),
  },
});
