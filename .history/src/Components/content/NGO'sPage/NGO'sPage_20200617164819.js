import React from 'react';
import { Breadcrumb, Layout, Descriptions, Badge } from 'antd';
import 'antd/dist/antd.css';
import "./NGO'sPage.css"
import {
    Link
} from "react-router-dom";


let data = {
    "RLCC": {
        "Organization": "Ra’ana Liaquat Craftsmen Colony (RLCC)",
        "OperatingArea": "Shah Faisal Colony, Karachi, Pakistan",
        "History": "A  profound organization started by Begum Ra’ana Liaquat to reconcile the people of Pakistan just after partition, and the organization is successfully operational since 1954.",
        "CoreFunctions": "Quality Education for underprivileged, Vocational training for better livelihood, medical services for a healthy lifestyle.",
        "Credibility": "Registered from Social Welfare Department",
        "Programs": "Adult Literacy, Outreach Community projects, Medical camps, Awareness sessions, Internship and Volunteer services.",
        "Sustainability": "60% self-sufficient and charitable organization",
        "CostofServices": "Minimal and negotiable cost for programs",
        "Analysis": "Throughout RLCC is serving tremendously to refrain the society from the obstacles such as poverty, illiteracy, unemployment, mental health and other health issues. However, their operating area is only Shah Faisal Colony which restricts other persons who are in need but fail to encounter the organization’s services due to the remote location.",
        "ReferencelinkWebsite": "http://rlcc.com.pk/"
    },
    "AAHUNG FOUNDATION": {
        "Organization": "Aahung Foundation",
        "OperatingArea": "Clifton, Karachi",
        "History": "Operating since 1995, for the elimination if resentment against women and children through rights-based approach.",
        "CoreFunctions": "LSBE (Life skill-based program), Protection of CSA (Child Sexual Abuse) and its prevention.",
        "Credibility": "Registered Non-profit Organization. Received the Joan B. Dunlop award from the International Women's Health Coalition(IWHC) for its groundbreaking work on reproductive health and rights. ",
        "Programs": "LSBE program for reproductive health information and management skills.",
        "Sustainability": "Charitable/ Funds-based Organization",
        "CostofServices": "Zero-cost Services",
        "Analysis": "One of the primary organizations working effectively for eradication of CSA.",
        "ReferencelinkWebsite": "https://www.aahung.org/",
    },

    "AZAD FOUNDATION": {
        "Organization": "Azad Foundation",
        "OperatingArea": "Gulshan Iqbal, Karachi",
        "History": "Started in 1998, as a social discussion forum but due to situation started working for street children since 2001.",
        "CoreFunctions": "Health, Medical Care, Assistance, Psychological Counselling and transit shelter for underprivileged children.",
        "Credibility": "Registered Non-profit Organization under Societies Act 1860.",
        "Programs": "Service Provision, Capacity building and Strengthening the Govt, Advocacy and Policy Development.",
        "Sustainability": "Charitable/ Funds-based Organization",
        "CostofServices": "Zero-cost Services",
        "Analysis": "Well-known organization working to provide education, advocacy and shelter to the street children.",
        "ReferencelinkWebsite": "https://azadfoundation.org/",
    },

    "DAR-UL-SUKUN": {
        "Organization": "Dar-ul-Sukun",
        "OperatingArea": "Kashmir Road, PECHS, Karachi",
        "History": "A Dutch nun, Sr. Gertrude Lemmens in February 17, 1969 established the organization for the children with disabilities which is successfully operating to date.",
        "CoreFunctions": "Centre for children multiple disabilities, older people, socially displaced girls, children with severe disabilities.",
        "Credibility": "Registered Non-profit Organization.",
        "Programs": "Training programs, Girls Education, Disability employment program.",
        "Sustainability": "Charitable/ Funds-based Organization",
        "CostofServices": " ",
        "Analysis": "A fierce organization working successfully on multiple domains i.e. Children with disabilities, Senior Citizens, Helping Vulnerable People.",
        "ReferencelinkWebsite": "https://www.darulsukun.com/",
    },

    "EDHI FOUNDATION": {
        "Organization": "Edhi Foundation",
        "OperatingArea": "Boulten Market and Kharadar, Karachi",
        "History": "Initiated by A. Sattar Edhi a free dispensary and later with the support of other members turned to Edhi Welfare Trust and have been working to date for providing basic needs to the destitute.",
        "CoreFunctions": "Ambulance Services, Children Services, Orphanage Centers, Educational Services, Hospital, Marriage Bureau, Refugee Assistance, Missing Persons Service and Graveyard.",
        "Credibility": "Award from Guinness Book of World Records, Peace and Harmony Award, Shield of Honor, Nishan-e-Imtiaz, Human Rights Award, etc.",
        "Programs": "Destitute Homes, Highway Projects, Collaborations with other Organization and International Activities.",
        "Sustainability": "Charity-based Organization",
        "CostofServices": "None ",
        "Analysis": "A promising and far-most known organization working for the welfare of the whole population throughout the country.",
        "ReferencelinkWebsite": "https://edhi.org/",
    },

    "KONPAL CHILD ABUSE PREVENTION SOCIETY": {
        "Organization": "Konpal Child Abuse Prevention Society",
        "OperatingArea": "P.E.C.H.S, Karachi",
        "History": "Working since August 2004 for the prevention of Child Abuse.",
        "CoreFunctions": "Protection, prevention, recovery and rehabilitation of the victims/survivors of abuse.",
        "Credibility": "Registered Non-profit Organization under Voluntary Social Welfare Agencies Ordinance.",
        "Programs": "Raising awareness, Advocacy campaign, Training on capacity building in case detection and management of child abuse and neglect, Service delivery and Research.",
        "Sustainability": "Charity-based Organization",
        "CostofServices": "None ",
        "Analysis": "  ",
        "ReferencelinkWebsite": "http://www.konpal.org/",
    },

    "MAKE A WISH": {
        "Organization": "Make a Wish",
        "OperatingArea": "Clifton, Karachi",
        "History": "Originated in US in 1980, with the motive to fulfil the wishes of special children and successfully working across 36 countries.",
        "CoreFunctions": "Grant wishes for the children with Life-threatening medical diseases.",
        "Credibility": "Registered Non-profit Organization.",
        "Programs": "Celebrity meeting wishes, wish of the month, Unique wishes (performing Umraah etc).",
        "Sustainability": "Charity-based Organization",
        "CostofServices": "None ",
        "Analysis": "Worldwide recognized organization uniquely striving to fulfill wishes of children with life-threatening diseases.",
        "ReferencelinkWebsite": "https://www.makeawish.org.pk/",
    },

    "SOS VILLAGE": {
        "Organization": "SOS Village",
        "OperatingArea": "Malir Halt, Karachi",
        "History": "An SOS Village is the community in which the child lives and finds shelter and support from other members of this extended 'family'. An SOS Village is generally comprised of 15 family homes, a community hall, administration offices, Masjid, director's residence, grocery shop, workshop, dispensary, essential staff residences and large playgrounds.",
        "CoreFunctions": "Care, Security, Higher Education and job-training of children without families.",
        "Credibility": "An organization under the umbrella of SOS Kinderdorf International, largest child welfare organization in the world.",
        "Programs": "Children's villages, Youth homes, Technical training centers, Emergency relief, Rural support and Family strengthening programs.",
        "Sustainability": "Charity-based Organization",
        "CostofServices": " ",
        "Analysis": " ",
        "ReferencelinkWebsite": "https://www.sos.org.pk/Person/Index",
    },

    "AMAN FOUNDATION": {
        "Organization": "Aman Foundation",
        "OperatingArea": "Korangi Township Near Pakistan Refinery Ltd., Karachi, Pakistan",
        "History": "Aman foundation is NGO that was founded in 2008 by Arif Naqvi and Fayeezah Naqvi.",
        "CoreFunctions": "Solutions in Health and Education, direct interventions, convening powerful partnerships and advocating, vocational training, ambulance service.",
        "Credibility": "Registered from Social Welfare Department.",
        "Programs": "Aman Community and Health Program, Sindh Rescue and Medical Services, Aman Tele Health, Sukh initiative, Vocational training.",
        "Sustainability": " ",
        "CostofServices": " ",
        "Analysis": "Aman Foundation is an organization that is currently dealing with social issues, health and education as well as training people in terms of skills and vocation. It is today one of the most important organizations that are operating in Karachi and have served millions of people.",
        "ReferencelinkWebsite": "https://www.theamanfoundation.org/",
    },

    "CHHIPA FOUNDATION": {
        "Organization": "Chhipa Foundation",
        "OperatingArea": " Head office:  FTC Bridge, Shahrah-e-Faisal, Karachi.",
        "History": "Chhipa Foundation was founded back in 2007 by Ramzan Chipa.",
        "CoreFunctions": "Chipa Foundation is a non-profit Association that has been operating in the domains of social strengthening in terms of emergency services, food provision, care for children, senior citizens.",
        "Credibility": "Registered from Social Welfare Department, registered with Government of Pakistan & Government of Sindh.",
        "Programs": "Chhipa Ambulance service, Chhipa Dashtarkhuan (charitable food), Chhipa Orphanage, Chhipa Morgue, Home for the homeless,  Chhipa Ration bags, Chhipa Ritual Bathing and free shroud service, Chhipa Graveyard, Chhipa Jhoola (orphan adoption), Chhipa Newborn home, Chhipa Old home, Chhipa Women shelter home.",
        "Sustainability": "Self-sufficient organization that operates based on alms, charities and donations.",
        "CostofServices": "None ",
        "Analysis": "Chippa has been serving since 2007 and has managed to build its system of emergency services and providing food and social services to the masses making it one of the most competent foundations operating in Karachi",
        "ReferencelinkWebsite": "https://www.chhipa.org/",
    },

    "FIX IT": {
        "Organization": "Fix It",
        "OperatingArea": "Abul Ispahani Road, Karachi.",
        "History": "Fixit began as a campaign initiated by former student and now politician, Alamgir khan against the incompetence of the Sindh Government when, the face of Chief Minister Qaim Ali Shah was painted near uncovered sewer holes. The campaign achieved great coverage.",
        "CoreFunctions": "Highlights and fixes social, civic and political issues faced by a common man of Pakistan. Providing Educational services, raising voice on the incompetence of political leaders through protests and symbolic acts.",
        "Credibility": " ",
        "Programs": "Providing Educational services, raising voice on the incompetence of political leaders and officials through protests and symbolic acts, Boys Orphanage.",
        "Sustainability": "Fixit operation is based on donations, charities and funding from people.",
        "CostofServices": "None ",
        "Analysis": "Fixit may be a nascent organization but has truly embarked its name in a very short time, being highly popular among the youth of Pakistan specifically. Fixit is empowering individuals and making them realize their rights and duties.",
        "ReferencelinkWebsite": "https://www.facebook.com/pakfixit/",
    },
    "JDC": {
        "Organization": "Jafaria Disaster Management Cell JDC",
        "OperatingArea": "Federal.B Area Ancholi, Block-20, Gulberg Town, Karachi.",
        "History": "JDC was setup in 2009 by Syed Shehan Shah Hussain Naqvi and Sibt-e-Jafar Naqvi (who remained active before his assassination in 2013).",
        "CoreFunctions": "First Aid, Relief, Education.",
        "Credibility": "JDC is registered from Social Welfare Department; Secretary General International Human Rights Commission has assured the JDC Welfare Org. for support in future projects.",
        "Programs": "JDC Dashtarkhuan, Ambulance Services, Educational System, Rescue Services, Orphanage  and Old Age Homes, JDC Expo and Wall of Kindness, JDC Clean Karachi Campaign, Support against Heat Wave in Karachi, Wall of kindness, Mae.",
        "Sustainability": "JDC sustains itself through donations and charity and is self-sufficient to some degree.",
        "CostofServices": "None ",
        "Analysis": "JDC is one of the most profound foundations that are currently operating in the city of Karachi they have served numerous individuals through their services and is one of the best places for anyone who has little to no money.",
        "ReferencelinkWebsite": "http://jdcwelfare.org/",
    },

    "LYARIANZ YOUTH DEVELOPMENT PROGRAM": {
        "Organization": "Lyarianz Youth Development Program",
        "OperatingArea": "Lyari Area, Karachi.",
        "History": "The Lyarianz Youth Development Association is a non-profit, non-political, non-religious, evaluation and technical assistance organization that helps communities improve long-term outcomes for their youth program since 2011, LYDA was founded by Mr. Zubair Hussaini.",
        "CoreFunctions": "Improve long-term outcomes for their youth program, foster tolerance, moderation, ingenuity and self-reliance, take up slum-children welfare and slum- women literacy programme, mass awareness campaigns.",
        "Credibility": "Registered by Social Welfare Department.",
        "Programs": "training of grass-root worker, Engaging in awareness, Mobilization, policy advocacy.",
        "Sustainability": "JDC sustains itself through donations and charity and is self-sufficient to some degree.",
        "CostofServices": " ",
        "Analysis": " ",
        "ReferencelinkWebsite": "https://lyda.webs.com/apps/blog/",
    },

    "ROBIN HOOD ARMY": {
        "Organization": "Robin Hood Army",
        "OperatingArea": "All over Karachi.",
        "History": "Modeled on the Re-Food program in Portugal, the Robin Hood Army started on the streets of Delhi, India in August 2014. At last count, successfully served 29.9 million people across 180 cities in 12 countries.",
        "CoreFunctions": "Primarily works for the eradication of hunger crisis by getting surplus food from the restaurants and providing it to the ones in need.  Primary/Basic education for children.",
        "Credibility": " ",
        "Programs": "Hunger Eradication, Academy by RHA members that provides basic education for street children.",
        "Sustainability": " ",
        "CostofServices": " ",
        "Analysis": " ",
        "ReferencelinkWebsite": "https://robinhoodarmy.com/",
    },
    "A.P.H.A ORGANIZATION": {
        "Organization": "A.P.H.A Organization",
        "OperatingArea": "Gulistan-e-Johar, Karachi",
        "History": "Late Tahir Rehmatoola, the Founder President of A.P.H.A, Who was himself, a victim of muscular dystrophy, with his handful companions laid the foundation of this Association in 1975 with a firm determination to work for the welfare and rehabilitation of the disabled on the basis of self-help, mutual understanding and compassion.",
        "CoreFunctions": "Works for the welfare, rehabilitation and education of people with disabilities.",
        "Credibility": "Registered as a Voluntary Social Welfare Organization in 1976.",
        "Programs": "A.P.H.A School, Training programs (sewing, embroidery, cooking, baking, grooming), English language course, Basic air ticketing course.",
        "Sustainability": "Charity-based Organization",
        "CostofServices": " Free of cost or nominal charges.",
        "Analysis": "An organization which is working to embrace and revitalize the inherent capabilities of special people/children.",
        "ReferencelinkWebsite": "http://www.apha.org.pk/",
    },
    "APEX EDUCATION FORUM": {
        "Organization": "Apex Education Forum",
        "Operating Area": "Malir, Karachi",
        "History": "The Apex Education Forum was an initiative that started by a group of determined individuals back in 2007 in order to spread awareness and education amongst the youth of Malir area.",
        "CoreFunctions": "English Language courses, Computer skill training, Youth Development programs",
        "Credibility": "Registered by Social Welfare Department",
        "Programs": "English Language, Computer Center, Youth Development.",
        "Sustainability": "Apex is currently operating based on Donations, basic funding and self-sustainability",
        "CostofServices": " Negotiable to minimal cost for services",
        "Analysis": "An organization which is working to embrace and revitalize the inherent capabilities of special people/children.",
        "ReferencelinkWebsite": "https://web.facebook.com/apexeduforum/?_rdc=1&_rdr",
    },
    "DEWA ACADEMY": {
        "Organization": "DEWA Academy",
        "Operating Area": "Karachi, Islamabad",
        "History": "DEWA, the largest & leading institute for children with Disability, functioning since 1967 in Karachi & from 1997 at Islamabad.",
        "CoreFunctions": "Training, education and habilitation of deaf and hearing-impaired children.",
        "Credibility": "Registered by social welfare department.",
        "Programs": "Dastoor - Education/Training, Yaqeeen – Employment, The Rickshaw Project, PWDs Jobs & Training.",
        "Sustainability": "Based on Donations and funding",
        "CostofServices": " None",
        "Analysis": "1100 Persons with disabilities trained,500 Job placements, 7000 Persons engaged around disabilities issues, 10000 Added in database for job & training opportunities.",
        "ReferencelinkWebsite": "https://www.nowpdp.org/",
    },
    "MARKAZ-E-UMEED": {
        "Organization": "Markaz-e-Umeed",
        "Operating Area": "Karimabad, Karachi",
        "History": "Established around 49 years ago and still working for the empowerment and education of special children.",
        "CoreFunctions": "Education for underprivileged special children.",
        "Credibility": "Welfare Organization.",
        "Programs": "Medical complex, rehabilitation and training center, girl’s empowerment and school for children with special needs.",
        "Sustainability": "Charity-Based Organization",
        "CostofServices": " None",
        "Analysis": " ",
        "ReferencelinkWebsite": "http://markaz-e-umeed.com.pk/",
    },


    "PAKISTAN YOUTH ORGANIZATION": {
        "Organization": "Pakistan Youth Organization (PYO)",
        "Operating Area": "Gulshan Iqbal, Karachi",
        "History": "The purpose of the Youth association is to provide a platform for the young generation to groom and polish their talents along with utilizing those skills in achieving objectives that are productive for the betterment of our country and nation.",
        "CoreFunctions": "A forum for passionate youth to inculcate optimum skills.",
        "Credibility": "Registered under Societies Registration Act 1860.",
        "Programs": "Tauseef Memorial School for underprivileged children.",
        "Sustainability": "Charity-Based Organization",
        "CostofServices": " None",
        "Analysis": " ",
        "ReferencelinkWebsite": "https://pakngos.com.pk/ngo/pakistani-youth-organization-pyo",
    },
    "THE CITIZENS FOUNDATION": {
        "Organization": "The Citizens Foundation TCF",
        "Operating Area": "Karachi",
        "History": "The citizens foundation school was a joint venture of six friends who saw education as the key to the solution of multiple problems back in 1995. They opened a school in 1996 and has been operating since then and has spread its working gradually.",
        "CoreFunctions": "The Core function of TCF is to provide quality education to the underprivileged children.",
        "Credibility": "A registered educational institute.",
        "Programs": "Character Building, Teacher’s Training, Curriculum revision.",
        "Sustainability": "TCF handles its finances through a wide range of donations and charity both national and international.",
        "CostofServices": " None, negotiable.",
        "Analysis": "TCF is currently one of the strongest and steadfast institutes+-9 aiming to provide quality education in the country. ",
        "ReferencelinkWebsite": "https://www.tcf.org.pk/education-programme/",
    },


    "YOUTH EXPRESS PAKISTAN": {
        "Organization": "Youth Express Pakistan",
        "Operating Area": "Operates in the sub urban areas of Karachi now.",
        "History": "Youth express Pakistan (YEP) is an organization from the students of university of Karachi.",
        "CoreFunctions": "YEP (Youth Express Pakistan) The pillars of this organization are built to welfare the needy peoples through Donations from General Public.",
        "Credibility": "Registered by the Govt. of Sindh.",
        "Programs": "YEWO adopted school namely HBS School System located at prime location of North Karachi on 400 yards. It is the joint project of YEP and HBS trust, initially there are 150 students of class nursery to Matric. Students belong to poor families.",
        "Sustainability": "Based on Public donations.",
        "CostofServices": " None.",
        "Analysis": "YEP foundation is a student-based initiative aiming to aid the needy by channeling public funding. ",
        "ReferencelinkWebsite": "https://web.facebook.com/YouthExpressPakistan.Official",
    },
}

