import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export type IHargaUdangDetailScreenProps = {
  route: any;
};

const HargaUdangDetailScreen: React.FC<IHargaUdangDetailScreenProps> = ({
  route,
}) => {
  const {item} = route.params;
  return (
    <SafeAreaView>
      <Text style={{color: 'red'}}>{item.id}</Text>
    </SafeAreaView>
  );
};

export {HargaUdangDetailScreen};
