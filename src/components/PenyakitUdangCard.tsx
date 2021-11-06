import React from 'react';
import {Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {API_TOKEN, BASE_URL} from 'react-native-dotenv';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-dynamic-vector-icons';
import {useNavigation} from '@react-navigation/core';
import dayjs from 'dayjs';
import {capitalizeFirstLetter, normalize} from '../helpers';
import {colors, fonts} from '../styles';
import {Gap} from './Gap';

export type IPenyakitUdangCardProps = {
  id: number;
  image: string;
  full_name: string;
  created_at: string;
  meta_description: string;
};

const PenyakitUdangCard: React.FC<IPenyakitUdangCardProps> = ({
  id,
  image,
  full_name,
  created_at,
  meta_description,
}) => {
  const navigation = useNavigation();
  const handleShareButton = () => {
    Share.share({
      title: full_name,
      message: `${BASE_URL}/diseases/${id}`,
    });
  };
  const handleOpenWebView = () => {
    navigation.navigate('Info Penyakit', {id});
  };
  console.log(`image url: ${BASE_URL}/${image}`);
  return (
    <Pressable style={styles.container} onPress={handleOpenWebView}>
      <FastImage
        source={{
          uri: `${BASE_URL}/storage/${image}`,
          headers: {Authorization: `Bearer ${API_TOKEN}`},
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        onError={() => console.log('error')}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Gap height={8.5} />
      <View style={styles.body}>
        <Text style={styles.title}>{full_name}</Text>
        <Gap height={4} />
        <Text style={styles.subtitle} numberOfLines={2}>
          {capitalizeFirstLetter(meta_description)}
        </Text>
      </View>
      <Gap height={10} />
      <View style={styles.footer}>
        <Text style={styles.date}>
          {dayjs(created_at).format('D MMMM YYYY')}
        </Text>
        <Icon
          type="Ionicons"
          name="share-social-outline"
          size={normalize(19)}
          color={colors.dark.darkerGrey}
          onPress={handleShareButton}
        />
      </View>
    </Pressable>
  );
};

export {PenyakitUdangCard};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.dark.white,
    borderRadius: normalize(8),
    marginBottom: normalize(12),
  },
  image: {
    width: '100%',
    aspectRatio: 2.05 / 1,
    borderTopLeftRadius: normalize(8),
    borderTopRightRadius: normalize(8),
  },
  body: {
    marginHorizontal: normalize(12),
  },
  title: {
    ...fonts.black,
    color: colors.dark.darkerGrey,
    fontSize: normalize(18),
    lineHeight: normalize(24),
  },
  subtitle: {
    ...fonts.regular,
    color: colors.dark.grey,
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  footer: {
    marginHorizontal: normalize(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(10),
  },
  date: {
    ...fonts.regular,
    color: colors.dark.grey,
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
});
