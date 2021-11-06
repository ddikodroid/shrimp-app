import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {Gap} from '../components/Gap';
import {KabarUdangCard} from '../components/KabarUdangCard';
import {SectionTitle} from '../components/SectionTitle';
import {normalize} from '../helpers';
import {useStoreActions, useStoreState} from '../store';
import {colors} from '../styles';

export type IKabarUdangScreenProps = {};

const KabarUdangScreen: React.FC<IKabarUdangScreenProps> = ({}) => {
  const kabar = useStoreState(state => state.kabar.data);
  const getKabar = useStoreActions(actions => actions.kabar.getKabar);

  useEffect(() => {
    getKabar();
  }, []);

  const renderHeader = () => (
    <>
      <SectionTitle title="Kabar Udang" />
      <Gap height={15} />
    </>
  );
  const renderKabarUdang = ({item}: {item: any}) => (
    <KabarUdangCard {...item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={kabar}
        renderItem={renderKabarUdang}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export {KabarUdangScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    marginVertical: normalize(15),
    marginHorizontal: normalize(16),
    paddingBottom: normalize(16),
  },
});
