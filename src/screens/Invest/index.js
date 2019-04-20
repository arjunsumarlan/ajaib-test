import React, { PureComponent } from 'react';
import {
  Image,
  Text,
  View,
  FlatList
} from 'react-native';
import globalStyles from '../../assets/globalStyles';
import { height } from '../../assets/constants/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ListItem, normalize } from 'react-native-elements'
import colors from '../../assets/constants/colors'
import Header from '../../assets/components/Header'
import { ScrollView } from 'react-native-gesture-handler';
import TouchableItem from '../../assets/components/TouchableItem';

export default class Invest extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
        pending: [
            {
                type: 'Deposit',
                typeId: 0,
                amount: 'Rp 100.000.000.000',
                destAccountName: 'HPAM Ultima Ekuitas 1',
                destAccountNo: '458 259 8227',
                destBank: 'BCA',
                date: 'Aug 15, 2018',
                status: 'Need Transfer Receipt',
                statusId: 1
            },{
                type: 'Withdraw',
                typeId: 1,
                amount: 'Rp 100.000.000.000',
                destAccountName: 'HPAM Ultima Ekuitas 1',
                destAccountNo: '458 259 8227',
                destBank: 'BCA',
                date: 'Aug 15, 2018',
                status: 'In Progress',
                statusId: 2
            }
        ],
        completed: [
            {
                type: 'Sell',
                typeId: 0,
                amount: 'Rp 10.000.000',
                destAccountName: 'HPAM Ultima Ekuitas 1',
                destAccountNo: '458 259 8227',
                destBank: 'BCA',
                date: 'Aug 15, 2018',
                status: 'Completed',
                statusId: 3
            },{
                type: 'Buy',
                typeId: 1,
                amount: 'Rp 10.000.000',
                destAccountName: 'HPAM Ultima Ekuitas 1',
                destAccountNo: '458 259 8227',
                destBank: 'BCA',
                date: 'Aug 15, 2018',
                status: 'Completed',
                statusId: 3
            }
        ]
    }
  }

  render() {
    return (
      <View style={globalStyles.scrollContainer}>
        <Header title='Invest' />
        <ScrollView>
            <View style={globalStyles.container}>
                <View style={[globalStyles.$15innerContainer, { backgroundColor: colors.white, borderBottomWidth: 5, borderBottomColor: colors.gray1 }]}>
                    <View style={globalStyles.rowContainer}>
                        <Icon name="plus-circle-outline" size={22} color={colors.blue} />
                        <Text style={globalStyles.FeatureText}>Deposit</Text>
                    </View>
                    <View style={globalStyles.rowContainer}>
                        <Icon name="minus-circle-outline" size={22} color={colors.blue} />
                        <Text style={globalStyles.FeatureText}>Withdraw</Text>
                    </View>
                </View>
                <View style={[globalStyles.$15innerContainer, { backgroundColor: colors.white, borderBottomWidth: 5, borderBottomColor: colors.gray1 }]}>
                    <View style={globalStyles.rowContainer}>
                        <Icon name="sync" size={22} color={colors.dark} />
                        <Text style={globalStyles.cardTitle}>Pending orders</Text>
                    </View>
                    <FlatList
                        data={this.state.pending}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({item, index}) => (
                            <TouchableItem 
                                onPress={()=>this.props.navigation.navigate('TransferDetails', { typeId: item.typeId, amount: item.amount, destAccountName: item.destAccountName, destAccountNo: item.destAccountNo, destBank: item.destBank })}
                            >
                                <View key={index} >
                                    <Text style={{ fontSize: normalize(12), fontWeight: 'bold', paddingBottom: 5 }}>{item.type} {item.amount}</Text>
                                    <View style={globalStyles.rowContainer}>
                                        <View style={{ width: '60%' }}>
                                            <Text style={{fontSize: normalize(12) }}>{item.typeId == 0 ? `To ${item.destAccountName}` : `From ${item.destAccountName}`}</Text>
                                            <Text style={{fontSize: normalize(12) }}>{item.date}</Text>
                                        </View>
                                        <View style={[globalStyles.rowContainer, { width: '30%', alignItems: 'flex-end', justifyContent: 'flex-end' }]}>
                                            <Text style={{fontSize: normalize(12), fontWeight:'bold', color: item.statusId == 1 ? colors.orange : item.statusId == 2 ? colors.blue : colors.green, textAlign: 'right' }}>{item.status}</Text>
                                        </View>
                                        <View style={{ width: '10%', alignItems: 'center' }}>
                                            <Icon name="chevron-right" size={24} color={colors.gray2} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableItem>
                        )}
                    />
                </View>
                <View style={[globalStyles.$15innerContainer, { backgroundColor: colors.white, borderBottomWidth: 5, borderBottomColor: colors.gray1 }]}>
                    <View style={globalStyles.rowContainer}>
                        <Icon name="playlist-check" size={22} color={colors.dark} />
                        <Text style={globalStyles.cardTitle}>Completed orders</Text>
                    </View>
                    <FlatList
                        data={this.state.completed}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({item, index}) => (
                            <View key={index} >
                                <Text style={{ fontSize: normalize(12), fontWeight: 'bold', paddingBottom: 5 }}>{item.typeId == 0 ? `Sell ${item.destAccountName}` : `Buy ${item.destAccountName}`}</Text>
                                <View style={globalStyles.rowContainer}>
                                    <View style={{ width: '60%' }}>
                                        <Text style={{fontSize: normalize(12) }}>{item.amount}</Text>
                                        <Text style={{fontSize: normalize(12) }}>{item.date}</Text>
                                    </View>
                                    <View style={[globalStyles.rowContainer, { width: '30%', alignItems: 'flex-end', justifyContent: 'flex-end' }]}>
                                        <Text style={{fontSize: normalize(12), fontWeight:'bold', color: item.statusId == 1 ? colors.orange : item.statusId == 2 ? colors.blue : colors.green }}>{item.status}</Text>
                                    </View>
                                    <View style={{ width: '10%', alignItems: 'center' }}>
                                        <Icon name="chevron-right" size={24} color={colors.gray2} />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
      </View>
    )
}
}
