import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Gap} from '../components/Gap';
import {PenyakitUdangCard} from '../components/PenyakitUdangCard';
import {SectionTitle} from '../components/SectionTitle';
import {normalize} from '../helpers';
import {useStoreActions, useStoreState} from '../store';
import {colors} from '../styles';

export type IDaftarPenyakitScreenProps = {};

const DaftarPenyakitScreen: React.FC<IDaftarPenyakitScreenProps> = ({}) => {
  const penyakit = useStoreState(state => state.penyakit.data);
  const getPenyakit = useStoreActions(actions => actions.penyakit.getPenyakit);

  useEffect(() => {
    getPenyakit();
  }, []);

  const renderHeader = () => (
    <>
      <SectionTitle title="Daftar Penyakit" />
      <Gap height={15} />
    </>
  );
  const renderPenyakitUdang = ({item}: {item: any}) => (
    <PenyakitUdangCard {...item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={penyakit}
        renderItem={renderPenyakitUdang}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export {DaftarPenyakitScreen};

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
