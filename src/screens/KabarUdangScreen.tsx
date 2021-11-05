import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {Gap} from '../components/Gap';
import {KabarUdangCard} from '../components/KabarUdangCard';
import {SectionTitle} from '../components/SectionTitle';
import {normalize} from '../helpers';

export type IKabarUdangScreenProps = {};

const kabarUdang = [
  {
    id: 124,
    author_id: 13802,
    category_id: 1,
    image: 'posts/November2021/IFUtY4gc4oAHGM6cMdPX.jpg',
    status: 'PUBLISHED',
    featured: false,
    advertisement: null,
    created_at: '2021-11-05 07:30:00',
    updated_at: '2021-11-05 07:50:13',
    title: 'Mengenal BGA, Kelompok Plankton yang Wajib Diwaspadai',
    seo_title: 'Kenali dan Kontrol BGA di Tambak',
    excerpt:
      'BGA memiliki beberapa potensi mengganggu jalannya budidaya saat terjadi ledakan populasi. Bagaimana cara menanggulanginya?',
  },
  {
    id: 123,
    author_id: 13802,
    category_id: 1,
    image: 'posts/November2021/IFUtY4gc4oAHGM6cMdPX.jpg',
    status: 'PUBLISHED',
    featured: false,
    advertisement: null,
    created_at: '2021-11-05 07:30:00',
    updated_at: '2021-11-05 07:50:13',
    title: 'Mengenal BGA, Kelompok Plankton yang Wajib Diwaspadai',
    seo_title: 'Kenali dan Kontrol BGA di Tambak',
    excerpt:
      'BGA memiliki beberapa potensi mengganggu jalannya budidaya saat terjadi ledakan populasi. Bagaimana cara menanggulanginya?',
  },
  {
    id: 122,
    author_id: 13802,
    category_id: 1,
    image: 'posts/November2021/IFUtY4gc4oAHGM6cMdPX.jpg',
    status: 'PUBLISHED',
    featured: false,
    advertisement: null,
    created_at: '2021-11-05 07:30:00',
    updated_at: '2021-11-05 07:50:13',
    title: 'Mengenal BGA, Kelompok Plankton yang Wajib Diwaspadai',
    seo_title: 'Kenali dan Kontrol BGA di Tambak',
    excerpt:
      'BGA memiliki beberapa potensi mengganggu jalannya budidaya saat terjadi ledakan populasi. Bagaimana cara menanggulanginya?',
  },
];

const KabarUdangScreen: React.FC<IKabarUdangScreenProps> = ({}) => {
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
        data={kabarUdang}
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
  },
  contentContainer: {
    marginVertical: normalize(15),
    marginHorizontal: normalize(16),
    paddingBottom: normalize(16),
  },
});