const { Content } = Layout

export const NGOPage = (props) => {
    let ngoName = props.name
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
                        <Link to={`/${ngoName}`}>
                            {ngoName}
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Descriptions title={ngoName} bordered>
                    <Descriptions.Item label="Organisation" span={3}>{data[ngoName].Organization}</Descriptions.Item>
                    <Descriptions.Item label="Operating Area" span={3}>{data[ngoName].OperatingArea}</Descriptions.Item>
                    <Descriptions.Item label="History" span={3}>{data[ngoName].History}</Descriptions.Item>
                    <Descriptions.Item label="CoreFunctions" span={3}>{data[ngoName].CoreFunctions}</Descriptions.Item>
                    <Descriptions.Item label="Credibility" span={3}>{data[ngoName].Credibility}</Descriptions.Item>
                    <Descriptions.Item label="Programs" span={3}>{data[ngoName].Programs}</Descriptions.Item>
                    <Descriptions.Item label="Sustainability" span={3}>{data[ngoName].Sustainability}</Descriptions.Item>
                    <Descriptions.Item label="CostOfServices" span={3}>{data[ngoName].CostofServices}</Descriptions.Item>
                    <Descriptions.Item label="Analysis" span={3}>{data[ngoName].Analysis}</Descriptions.Item>
                    <Descriptions.Item label="Referencelink / Website" span={3}><a className="underlineClass" href={data[ngoName].ReferencelinkWebsite}>{data[ngoName].ReferencelinkWebsite}</a></Descriptions.Item>
                </Descriptions>
            </div>
        </Content>)
}