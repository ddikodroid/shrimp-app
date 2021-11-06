import React from 'react';
import {Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {API_TOKEN, BASE_URL} from 'react-native-dotenv';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-dynamic-vector-icons';
import {normalize} from '../helpers/';
import {colors, fonts} from '../styles';
import {Gap} from './Gap';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/core';
export type IKabarUdangCardProps = {
  id: number;
  image: string;
  title: string;
  created_at: string;
  excerpt: string;
};

const KabarUdangCard: React.FC<IKabarUdangCardProps> = ({
  id,
  image,
  title,
  created_at,
  excerpt,
}) => {
  const navigation = useNavigation();
  const handleShareButton = () => {
    Share.share({
      title,
      message: `${BASE_URL}/posts/${id}`,
    });
  };
  const handleOpenWebView = () => {
    navigation.navigate('Detail Kabar Udang', {id});
  };
  return (
    <Pressable style={styles.container} onPress={handleOpenWebView}>
      <FastImage
        source={{
          uri: `${BASE_URL}/storage/${image}`,
          headers: {Authorization: `Bearer ${API_TOKEN}`},
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Gap height={8.5} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={4} />
        <Text style={styles.subtitle} numberOfLines={2}>
          {excerpt}
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

export {KabarUdangCard};

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
