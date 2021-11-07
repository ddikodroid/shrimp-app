import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FilterFloatingButton} from '../components/FilterFloatingButton';
import {BottomSheetHandle} from '../components/BottomSheetHandle';
import {colors, fonts} from '../styles';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import {ukuranUdang} from '../data/ukuranUdang';
import {debounce, normalize, reverseAddress} from '../helpers';
import Icon from 'react-native-dynamic-vector-icons';
import {useStoreActions, useStoreState} from '../store';
import {TouchableWithoutFeedback} from '@gorhom/bottom-sheet';
import {hargaUdang} from '../data/hargaUdang';
import {SupplierCard} from '../components/SupplierCard';
import {Gap} from '../components/Gap';

export type IHargaUdangScreenProps = {
  navigation: any;
};

const HargaUdangScreen: React.FC<IHargaUdangScreenProps> = ({navigation}) => {
  const [isBottomsheetOpen, setIsBottomsheetOpen] = useState(false);
  const [ukuran, setUkuran] = useState<undefined | number>(undefined);
  const [regionName, setRegionName] = useState<undefined | string>(undefined);
  const [regionId, setRegionId] = useState<null | string>(null);
  const [regionQuery, setRegionQuery] = useState<string>('');

  const regionData = useStoreState(state => state.region.data);
  const searchRegion = useStoreActions(actions => actions.region.searchRegion);
  const debounceSearchRegion = debounce(searchRegion, 75);

  const handleSearchRegion = ({nativeEvent}: any) => {
    const {text} = nativeEvent;
    setRegionQuery(text);
  };

  const setRegionChoice = ({name, id}: {name: string; id: string}) => {
    setRegionName(name);
    setRegionId(id);
    Keyboard?.dismiss();
    regionBottomSheetRef?.current?.close();
    setIsBottomsheetOpen(false);
    console.log(id);
  };

  useEffect(() => {
    debounceSearchRegion({query: regionQuery});
  }, [regionQuery, debounceSearchRegion]);

  const regionBottomSheetRef = useRef<BottomSheet>(null);
  const searchBarRef = useRef<TextInput>(null);
  const regionBottomSheetSnapPoints = useMemo(() => ['75%', '100%'], []);

  const handleCloseRegionBottomSheet = useCallback(() => {
    Keyboard?.dismiss();
    regionBottomSheetRef?.current?.close();
    setIsBottomsheetOpen(false);
  }, []);
  const handleOpenRegionBottomSheet = useCallback(() => {
    sizeBottomSheetRef?.current?.close();
    regionBottomSheetRef?.current?.expand();
    setIsBottomsheetOpen(true);
    // searchBarRef?.current?.focus();
  }, []);

  const renderRegionSearchResult = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          setRegionChoice({
            name: item.full_name,
            id: item.id,
          })
        }>
        <Text numberOfLines={1} style={styles.regionSearchResultText}>
          {reverseAddress(item.full_name)}
        </Text>
      </TouchableWithoutFeedback>
    );
  };

  const sizeBottomSheetRef = useRef<BottomSheet>(null);
  const sizeBottomSheetSnapPoints = useMemo(() => ['75%', '100%'], []);

  const renderUkuranUdang = ({item}: {item: any}) => {
    return (
      <Text
        style={styles.filterSizeChoice}
        onPress={() => {
          setUkuran(item);
          sizeBottomSheetRef?.current?.close();
          setIsBottomsheetOpen(false);
        }}>
        {item}
      </Text>
    );
  };
  const handleCloseSizeBottomSheet = useCallback(() => {
    sizeBottomSheetRef?.current?.close();
    setIsBottomsheetOpen(false);
  }, []);
  const handleOpenSizeBottomSheet = useCallback(() => {
    regionBottomSheetRef?.current?.close();
    sizeBottomSheetRef?.current?.expand();
    setIsBottomsheetOpen(true);
  }, []);

  const renderSizeBottomSheetHandle = useCallback(
    () => (
      <BottomSheetHandle
        title="Size"
        onPressClose={() => handleCloseSizeBottomSheet()}
      />
    ),
    [],
  );

  const renderSupplierCard = ({item}) => (
    <>
      <SupplierCard
        price={100}
        size={'100'}
        id={item.created_by}
        name={item.creator.name}
        region={item.region.name}
        avatar={item.creator.avatar}
        creationDate={item.created_at}
        province={item.region.province_name}
        isVerified={item.creator.email_verified}
        onPressDetail={() => navigation.navigate('Detail Harga Udang', {item})}
      />
      <Gap height={8} />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hargaUdang}
        renderItem={renderSupplierCard}
        contentContainerStyle={styles.contentContainer}
      />
      <BottomSheet
        index={-1}
        ref={regionBottomSheetRef}
        snapPoints={regionBottomSheetSnapPoints}
        style={styles.bottomSheetShadow}
        topInset={StatusBar.currentHeight}
        keyboardBehavior="fillParent">
        <BottomSheetHandle
          title="Kota/Kabupaten"
          onPressClose={() => handleCloseRegionBottomSheet()}>
          <View style={styles.bottomSheetSearchBar}>
            <View style={styles.bottomSheetTextInputContainer}>
              <Icon
                type="Ionicons"
                name="search"
                size={normalize(20)}
                color={colors.light.grey}
                style={styles.searchIcon}
              />
              <BottomSheetTextInput
                ref={searchBarRef}
                style={styles.bottomSheetTextInput}
                placeholder="Cari..."
                placeholderTextColor={colors.light.grey}
                onChange={handleSearchRegion}
              />
            </View>
            <Icon
              type="Ionicons"
              name="close-circle"
              size={normalize(18)}
              color={colors.dark.grey}
              onPress={() => searchBarRef?.current?.clear()}
            />
          </View>
        </BottomSheetHandle>
        <BottomSheetFlatList
          data={regionData}
          renderItem={renderRegionSearchResult}
          contentContainerStyle={styles.filterSizeContentContainer}
        />
      </BottomSheet>
      <BottomSheet
        index={-1}
        ref={sizeBottomSheetRef}
        snapPoints={sizeBottomSheetSnapPoints}
        style={styles.bottomSheetShadow}
        topInset={StatusBar.currentHeight}>
        {renderSizeBottomSheetHandle()}
        <BottomSheetFlatList
          data={ukuranUdang}
          renderItem={renderUkuranUdang}
          contentContainerStyle={styles.filterSizeContentContainer}
        />
      </BottomSheet>
      {isBottomsheetOpen ? null : (
        <FilterFloatingButton
          size={ukuran}
          region={regionName ? reverseAddress(regionName) : undefined}
          onPressRegion={handleOpenRegionBottomSheet}
          onPressSize={handleOpenSizeBottomSheet}
        />
      )}
    </SafeAreaView>
  );
};

export {HargaUdangScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  filterSizeChoice: {
    ...fonts.regular,
    color: colors.dark.darkerGrey,
    backgroundColor: colors.white,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(10),
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
  filterSizeContentContainer: {
    paddingBottom: normalize(16),
  },
  bottomSheetShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  bottomSheetSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(8),
  },
  bottomSheetTextInput: {
    flex: 1,
    color: colors.dark.darkerGrey,
    fontSize: normalize(16),
  },
  bottomSheetTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light.lighterGrey,
    borderWidth: 1,
    borderColor: colors.dark.white,
    borderRadius: normalize(8),
    width: '90%',
    overflow: 'hidden',
    paddingHorizontal: normalize(4),
  },
  regionSearchResultText: {
    ...fonts.regular,
    fontSize: normalize(14),
    lineHeight: normalize(20),
    color: colors.dark.darkerGrey,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(12),
  },
  searchIcon: {marginRight: normalize(2)},
  contentContainer: {
    padding: normalize(16),
    paddingBottom: normalize(64),
  },
});
