import { Layout, Menu, Breadcrumb } from 'antd';
import React,{useState,useEffect,useContext} from 'react'
import './adminpanel.css'
import 'antd/dist/antd.css';
import NavBar from '../../Components/HomeScreen/NavBar/NavBar';
import Cards from '../../Components/AdminPanel/Cards'
import firebase from "../../base";
import {AuthContext} from "../../Auth"


import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    BookOutlined,
    QuestionCircleOutlined,
    CheckOutlined,
    StopOutlined

} from '@ant-design/icons';

const { Header, Content,  Sider } = Layout;
const { SubMenu } = Menu;

const AdminPanel = (props) =>  {

  const [collapsed,SetCollapsed]= useState(true)
  const [Points, SetPoints]= useState()
  const [FirstName,SetFirstName]= useState()
  const [LastName, SetLastName] = useState()
  const [SuccessQuiz,SetSuccessQuiz] = useState()
  const [FailedQuiz, SetFailedQuiz] = useState()



  const onCollapse = collapsed => {

    SetCollapsed({ collapsed });
  };

 
  const {currentUser} = useContext(AuthContext);

   
  useEffect(()=> {
    const fetchData = async () => {
        const db = firebase.firestore()
        const Pts= await db.collection("users").doc(currentUser.uid).collection("points").doc("quizpoints").get()
        const firstlast= await db.collection("users").doc(currentUser.uid).collection("firstlast").doc("firstlast").get()
        SetFirstName(firstlast.data()["FirstName"])
        SetLastName(firstlast.data()["LastName"])
        SetPoints(Pts.data()["QuizPoints"])
        
    } 
    
    fetchData()
  
    
},[])



 
    return (
    <div>
     <NavBar />
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<BookOutlined />}>
              My Added Books
            </Menu.Item>
            <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
              My Uploaded Quizes
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckOutlined />}>
              Quizes passed
            </Menu.Item>
            <Menu.Item key="4" icon={<StopOutlined />}>
              Quizes failed
            </Menu.Item>
           
            
            
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>{FirstName}</Breadcrumb.Item>
            </Breadcrumb>
            <h2>Hello {FirstName}</h2>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 200, justifyContent:"space-between", flexWrap: "wrap" , display:'flex' }}>
              
               <Cards title = "Quizes Points"  content1 = {Points} />
               
            </div>
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  
}

//  ReactDOM.render(<SiderDemo />, mountNode);

export default AdminPanel