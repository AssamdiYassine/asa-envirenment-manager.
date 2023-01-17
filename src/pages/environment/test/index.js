import { Brand } from "components/brand/Brand";
import React, { useState as UseState } from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useParams as UseParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
 import Profil from "components/profil/profil";

function index(props) {
  const [show, setShow] = UseState(false);
  const hide = (bool) => {
    setShow(bool);
  };
  const [enviId,setEnviId] =UseState('')
  let id = UseParams();


  // let post = data.find(post=> (post.id).toString() === id);
  let post = props.user.find((ele) => ele.id.toString() === id.id);
 let postinfo = post.environment.test.find((ele) => ele.id.toString() === enviId.toString());


   
 
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
          {/* {width >= "980" ? (
        <div className={` asidewidth `}>
          <Aside t={t} />
        </div>
      ) : ( */}
          <div id="kt_aside" className={`aside aside-left d-flex aside-fixed `}>
            {/* begin::Primary */}
            <div className="aside-light bg-light d-flex flex-column align-items-center flex-row-auto w-150px  ">
              <Link to={"/"}>
                <Brand />
              </Link>

              {/* begin::Nav Wrapper */}
              {/* Remove " flex-column-fluid "::To solve aside footer bottom padding */}
              <div className="aside-nav d-flex flex-column align-items-center py-5 px-4 scrollA scrollA-pull">
                <div className={`scrollA scrollA-pull overflow-auto `}>
                  {/* begin::Nav */}
                  <ul className="list-unstyled flex-column" role="tablist">
                    {/* begin::Item */}

                    <div className="aside-separator" />
                    <MyNavLink
                      txt={"Development"}
                      link={`/environment/development/${id.id}`}
                    />

                    <MyNavLink
                      txt={"test"}
                      link={`/environment/test/${id.id}`}
                    />

                    <MyNavLink
                      txt={"performance"}
                      link={`/environment/performance/${id.id}`}
                    />

                    {/* end::Item */}
                  </ul>
                </div>

                {/* end::Nav */}
              </div>
              <div
                className=" aside-footer d-flex flex-column align-items-center flex-column-auto pt-4 py-lg-10 "
                style={{ marginTop: "auto" }}
              ></div>
              {/* end::Nav Wrapper */}
            </div>
            {/* end::Primary */}
          </div>
          {/* )} */}

          {/*begin::Wrapper*/}
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            {/*begin::Content*/}
            <div
              id="kt_content"
              className={`content d-flex flex-column flex-column-fluid pt-0 `}
            >
              {/* <AnimateLoading /> */}
              {/* {headerTitle && <SubHeader headerTitle={headerTitle} />} */}
              <div className="container mt-10">
                <div className="row">
                  {post.environment.test.map((el) => (
                    <div className=" col-4" key={el.id}   onClick={()=>{ setEnviId(el.id) ; setShow(true);}}>
                      <Card  className="mb-2 py-5 btn btn-success">
                        <Card.Body className="  text-center">
                          <Card.Title className="display-5  text-center"> environment:{el.id} </Card.Title>

                        


                          <div className="d-flex  text-center m-auto">
                            <Card.Title className="px-1 m-auto display-4">
                            {el.name}
                            </Card.Title>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              {show && <Profil show={show} hide={hide} postinfo={postinfo} />}
              {/*end::Entry*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const { userreducer } = state;
  return {
    user: userreducer.user,
  };
};

export default withRouter(connect(mapStateToProps, {})(index));

function MyNavLink({ link, txt }) {
  return (
    <li className="nav-item mb-3 py-10">
      <NavLink
        to={`${link}`}
        activeClassName="active"
        className="nav-link btn   btn-clean btn-lg"
      >
        {txt}
      </NavLink>
    </li>
  );
}
