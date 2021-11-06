import React, {useMemo, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FilterFloatingButton} from '../components/FilterFloatingButton';
import {BottomSheetHandle} from '../components/BottomSheetHandle';
import {colors, fonts} from '../styles';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {ukuranUdang} from '../data/ukuranUdang';
import {normalize} from '../helpers';

export type IHargaUdangScreenProps = {};

const HargaUdangScreen: React.FC<IHargaUdangScreenProps> = ({}) => {
  const [isBottomsheetOpen, setIsBottomsheetOpen] = useState(false);
  const [ukuran, setUkuran] = useState<undefined | number>(undefined);

  const regionBottomSheetRef = useRef<BottomSheet>(null);
  const regionBottomSheetSnapPoints = useMemo(() => ['75%', '100%'], []);

  const handleCloseRegionBottomSheet = () => {
    regionBottomSheetRef?.current?.close();
    setIsBottomsheetOpen(false);
  };
  const renderRegionBottomSheetHandle = () => (
    <BottomSheetHandle
      title="Kota/Kabupaten"
      onPressClose={() => handleCloseRegionBottomSheet()}
    />
  );

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
  const handleCloseSizeBottomSheet = () => {
    sizeBottomSheetRef?.current?.close();
    setIsBottomsheetOpen(false);
  };
  const renderSizeBottomSheetHandle = () => (
    <BottomSheetHandle
      title="Size"
      onPressClose={() => handleCloseSizeBottomSheet()}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        index={-1}
        ref={regionBottomSheetRef}
        snapPoints={regionBottomSheetSnapPoints}
        handleComponent={renderRegionBottomSheetHandle}>
        <View>
          <Text>Test</Text>
        </View>
      </BottomSheet>
      <BottomSheet
        index={-1}
        ref={sizeBottomSheetRef}
        snapPoints={sizeBottomSheetSnapPoints}
        handleComponent={renderSizeBottomSheetHandle}>
        <BottomSheetFlatList
          data={ukuranUdang}
          renderItem={renderUkuranUdang}
          contentContainerStyle={styles.filterSizeContentContainer}
        />
      </BottomSheet>
      {isBottomsheetOpen ? null : (
        <FilterFloatingButton
          size={ukuran}
          onPressRegion={() => {
            regionBottomSheetRef?.current?.expand();
            setIsBottomsheetOpen(true);
          }}
          onPressSize={() => {
            sizeBottomSheetRef?.current?.expand();
            setIsBottomsheetOpen(true);
          }}
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
});
