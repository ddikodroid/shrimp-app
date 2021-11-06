import React, {useEffect, useState} from 'react';
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
  const getMoreKabar = useStoreActions(actions => actions.kabar.getMoreKabar);
  const [page, setPage] = useState<number>(2);

  useEffect(() => {
    getKabar();
  }, []);

  useEffect(() => {
    getMoreKabar({page});
  }, [page, getMoreKabar]);

  const renderHeader = () => (
    <>
      <SectionTitle title="Kabar Udang" />
      <Gap height={15} />
    </>
  );
  const renderKabarUdang = ({item}: {item: any}) => {
    return <KabarUdangCard {...item} />;
  };

  const loadMore = () => {
    setPage(page + 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={kabar}
        renderItem={renderKabarUdang}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
        onEndReachedThreshold={0.2}
        onEndReached={loadMore}
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
