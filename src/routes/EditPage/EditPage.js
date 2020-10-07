import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./EditPage.css";

export default class EditPage extends Component {
  // static defaultProps = {
  //   match: { params: {} },
  // };

  // static contextType = GymContext;

  // componentDidMount() {
  //   this.context.clearError();
  //   const { gymId } = this.props.match.params;

  //   GymApiService.getGym(gymId)
  //     .then(this.context.setGym)
  //     .catch(this.context.setError);
  // }

  // componentWillUnmount() {
  //   this.context.clearGym();
  // }

  render() {
    return (
      <>
        <div className="AccountPage">
          <form className="HostGymForm" onSubmit={this.handleSubmit}>
            <div className="AccountPage__header">
              <div className="Account__photo">
                {" "}
                <img
                  className=""
                  alt="Listed Gym"
                  src="https://s3-media0.fl.yelpcdn.com/bphoto/LYJeIsAfm_BZ5PPmRD9JtA/l.jpg"
                  width="100px"
                />
              </div>
              <div className="Account__name">
                <h1>Robledo Family Winery</h1>
              </div>
            </div>
            <div className="AccountPage__buttons">
              <button className="Account__lead">Mark As Lead</button>
              <button className="Account__not_interested">
                Mark as Not Interested
              </button>
              <button className="Account__sold">Mark as SOLD</button>
            </div>
            <div className="AccountPage__contact">
              <div className="Account__contact__header">Contact Info</div>
              <div className="Account__contact__content">
                <div className="Account__website">
                  Website: <input />
                </div>
                <div className="Account__phone">
                  Phone:
                  <input />
                </div>
                <div className="Account__address">
                  Address:
                  <input />
                </div>
              </div>
            </div>
            <div className="AccountPage__insights">
              <div className="Account__insights__header">Insights</div>
              <div className="Account__insights__content">
                <div className="Account__categories">
                  Categories:
                  <input />
                </div>
                <div className="Account__reviewcount">
                  Review Count:
                  <input />
                </div>
                <div className="Account__rating">
                  Rating:
                  <input />
                </div>
                <div className="Account__price">
                  Yelp Price:
                  <input />
                </div>
              </div>
            </div>
            <div className="AccountPage__notes">
              <div className="Account__notes__header">Notes</div>
              <div className="Account__insights__content">
                <div className="Account__website">
                  Date:
                  <input />
                </div>
                <div className="Account__phone">
                  Note:
                  <textarea rows="2" cols="20"></textarea>
                </div>
                <button>Add</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
