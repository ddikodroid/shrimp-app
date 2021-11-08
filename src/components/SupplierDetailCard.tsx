import dayjs from 'dayjs';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BASE_URL} from 'react-native-dotenv';
import FastImage from 'react-native-fast-image';
import {ukuranUdang} from '../data/ukuranUdang';
import {normalize} from '../helpers';
import {colors, fonts} from '../styles';
import {ContactInfo} from './ContactInfo';
import {Gap} from './Gap';
import {HargaUdangListItem} from './HargaUdangListItem';
import {VerificationBadge} from './VerificationBadge';

export type ISupplierDetailCardProps = {
  id: number;
  date: string;
  size_20: null | number;
  size_30: null | number;
  size_40: null | number;
  size_50: null | number;
  size_60: null | number;
  size_70: null | number;
  size_80: null | number;
  size_90: null | number;
  size_100: null | number;
  size_110: null | number;
  size_120: null | number;
  size_130: null | number;
  size_140: null | number;
  size_150: null | number;
  size_160: null | number;
  size_170: null | number;
  size_180: null | number;
  size_190: null | number;
  size_200: null | number;
  remark: string | null;
  created_at: string;
  region: {
    name: string;
    province_name: string;
  };
  creator: {
    id: number;
    name: string;
    phone: string;
    email_verified: boolean;
    avatar: string;
  };
};

const SupplierDetailCard: React.FC<ISupplierDetailCardProps> = ({
  id,
  date,
  size_20,
  size_30,
  size_40,
  size_50,
  size_60,
  size_70,
  size_80,
  size_90,
  size_100,
  size_110,
  size_120,
  size_130,
  size_140,
  size_150,
  size_160,
  size_170,
  size_180,
  size_190,
  size_200,
  remark,
  created_at,
  creator,
  region,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={[styles.baseLocationText, styles.provinceText]}>
          {region.province_name}
        </Text>
        <Text style={[styles.baseLocationText, styles.regionText]}>
          {region.name}
        </Text>
      </View>
      <Gap height={4} />
      <View style={styles.subContainer}>
        <View style={styles.flexCenterJustifyContainer}>
          <Text style={styles.creationDateText}>
            {dayjs(created_at).format('D MMMM YYYY')}
          </Text>
          <VerificationBadge isVerified={creator.email_verified} />
        </View>
        <View style={styles.flexCenterJustifyContainer}>
          <View style={styles.flexCenterContainer}>
            <FastImage
              source={{uri: `${BASE_URL}/storage/${creator.avatar}`}}
              style={styles.avatar}
              resizeMode={FastImage.resizeMode.cover}
            />
            <Gap width={8} />
            <View>
              <Text style={styles.supplierText}>Supplier</Text>
              <Text style={styles.nameText} numberOfLines={1}>
                {creator.name}
              </Text>
            </View>
          </View>
        </View>
        <Gap height={4} />
        <ContactInfo contact={creator.phone} />
        <Gap height={16} />
        <Text style={styles.sectionTitle}>Daftar Harga</Text>
        {ukuranUdang.map(ukuran => (
          <HargaUdangListItem
            price={`size_${ukuran}`}
            size={ukuran}
            key={ukuran}
          />
        ))}
        {remark ? (
          <>
            <Text style={styles.sectionTitle}>Catatan</Text>
            <Text style={styles.remarkText}>{remark}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

export {SupplierDetailCard};

const styles = StyleSheet.create({
  container: {},
  subContainer: {
    backgroundColor: colors.white,
    padding: normalize(12),
  },
  baseLocationText: {
    ...fonts.bold,
    fontSize: normalize(14),
    lineHeight: normalize(24),
  },
  provinceText: {
    color: colors.dark.darkerGrey,
  },
  regionText: {
    color: colors.dark.grey,
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
    color: colors.dark.grey,
  },
  nameText: {
    ...fonts.bold,
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
    color: colors.dark.grey,
  },
  sectionTitle: {
    ...fonts.bold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: colors.dark.darkerGrey,
  },
  remarkText: {
    ...fonts.regular,
    fontSize: normalize(14),
    lineHeight: normalize(20),
    color: colors.dark.darkerGrey,
  },
});
