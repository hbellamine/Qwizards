import { Layout, Menu, Breadcrumb } from "antd";
import React, { useState, useEffect, useContext } from "react";
import "./adminpanel.css";
import "antd/dist/antd.css";
import NavBar from "../../Components/HomeScreen/NavBar/NavBar";
import Cards from "../../Components/AdminPanel/Cards";
import Accordeon from "../../Components/AdminPanel/Accordeon";
import firebase from "../../base";
import { AuthContext } from "../../Auth";
import SuperAdmin from "../../Components/AdminPanel/SuperAdmin";
import { Spinner, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as BooksActions from "../../store/actions/books";

import {
  BookOutlined,
  QuestionCircleOutlined,
  CheckOutlined,
  StopOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const AdminPanel = (props) => {
  const [pending, setPending] = useState(true);
  const [collapsed, SetCollapsed] = useState(true);

  const onCollapse = (collapsed) => {
    SetCollapsed({ collapsed });
  };

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    props.onFetchisAdmin(currentUser);
    props.onFetchPoints(currentUser);
    props.onFetchFirstLast(currentUser);
    props.onFetchOkQuiz(currentUser);
    props.onFetchQuizListing();
    setPending(false);
  }, []);

  if (pending) {
    return (
      <div style={{ position: "fixed", top: "50%", left: "50%" }}>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
  }

  if (!props.isAdmin) {
    return (
      <div>
        <NavBar />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<BookOutlined />}></Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>{props.FirstName}</Breadcrumb.Item>
              </Breadcrumb>
              <h2>Hello {props.FirstName}</h2>
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 200,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  display: "flex",
                }}
              >
                <Cards title="Quizes Points" content1={props.Points} />

                {props.OkQuiz.map((item, i) => {
                  const book = props.AllBooks.filter(
                    (elem) => elem.id === item.BookId
                  );
                  console.log(book[0]["src"]);
                  return (
                    <Accordeon
                      key={i}
                      title={item.booktitle}
                      date={item.QuizDate}
                      BookTitle={item.Title}
                      result={item.Result}
                      Success={item.Success}
                      firstlast={props.FirstName}
                      lastname={props.LastName}
                      author={book[0]["author"]}
                      cover={book[0]["src"]}
                    />
                  );
                })}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>{props.FirstName}</Breadcrumb.Item>
              </Breadcrumb>
              <h2>Hello {props.FirstName}</h2>
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 200,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  display: "flex",
                }}
              >
                <SuperAdmin
                  Idquizzes={props.IdQuizzToValidate}
                  Quizzes={props.QuizToValidate}
                  Books={props.AllBooks}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    AllBooks: state.AllBooks,
    isAdmin: state.isAdmin,
    Points: state.Points,
    FirstName: state.FirstName,
    LastName: state.LastName,
    QuizToValidate: state.QuizToValidate,
    IdQuizzToValidate: state.IdQuizzToValidate,
    OkQuiz: state.OkQuiz,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBooks: () => dispatch(BooksActions.FetchBooks()),
    onFetchisAdmin: (currentUser) =>
      dispatch(BooksActions.FetchisAdmin(currentUser)),
    onFetchPoints: (currentUser) =>
      dispatch(BooksActions.FetchPoints(currentUser)),
    onFetchFirstLast: (currentUser) =>
      dispatch(BooksActions.FetchFirstLast(currentUser)),
    onFetchQuizListing: () => dispatch(BooksActions.FetchQuizListing()),
    onFetchOkQuiz: (currentUser) =>
      dispatch(BooksActions.FetchOkQuiz(currentUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
