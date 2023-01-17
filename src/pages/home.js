import React  from "react";
import Card from "react-bootstrap/Card";
 
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useHistory as UseHistory } from "react-router-dom";
 

function home(props) {
  const { user } = props;

  const history = UseHistory();

  const handleGroupDetails = (id) => {
    history.push(`/environment/development/${id}`, {
      id: id,
    });
  };

  return (
    <div className="container text-center mt-20 ">
      <h1 className="display-1">Bienvenue</h1>
      <h2 className="py-5">Select votre espace pour découvrir les environments</h2>

      <div className="row">
        {user.map((el) => (
          <div
            key={el.id}
            className="col-4 pt-10"
            onClick={() => {
              handleGroupDetails(el.id);
            }}
          >
            <Card className="text-center   shadow h-200 d-flex justify-content-center align-items-center  btn btn-outline-info ">
              <Card.Body>
              
                <Card.Text className=" py-10 my-10 " style={{ fontSize: 50 }}>
                  {el.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { userreducer } = state;
  return {
    user: userreducer.user,
  };
};
export default withRouter(connect(mapStateToProps, {})(home));
