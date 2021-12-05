import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import CButton from "./CButton"
import COutput from "./COutput"

export default function Calculator() {
  const [val, setVal] = useState('0');
  const [op, setOp] = useState(null);
  const [result, setResult] = useState('0');

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
          <COutput output={ val } />
      </View>
      <View style={styles.container}>
          <CButton input="%" colour="slategray" press={ () =>   { 
            setVal(((parseFloat(val) / 100) * parseFloat(result)).toString())
            setOp(null)
            setResult('0')
            } }/>
          <CButton input="C" colour="slategray" press={ () =>   { 
              setVal('0')
              setResult(null)
              } 
            }/>
          <CButton input="CE" colour="slategray" press={ () =>   { 
            if (val == '0' || val.includes('e')) {
              setVal('0')
            }
            else { 
              setVal(val.slice(0,-1)) 
              console.log(val)
              if (val.length == 1) {
                setVal('0')
              }
              } } 
            }/>
          <CButton input="÷" colour="indigo" press={ () =>   { 
              setResult(val)
              setVal('0')
              setOp('/')
            }}/>
      </View>
      <View style={styles.container}>
          <CButton input="7" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('7')
            }
            else if (val.length < 6) { 
              setVal(val + '7') 
              } } 
            }/>
          <CButton input="8" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('8')
            }
            else if (val.length < 6) { 
              setVal(val + '8') 
              } } 
            }/>
          <CButton input="9" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('9')
            }
            else if (val.length < 6) { 
              setVal(val + '9') 
              } } 
            }/>
          <CButton input="×" colour="indigo" press={ () =>   { 
              setResult(val)
              setVal('0')
              setOp('*')
            }}/>
      </View>
      <View style={styles.container}>
          <CButton input="4" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('4')
            }
            else if (val.length < 6) { 
              setVal(val + '4') 
              } } 
            }/>
          <CButton input="5" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('5')
            }
            else if (val.length < 6) { 
              setVal(val + '5') 
              } } 
            }/>
          <CButton input="6" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('6')
            }
            else if (val.length < 6) { 
              setVal(val + '6') 
              } } 
            }/>
          <CButton input="−" colour="indigo" press={ () =>   { 
              setResult(val)
              setVal('0')
              setOp('-')
            }}/>
      </View>
      <View style={styles.container}>
          <CButton input="1" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('1')
            }
            else if (val.length < 6) { 
              setVal(val + '1') 
              } } 
            }/>
          <CButton input="2" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('2')
            }
            else if (val.length < 6) { 
              setVal(val + '2') 
              }           
          }}/>
          <CButton input="3" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('3')
            }
            else if (val.length < 6) { 
              setVal(val + '3') 
              } } 
            }/>
          <CButton input="+" colour="indigo" press={ () =>   { 
              setResult(val)
              setVal('0')
              setOp('+')
            }}/>
      </View>
      <View style={styles.container}>
          <CButton input="−/+" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('0')
            }
            else if (val.includes('-')) { 
              setVal(val.replace('-',''))
            }
            else {
              setVal('-' + val)
            }
          }}/>
          <CButton input="0" colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('0')
            }
            else if (val.length < 6) { 
              setVal(val + '0') 
              } } 
            }/>
          <CButton input="." colour="purple" press={ () =>   { 
            if (val == '0') {
              setVal('0')
            }
            else if (val.length < 6 && !val.includes('.')) { 
              setVal(val + '.') 
              } } 
            }/>
          <CButton input="=" colour="indigo" press={ () =>   { 
            let finalResult = null
            switch(op) {
              case '+':
                finalResult = (parseFloat(val) + parseFloat(result))
                break;
              case '-':
                finalResult = (parseFloat(result) - parseFloat(val))
                break;
              case '*':
                finalResult = (parseFloat(val) * parseFloat(result))
                break;
              case '/':
                finalResult = (parseFloat(result) / parseFloat(val))
                break;
              default:
                finalResult = '0'
            }
            if (finalResult.toString().length <= 6)
            {
              setVal(finalResult.toString())
            }
            else
            {
              console.log(finalResult.toExponential(1).toString())
              setVal(finalResult.toExponential(1).toString())
            }
            setOp(null)
            setResult('0')
            } }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  outerContainer: {
    flex: 1,
    justifyContent:'flex-end',
    alignContent: 'center',
    marginBottom: 75,
    marginHorizontal: 20
  },
});
