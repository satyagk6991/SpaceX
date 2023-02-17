import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../src/Components/CustomButton';
import {height, width} from '../Utils';
import Modal from 'react-native-modal';
import CustomRadioBtn from '../Components/CustomRadioBtn';
import { styles } from './style';

const Home = () => {
  const [year, setYear] = useState(null);
  const [list, setList] = useState([]);
  const [launchVal, setLaunchVal] = useState(null);
  const [landingVal, setLandingVal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterCheck, setFilterCheck] = useState(false);

  const getList = () => {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';

    url = launchVal ? url + '&launch_success=' + launchVal : url;
    url = landingVal ? url + '&land_success=' + landingVal : url;
    url = year ? url + '&launch_year=' + year : url;
    console.log('deqdwqdwqdwq', url);
    try {
      fetch(url)
        .then(response => response.json())
        .then(res => {
          setList(res);
        });
    } catch (error) {
      console.log('Api Error', error);
    }
  };

  useEffect(() => {
    getList();
  }, [filterCheck]);

  const renderList = ({item, index}) => {
    return (
      <View style={styles.filterBlock}>
        <View
          style={{
            backgroundColor: '#f2f2f2',
            width: width * 0.7,
            height: height * 0.35,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: width * 0.6,
              height: height * 0.3,
            }}
            source={{uri: item?.links?.mission_patch}}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0000ff',
            textAlign: 'center',
            padding: 20,
          }}>
          {item?.mission_name}
        </Text>
        <View>
          <View style={styles.detailBlock}>
            <Text style={styles.labelTxt}>Mission Ids :</Text>
            {item?.mission_id &&
              item?.mission_id.length > 0 &&
              item?.mission_id.map(element => {
                return (
                  <Text style={styles.descTxt} key={element}>
                    {element}
                  </Text>
                );
              })}
          </View>

          <View style={styles.detailBlock}>
            <Text style={styles.labelTxt}>Launch Year : </Text>
            <Text style={styles.descTxt}>{item?.launch_year}</Text>
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.labelTxt}>Successful Launch :</Text>
            <Text style={styles.descTxt}>
              {item?.launch_success ? 'True' : 'False'}
            </Text>
          </View>
          <View style={styles.detailBlock}>
            <Text style={styles.labelTxt}>Successful Landing :</Text>
            <Text style={styles.descTxt}>{item?.launch_year}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>SpaceX Launch Program</Text>

      <FlatList data={list} renderItem={renderList} />

      <TouchableOpacity
        style={styles.fabFilter}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.fabTxt}>Filter</Text>
      </TouchableOpacity>
      {/*Modal Block*/}
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection="right"
        animationIn="slideInRight"
        animationOut={'slideOutRight'}
        animationInTiming={800}
        animationOutTiming={800}>
        <View
          style={{
            marginLeft: 40,
            marginVertical: 0,
            marginRight: -30,
          }}>
          <View style={styles.filterBlock}>
            <Text style={styles.filterTxt}>Filters</Text>
            <View style={styles.launchBlock}>
              <Text style={styles.launchTxt}>Launch Year</Text>
            </View>
            <View
              style={{
                marginHorizontal: width * 0.02,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <CustomButton
                selectedVal={year}
                text={2006}
                onPress={() => {
                  setYear('2006');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2007}
                onPress={() => {
                  setYear('2007');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2008}
                onPress={() => {
                  setYear('2008');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2009}
                onPress={() => {
                  setYear('2009');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2010}
                onPress={() => {
                  setYear('2010');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2011}
                onPress={() => {
                  setYear('2011');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2012}
                onPress={() => {
                  setYear('2012');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={2013}
                onPress={() => {
                  setYear('2013');
                }}
              />

              <CustomButton
                selectedVal={year}
                text={2014}
                onPress={() => {
                  setYear('2014');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={'2015'}
                onPress={() => {
                  setYear('2015');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={'2016'}
                onPress={() => {
                  setYear('2016');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={'2017'}
                onPress={() => {
                  setYear('2017');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={'2018'}
                onPress={() => {
                  setYear('2018');
                }}
              />

              <CustomButton
                selectedVal={year}
                text={'2019'}
                onPress={() => {
                  setYear('2019');
                }}
              />
              <CustomButton
                selectedVal={year}
                text={'2020'}
                onPress={() => {
                  setYear('2020');
                }}
              />
            </View>
            <View>
              <View style={styles.launchBlock}>
                <Text style={styles.launchTxt}> Successful Launch </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <CustomRadioBtn
                  selectedVal={launchVal}
                  text={'true'}
                  onPress={() => {
                    setLaunchVal('true');
                  }}
                />
                <CustomRadioBtn
                  selectedVal={launchVal}
                  text={'false'}
                  onPress={() => {
                    setLaunchVal('false');
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.launchBlock}>
                <Text style={styles.launchTxt}>Successful Landing</Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <CustomRadioBtn
                    selectedVal={landingVal}
                    text={'true'}
                    onPress={() => {
                      setLandingVal('true');
                    }}
                  />
                  <CustomRadioBtn
                    selectedVal={landingVal}
                    text={'false'}
                    onPress={() => {
                      setLandingVal('false');
                    }}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setModalVisible(!modalVisible);
                setFilterCheck(!filterCheck);
              }}>
              <Text style={styles.modalBtnTxt}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;


