import React, {useLayoutEffect} from 'react';
import {Share, View, StyleSheet, ActivityIndicator} from 'react-native';
import {BASE_URL} from 'react-native-dotenv';
import Icon from 'react-native-dynamic-vector-icons';
import WebView from 'react-native-webview';
import {normalize} from '../helpers';
import {colors} from '../styles';

export type IInfoPenyakitScreenProps = {
  navigation: any;
  route: any;
};

const InfoPenyakitScreen: React.FC<IInfoPenyakitScreenProps> = ({
  navigation,
  route,
}) => {
  const {id} = route.params;
  const uri = `${BASE_URL}/web_view/diseases/${id}`;

  const handleShareButton = () => {
    Share.share({
      message: `${BASE_URL}/diseases/${id}`,
    });
  };

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

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
  return (
    <WebView
      source={{uri}}
      containerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      renderLoading={renderLoading}
    />
  );
};

export {InfoPenyakitScreen};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    margin: normalize(16),
    borderRadius: normalize(8),
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
