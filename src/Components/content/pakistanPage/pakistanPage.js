import React from 'react';
import { Breadcrumb, Layout, Descriptions, Badge, Table } from 'antd';
import 'antd/dist/antd.css';
import "./pakistanPage.css"
import {
    Link
} from "react-router-dom";



const { Content } = Layout


const dataSource = [
    {
        key: '1',
        width: "100px",
        actual: '',
        previous: "219.00",
        highest: '212.22',
        lowest: "219.00",
        dates: "44.99",
        unit: "1960 - 2019",
        frequency: "Million",
        empty: "Yearly"
    }
];


const dataSource2 = [
    {
        pakistanLabour: "Unemployment Rate",
        last: 5.70,
        previous: 5.80,
        highest: 7.80,
        lowest: 3.10,
        unit: "Percent",
        empty: "[±]",
    },
    {
        pakistanLabour: "Employed Persons",
        last: 61710.00,
        previous: 62230.00,
        highest: 62230.00,
        lowest: 5580.00,
        unit: "Thousand",
        empty: "[±]",
    },
    {
        pakistanLabour: "Population",
        last: 219.00,
        previous: 212.22,
        highest: 219.00,
        lowest: 44.99,
        unit: "Million",
        empty: "[±]",
    },
    {
        pakistanLabour: "Living Wage Family",
        last: 29700.00,
        previous: 29500.00,
        highest: 29700.00,
        lowest: 26000.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
    {
        pakistanLabour: "Living Wage Individual",
        last: 13500.00,
        previous: 13400.00,
        highest: 13500.00,
        lowest: 11200.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
    {
        pakistanLabour: "Wages High Skilled",
        last: 51400.00,
        previous: 49200.00,
        highest: 51400.00,
        lowest: 41000.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
    {
        pakistanLabour: "Wages Low Skilled",
        last: 28700.00,
        previous: 21700.00,
        highest: 28700.00,
        lowest: 21700.00,
        unit: "PKR/Month",
        empty: "[±]",
    },
]



const dataSource3= [
    {
        sno:1,
        actionsRequired:"Restructuring of public facilities",
        punjab:"Present",
        sindh:"Absent",
        khyberPakhtunkhwa:"Present",
        baluchistan:"Absent"
    },
    {
        sno:2,
        actionsRequired:"Expanded focus on primary healthcare",
        punjab:"Present",
        sindh:"Present",
        khyberPakhtunkhwa:"Present",
        baluchistan:"Absent"
    },
    {
        sno:3,
        actionsRequired:"Integration of devolved national public health programmes ",
        punjab:"Present",
        sindh:"Present",
        khyberPakhtunkhwa:"Present",
        baluchistan:"Absent"
    },
    {
        sno:4,
        actionsRequired:"Bridging of the population health gap ",
        punjab:"Present",
        sindh:"Absent",
        khyberPakhtunkhwa:"Present",
        baluchistan:"Absent"
    },
    {
        sno:5,
        actionsRequired:"Reformed hospitals through decentralization",
        punjab:"Absent",
        sindh:"Absent",
        khyberPakhtunkhwa:"Absent",
        baluchistan:"Absent"
    },
    {
        sno:6,
        actionsRequired:"Role of private providers in delivering publicly funded services",
        punjab:"Present",
        sindh:"Present",
        khyberPakhtunkhwa:"Present",
        baluchistan:"Absent"
    },
]

const columns = [
    {
        title: 'Actual',
        dataIndex: 'actual',
        key: 'actual',
        width: "100px",
    },
    {
        title: 'Previous',
        dataIndex: 'previous',
        key: 'previous',
        width: "100px",
    },
    {
        title: 'Highest',
        dataIndex: 'highest',
        key: 'highest',
        width: "100px",
    },
    {
        title: 'Lowest',
        dataIndex: 'lowest',
        key: 'lowest',
        width: "100px",
    },
    {
        title: 'Dates',
        dataIndex: 'dates',
        key: 'dates',
        width: "100px",
    },
    {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
        width: "100px",
    },
    {
        title: 'Frequency',
        dataIndex: 'frequency',
        key: 'frequency',
        width: "100px",
    },
    {
        title: '',
        dataIndex: 'empty',
        key: 'empty',
        width: "100px",
    },
];
const columns2 = [
    {
        title: "Pakistan Labour",
        dataIndex: "pakistanLabour",
        key: "pakistanLabour",
        width: "100px",
        fixed: "left"
    },
    {
        title: "Last",
        dataIndex: "last",
        key: "last",
        width: "100px",
    },
    {
        title: "Previous",
        dataIndex: "previous",
        key: "previous",
        width: "100px",
    },
    {
        title: "Highest",
        dataIndex: "highest",
        key: "highest",
        width: "100px",
    },
    {
        title: "Lowest",
        dataIndex: "lowest",
        key: "lowest",
        width: "100px",
    },
    {
        title: "Unit",
        dataIndex: "unit",
        key: "unit",
        width: "100px",
    },
    {
        title: '',
        dataIndex: 'empty',
        key: 'empty',
        width: "100px",
    }
]
const columns3 = [
    {
        title: "S.No ",
        dataIndex: "sno",
        key: "sno",
        width: "20px",
        fixed: "left"
    },
    {
        title: "Actions Required",
        dataIndex: "actionsRequired",
        key: "actionsRequired",
        width: "100px",
    },
    {
        title: "Punjab",
        dataIndex: "punjab",
        key: "punjab",
        width: "50px",
    },
    {
        title: "Sindh",
        dataIndex: "sindh",
        key: "sindh",
        width: "50px",
    },
    {
        title: "Khyber Pakhtunkhwa",
        dataIndex: "khyberPakhtunkhwa",
        key: "khyberPakhtunkhwa",
        width: "50px",
    },
    {
        title: "Baluchistan",
        dataIndex: "baluchistan",
        key: "baluchistan",
        width: "50px",
    },
]



export const PakistanPage = () => {
    return (
        <Content className="pageContentClass">
            <div className="marginClass">
                <Breadcrumb style={{ margin: '16px 0px' }}>
                    <Breadcrumb.Item>
                        <Link to="/">
                            Home
                </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/Pakistan`}>
                            Pakistan
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2 className="pakistanPageHeading">Pakistan Overview</h2>
                <p className="pageParagraphClass">The total population in Pakistan was estimated at 219.0 million people in 2019, according to the latest census figures and projections from Trading Economics.</p>
                <img className="pakistanPageImgClass" src={require("../../icons/Chart1.png")}></img>
                <Table dataSource={dataSource}
                    size="middle"
                    className="pakistanTableClass"
                    scroll={{ x: "20%", y: 100 }}
                    columns={columns} />
                <Table dataSource={dataSource2}
                    className="pakistanTableClass"
                    scroll={{ x: "20%", y: 440 }}
                    columns={columns2} />
                <p className="pakistanBoldPara">The population of Pakistan represents 2.56 percent of the world´s total population which arguably means that one person in every 39 people on the planet is a resident of Pakistan.</p>
                <Descriptions bordered>
                    <Descriptions.Item label="Population" span={3}>
                        207,862,518 (July 2017 est.) (July 2018 est.)
                        <br />
                        <strong>Note</strong>: provisional results of Pakistan's 2017 national census estimate the country's total population to be 207,774,000
                        </Descriptions.Item>
                    <Descriptions.Item label="Age structure " span={3}>
                        0-14 years: 30.76% (male 32,828,078 /female 31,118,626)
                        <br />
                        15-24 years: 20.94% (male 22,446,320 /female 21,076,265)
                        <br />
                        25-54 years: 38.04% (male 41,021,803 /female 38,039,766)
                        <br />
                        55-64 years: 5.7% (male 5,979,712 /female 5,871,574)
                        <br />
                        65 years and over: 4.56% (male 4,399,926 /female 5,080,448) (2018 est.)
                        </Descriptions.Item>
                    <Descriptions.Item label="Dependency ratios" span={3}>
                        total dependency ratio: 65.3 (2015 est.)
                        <br />
                        youth dependency ratio: 57.9 (2015 est.)
                        <br />
                        elderly dependency ratio: 7.4 (2015 est.)
                        <br />
                        potential support ratio: 13.5 (2015 est.)
                        </Descriptions.Item>
                    <Descriptions.Item label="Median age" span={3}>
                        total: 24.1 years (2018 est.)
                        <br />
                        male: 24.1 years
                        <br />
                        female: 24.2 years
                        <br />
                    </Descriptions.Item>
                    <Descriptions.Item label="Population growth rate" span={3}>
                        1.41% (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Birth rate" span={3}>
                        21.6 births/1,000 population (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Death rate" span={3}>
                        6.3 deaths/1,000 population (2018 est.)
                        </Descriptions.Item>
                    <Descriptions.Item label="Net migration rate" span={3}>
                        -1.2 migrant(s)/1,000 population (2018 est.)
                        </Descriptions.Item>
                    <Descriptions.Item label="Urbanization" span={3}>
                        urban population: 36.9% of total population (2019)
                        <br />
                        rate of urbanization: 2.53% annual rate of change (2015-20 est.)
                        </Descriptions.Item>
                    <Descriptions.Item label="Major cities - population " span={3}>
                        15.741 million Karachi, 12.188 million Lahore, 3.385 million Faisalabad, 2.196 million Rawalpindi, 2.169 million Gujranwala, 1.095 million ISLAMABAD (capital) (2019)
                        </Descriptions.Item>
                    <Descriptions.Item label="Sex ratio" span={3}>
                        at birth: 1.05 male(s)/female
                        <br />
                        0-14 years: 1.05 male(s)/female
                        <br />
                        15-24 years: 1.07 male(s)/female
                        <br />
                        25-54 years: 1.08 male(s)/female
                        <br />
                        55-64 years: 1.02 male(s)/female
                        <br />
                        65 years and over: 0.87 male(s)/female
                        <br />
                        total population: 1.05 male(s)/female (2018 est.)
                        </Descriptions.Item>
                    <Descriptions.Item label="Mother's mean age at first birth" span={3}>
                        23.6 years (2017/18 est.)
                        <br />
                        <strong>Note</strong>: median age at first birth among women 25-29
                    </Descriptions.Item>
                    <Descriptions.Item label="Infant mortality rate " span={3}>
                        total: 50.4 deaths/1,000 live births (2018 est.)
                        <br />
                        male: 53.5 deaths/1,000 live births
                        <br />
                        female: 47.1 deaths/1,000 live births
                    </Descriptions.Item>
                    <Descriptions.Item label="Infant mortality rate " span={3}>
                        total population: 68.4 years (2018 est.)
                        <br />
                        male: 66.4 years
                        <br />
                        female: 70.5 years
                    </Descriptions.Item>
                    <Descriptions.Item label="Life expectancy at birth " span={3}>
                        total population: 68.4 years (2018 est.)
                        <br />
                        male: 66.4 years
                        <br />
                        female: 70.5 years
                    </Descriptions.Item>
                    <Descriptions.Item label="Total fertility rate " span={3}>
                        2.55 children born/woman (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Contraceptive prevalence rate" span={3}>
                        34.2% (2017/18)
                    </Descriptions.Item>
                    <Descriptions.Item label="HIV/AIDS - adult prevalence rate" span={3}>
                        0.1% (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="HIV/AIDS - people living with HIV/AIDS " span={3}>
                        160,000 (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="HIV/AIDS - deaths " span={3}>
                        6,400 (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Drinking water source" span={3}>
                        improved: urban: 93.9% of population
                        <br />
                        rural: 89.9% of population
                        <br />
                        total: 91.4% of population
                        <br />
                        unimproved: urban: 6.1% of population
                        <br />
                        rural: 10.1% of population
                        <br />
                        total: 8.6% of population (2015 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Sanitation facility access" span={3}>
                        improved: urban: 83.1% of population (2015 est.)
                        <br />
                        rural: 51.1% of population (2015 est.)
                        <br />
                        total: 63.5% of population (2015 est.)
                        <br />
                        unimproved: urban: 16.9% of population (2015 est.)
                        <br />
                        rural: 48.9% of population (2015 est.)
                        <br />
                        total: 36.5% of population (2015 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Major infectious diseases " span={3}>
                        degree of risk: high (2016)
                        <br />
                        food or waterborne diseases: bacterial diarrhea, hepatitis A and E, and typhoid fever (2016)
                        <br />
                        vector borne diseases: dengue fever and malaria (2016)
                        <br />
                        animal contact diseases: rabies (2016)
                    </Descriptions.Item>
                    <Descriptions.Item label="Nationality " span={3}>
                        noun: Pakistani(s)
                        <br />
                        adjective: Pakistani
                    </Descriptions.Item>
                    <Descriptions.Item label="Ethnic groups" span={3}>
                        Punjabi 44.7%,
                        <br />
                        Pashtun (Pathan) 15.4%,
                        <br />
                        Sindhi 14.1%,
                        <br />
                        Saraiki 8.4%,
                        <br />
                        Muhajirs 7.6%,
                        <br />
                        Balochi 3.6%,
                        <br />
                        Other 6.3%
                    </Descriptions.Item>
                    <Descriptions.Item label="Religions" span={3}>
                        Muslim (official) 96.4% (Sunni 85-90%, Shia 10-15%),
                        <br />
                        other (includes Christian and Hindu) 3.6% (2010 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Languages " span={3}>
                        Punjabi 48%,
                        <br />
                        Sindhi 12%,
                        <br />
                        Saraiki (a Punjabi variant) 10%,
                        <br />
                        Pashto (alternate name, Pashtu) 8%,
                        <br />
                        Urdu (official) 8%,
                        <br />
                        Balochi 3%,
                        <br />
                        Hindko 2%,
                        <br />
                        Brahui 1%,
                        <br />
                        English (official; lingua franca of Pakistani elite and most government ministries),
                        <br />
                        Burushaski,
                        <br />
                        and other 8%
                    </Descriptions.Item>
                    <Descriptions.Item label="Literacy" span={3}>
                        definition: age 15 and over can read and write
                        <br />
                        total population: 57.9%
                        <br />
                        male: 69.5%
                        <br />
                        female: 45.8% (2015 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="School life expectancy (primary to tertiary education)" span={3}>
                        total: 8 years
                        <br />
                        male: 9 years
                        <br />
                        female: 8 years (2017)
                    </Descriptions.Item>
                    <Descriptions.Item label="Education expenditures" span={3}>
                        2.8% of GDP (2017)
                    </Descriptions.Item>
                    <Descriptions.Item label="Maternal mortality rate " span={3}>
                        140 deaths/100,000 live births (2017 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Children under the age of 5 years underweight " span={3}>
                        23.1% (2018)
                    </Descriptions.Item>
                    <Descriptions.Item label="Health expenditures " span={3}>
                        2.7% (2015)
                    </Descriptions.Item>
                    <Descriptions.Item label="Physicians density " span={3}>
                        0.98 physicians/1,000 population (2015)
                    </Descriptions.Item>
                    <Descriptions.Item label="Hospital bed density " span={3}>
                        0.6 beds/1,000 population (2014)
                    </Descriptions.Item>
                    <Descriptions.Item label="Obesity - adult prevalence rate " span={3}>
                        Obesity - adult prevalence rate
                    </Descriptions.Item>
                    <Descriptions.Item label="Population " span={3}>
                        207,862,518 (July 2017 est.) (July 2018 est.)
                    <br />
                        <strong>Note</strong>: provisional results of Pakistan's 2017 national census estimate the country's total population to be 207,774,000
                    </Descriptions.Item>
                    <Descriptions.Item label="Age structure " span={3}>
                        0-14 years: 30.76% (male 32,828,078 /female 31,118,626)
                        <br />
                        15-24 years: 20.94% (male 22,446,320 /female 21,076,265)
                        <br />
                        25-54 years: 38.04% (male 41,021,803 /female 38,039,766)
                        <br />
                        55-64 years: 5.7% (male 5,979,712 /female 5,871,574)
                        <br />
                        65 years and over: 4.56% (male 4,399,926 /female 5,080,448) (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Dependency ratios " span={3}>
                        total dependency ratio: 65.3 (2015 est.)
                        <br />
                        youth dependency ratio: 57.9 (2015 est.)
                        <br />
                        elderly dependency ratio: 7.4 (2015 est.)
                        <br />
                        potential support ratio: 13.5 (2015 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Median age" span={3}>
                        total: 24.1 years (2018 est.)
                        <br />
                        male: 24.1 years
                        <br />
                        female: 24.2 years
                    </Descriptions.Item>
                    <Descriptions.Item label="Population growth rate" span={3}>
                        1.41% (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Birth rate " span={3}>
                        21.6 births/1,000 population (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Death rate " span={3}>
                        6.3 deaths/1,000 population (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Net migration rate " span={3}>
                        -1.2 migrant(s)/1,000 population (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Urbanization " span={3}>
                        urban population: 36.9% of total population (2019)
                        <br />
                        rate of urbanization: 2.53% annual rate of change (2015-20 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Major cities - population" span={3}>
                        15.741 million Karachi,
                        <br />
                        12.188 million Lahore,
                        <br />
                        3.385 million Faisalabad,
                        <br />
                        2.196 million Rawalpindi,
                        <br />
                        2.169 million Gujranwala,
                       <br />
                        1.095 million ISLAMABAD (capital) (2019)
                    </Descriptions.Item>
                    <Descriptions.Item label="Sex ratio " span={3}>
                        at birth: 1.05 male(s)/female
                        <br />
                        0-14 years: 1.05 male(s)/female
                        <br />
                        15-24 years: 1.07 male(s)/female
                        <br />
                        25-54 years: 1.08 male(s)/female
                        <br />
                        55-64 years: 1.02 male(s)/female
                        <br />
                        65 years and over: 0.87 male(s)/female
                        <br />
                        total population: 1.05 male(s)/female (2018 est.)
                    </Descriptions.Item>
                    <Descriptions.Item label="Mother's mean age at first birth " span={3}>
                        23.6 years (2017/18 est.)
                        <br />
                        <strong>Note</strong>: median age at first birth among women   25-29
                    </Descriptions.Item>
                    <Descriptions.Item label="Infant mortality rate " span={3}>
                        total: 50.4 deaths/1,000 live births (2018 est.)
                        <br />
                        male: 53.5 deaths/1,000 live births
                        <br />
                        female: 47.1 deaths/1,000 live births
                    </Descriptions.Item>
                    <Descriptions.Item label="Life expectancy at birth " span={3}>
                        total population: 68.4 years (2018 est.)
                        <br />
                        male: 66.4 years
                        <br />
                        female: 70.5 years
                    </Descriptions.Item>
                    <Descriptions.Item label="Total fertility rate " span={3}>
                    2.55 children born/woman (2018 est.) 
                    </Descriptions.Item>
                    <Descriptions.Item label="Contraceptive prevalence rate " span={3}>
                    Contraceptive prevalence rate 
                    </Descriptions.Item>
                    <Descriptions.Item label="HIV/AIDS - adult prevalence rate " span={3}>
                    0.1% (2018 est.) 
                    </Descriptions.Item>
                    <Descriptions.Item label="HIV/AIDS - people living with HIV/AIDS " span={3}>
                    160,000 (2018 est.) 
                    </Descriptions.Item>
                    <Descriptions.Item label="HIV/AIDS - deaths " span={3}>
                    6,400 (2018 est.) 
                    </Descriptions.Item>
                </Descriptions>
                <h2 className="pakistanPageHeading">Health Evaluation Province wise</h2>
                <Table dataSource={dataSource3}
                    size="middle"
                    className="pakistanTableClass"
                    scroll={{ x: "20%", y: 340 }}
                    columns={columns3}
                    bordered
                     />
            </div>
        </Content>)
}