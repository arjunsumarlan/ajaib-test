import React, { PureComponent } from 'react';
import {
  Alert,
  Text,
  View,
  ScrollView
} from 'react-native';
import globalStyles from '../../../assets/globalStyles';
import { height } from '../../../assets/constants/constants'
import { Button } from 'react-native-elements'
import colors from '../../../assets/constants/colors'
import Header from '../../../assets/components/Header'

export default class TransferDetails extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
        typeId: this.props.navigation.state.params.typeId, 
        amount: this.props.navigation.state.params.amount, 
        destAccountName: this.props.navigation.state.params.destAccountName, 
        destAccountNo: this.props.navigation.state.params.destAccountNo, 
        destBank: this.props.navigation.state.params.destBank
    }
  }

  render() {
    return (
      <View style={globalStyles.scrollContainer}>
        <Header title='Transfer Details' back={true} onBackPress={() => this.props.navigation.goBack()} />
        <ScrollView>
            <View style={[globalStyles.$15innerContainer, { justifyContent:'space-between', backgroundColor: colors.white, borderBottomColor: colors.gray1 }]}>
                <View style={{ height: height * 0.5 }}>
                    <View style={{ paddingBottom: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{this.state.typeId == 0 ? 'Please transfer to ' : 'Withdraw to '}custodian bank</Text>
                    </View>
                    <View style={{ paddingBottom: 15 }}>
                        <Text>Bank Name</Text>
                        <Text style={{ color: colors.blue }}>{this.state.destBank}</Text>
                    </View>
                    <View style={{ paddingBottom: 15 }}>
                        <Text>Account Holder Name</Text>
                        <Text style={{ color: colors.blue }}>{this.state.destAccountName}</Text>
                    </View>
                    <View style={{ paddingBottom: 15 }}>
                        <Text>Account Number</Text>
                        <Text style={{ color: colors.blue }}>{this.state.destAccountNo}</Text>
                    </View>
                    <View style={{ paddingBottom: 15 }}>
                        <Text>Investing Amount</Text>
                        <Text style={{ color: colors.blue }}>{this.state.amount}</Text>
                    </View>
                </View>
                <Button
                    title="SEND PAYMENT VERIFICATION"
                    containerViewStyle={{ width: '80%', borderRadius: 10 }}
                    buttonStyle={{ marginTop: 15 }}
                    onPress={() => {
                        this.props.navigation.goBack()
                        Alert.alert('Success!', 'Payment verification already sent.')
                    }}
                    backgroundColor={colors.blue}
                />
            </View>
        </ScrollView>
      </View>
    )
}
}
