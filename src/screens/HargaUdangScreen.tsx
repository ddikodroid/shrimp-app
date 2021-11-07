import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
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
import {normalize} from '../helpers';
import Icon from 'react-native-dynamic-vector-icons';

export type IHargaUdangScreenProps = {};

const HargaUdangScreen: React.FC<IHargaUdangScreenProps> = ({}) => {
  const [isBottomsheetOpen, setIsBottomsheetOpen] = useState(false);
  const [ukuran, setUkuran] = useState<undefined | number>(undefined);

  const regionBottomSheetRef = useRef<BottomSheet>(null);
  const searchBarRef = useRef(null);
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
    searchBarRef?.current?.focus();
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
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
                style={{marginRight: normalize(2)}}
              />
              <BottomSheetTextInput
                ref={searchBarRef}
                style={styles.bottomSheetTextInput}
                placeholder="Cari..."
                placeholderTextColor={colors.light.grey}
              />
            </View>
            <Icon
              type="Ionicons"
              name="close-circle"
              size={normalize(18)}
              color={colors.dark.grey}
            />
          </View>
        </BottomSheetHandle>
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
});
