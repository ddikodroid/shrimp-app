import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../components/Gap';
import {PenyakitUdangCard} from '../components/PenyakitUdangCard';
import {SectionTitle} from '../components/SectionTitle';
import {normalize} from '../helpers';
import {colors} from '../styles';

export type IDaftarPenyakitScreenProps = {};
const penyakitUdang = [
  {
    id: 1,
    full_name: 'Acute Hepatopancreatic Necrosis Disease',
    image: 'diseases/July2019/XyZZxDBZL7IYxG1LXoGr.png',
    meta_description:
      'udang yang mengalami penyakit AHPND menunjukkan kosongnya saluran pencernaan dan hepatopankreas berwarna pucat dan mengecil., kulit menjadi lunak, bintik hitam pada hepatopankreas, kematian pada hari ke-10 setelah tebar, dan udang yang lemas tenggelam didasar kolam',
    created_at: '2019-07-12 20:02:00',
  },
  {
    id: 2,
    full_name: 'Acute Hepatopancreatic Necrosis Disease',
    image: 'diseases/July2019/XyZZxDBZL7IYxG1LXoGr.png',
    meta_description:
      'udang yang mengalami penyakit AHPND menunjukkan kosongnya saluran pencernaan dan hepatopankreas berwarna pucat dan mengecil., kulit menjadi lunak, bintik hitam pada hepatopankreas, kematian pada hari ke-10 setelah tebar, dan udang yang lemas tenggelam didasar kolam',
    created_at: '2019-07-12 20:02:00',
  },
];

const DaftarPenyakitScreen: React.FC<IDaftarPenyakitScreenProps> = ({}) => {
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
        data={penyakitUdang}
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
